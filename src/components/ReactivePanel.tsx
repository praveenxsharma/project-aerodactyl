import {
  type ComponentPropsWithoutRef,
  type ElementType,
  type ReactNode,
  useEffect,
  useRef,
} from 'react'

type BaseProps<T extends ElementType> = {
  as?: T
  children: ReactNode
  className?: string
  intensity?: number
}

type ReactivePanelProps<T extends ElementType> = BaseProps<T> &
  Omit<ComponentPropsWithoutRef<T>, keyof BaseProps<T>>

export function ReactivePanel<T extends ElementType = 'div'>({
  as,
  children,
  className = '',
  intensity = 1,
  ...rest
}: ReactivePanelProps<T>) {
  const Component = (as ?? 'div') as ElementType
  const ref = useRef<HTMLElement | null>(null)
  const frameRef = useRef<number>(0)
  const targetRef = useRef({ x: 0.5, y: 0.5, active: 0 })
  const currentRef = useRef({ x: 0.5, y: 0.5, active: 0 })

  useEffect(() => {
    const node = ref.current

    if (!node) {
      return
    }

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)')

    if (reduced.matches) {
      node.style.setProperty('--panel-rotate-x', '0deg')
      node.style.setProperty('--panel-rotate-y', '0deg')
      node.style.setProperty('--panel-glow-x', '50%')
      node.style.setProperty('--panel-glow-y', '50%')
      node.style.setProperty('--panel-lift', '0px')
      node.style.setProperty('--panel-active', '0')
      return
    }

    const update = () => {
      const current = currentRef.current
      const target = targetRef.current

      current.x += (target.x - current.x) * 0.12
      current.y += (target.y - current.y) * 0.12
      current.active += (target.active - current.active) * 0.14

      const rotateY = (current.x - 0.5) * 10 * intensity
      const rotateX = (0.5 - current.y) * 10 * intensity
      const lift = current.active * 10 * intensity

      node.style.setProperty('--panel-rotate-x', `${rotateX.toFixed(2)}deg`)
      node.style.setProperty('--panel-rotate-y', `${rotateY.toFixed(2)}deg`)
      node.style.setProperty('--panel-glow-x', `${(current.x * 100).toFixed(2)}%`)
      node.style.setProperty('--panel-glow-y', `${(current.y * 100).toFixed(2)}%`)
      node.style.setProperty('--panel-lift', `${lift.toFixed(2)}px`)
      node.style.setProperty('--panel-active', current.active.toFixed(3))

      frameRef.current = window.requestAnimationFrame(update)
    }

    frameRef.current = window.requestAnimationFrame(update)

    return () => {
      window.cancelAnimationFrame(frameRef.current)
    }
  }, [intensity])

  const handlePointerMove: NonNullable<ComponentPropsWithoutRef<'div'>['onPointerMove']> = (
    event,
  ) => {
    const node = ref.current

    if (!node) {
      return
    }

    const rect = node.getBoundingClientRect()
    const x = (event.clientX - rect.left) / rect.width
    const y = (event.clientY - rect.top) / rect.height

    targetRef.current.x = Math.max(0, Math.min(1, x))
    targetRef.current.y = Math.max(0, Math.min(1, y))
    targetRef.current.active = 1
  }

  const handlePointerLeave: NonNullable<ComponentPropsWithoutRef<'div'>['onPointerLeave']> = () => {
    targetRef.current.x = 0.5
    targetRef.current.y = 0.5
    targetRef.current.active = 0
  }

  return (
    <Component
      {...rest}
      className={`reactive-panel ${className}`.trim()}
      onPointerLeave={handlePointerLeave}
      onPointerMove={handlePointerMove}
      ref={ref}
    >
      {children}
    </Component>
  )
}
