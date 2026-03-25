import { useEffect, useRef } from 'react'

export function useSceneMotion() {
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const node = ref.current

    if (!node) {
      return
    }

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')

    if (prefersReducedMotion.matches) {
      node.style.setProperty('--pointer-x', '50%')
      node.style.setProperty('--pointer-y', '30%')
      node.style.setProperty('--trail-x', '50%')
      node.style.setProperty('--trail-y', '30%')
      node.style.setProperty('--scene-shift-x', '0px')
      node.style.setProperty('--scene-shift-y', '0px')
      node.style.setProperty('--scene-tilt', '0deg')
      node.style.setProperty('--scroll-progress', '0')
      return
    }

    const target = { x: 0.5, y: 0.28, scroll: 0 }
    const current = { x: 0.5, y: 0.28, scroll: 0 }
    const trail = { x: 0.5, y: 0.28 }
    let frame = 0

    const updateStyles = () => {
      current.x += (target.x - current.x) * 0.08
      current.y += (target.y - current.y) * 0.08
      current.scroll += (target.scroll - current.scroll) * 0.06
      trail.x += (current.x - trail.x) * 0.045
      trail.y += (current.y - trail.y) * 0.045

      const shiftX = (current.x - 0.5) * 84
      const shiftY = (current.y - 0.5) * 60
      const tilt = (current.x - 0.5) * 4

      node.style.setProperty('--pointer-x', `${(current.x * 100).toFixed(2)}%`)
      node.style.setProperty('--pointer-y', `${(current.y * 100).toFixed(2)}%`)
      node.style.setProperty('--trail-x', `${(trail.x * 100).toFixed(2)}%`)
      node.style.setProperty('--trail-y', `${(trail.y * 100).toFixed(2)}%`)
      node.style.setProperty('--scene-shift-x', `${shiftX.toFixed(2)}px`)
      node.style.setProperty('--scene-shift-y', `${shiftY.toFixed(2)}px`)
      node.style.setProperty('--scene-tilt', `${tilt.toFixed(2)}deg`)
      node.style.setProperty('--scroll-progress', current.scroll.toFixed(4))

      frame = window.requestAnimationFrame(updateStyles)
    }

    const handlePointerMove = (event: PointerEvent) => {
      target.x = event.clientX / window.innerWidth
      target.y = event.clientY / window.innerHeight
    }

    const handlePointerLeave = () => {
      target.x = 0.5
      target.y = 0.28
    }

    const handleScroll = () => {
      const maxScroll = Math.max(
        1,
        document.documentElement.scrollHeight - window.innerHeight,
      )
      target.scroll = window.scrollY / maxScroll
    }

    frame = window.requestAnimationFrame(updateStyles)
    window.addEventListener('pointermove', handlePointerMove, { passive: true })
    window.addEventListener('pointerleave', handlePointerLeave)
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => {
      window.cancelAnimationFrame(frame)
      window.removeEventListener('pointermove', handlePointerMove)
      window.removeEventListener('pointerleave', handlePointerLeave)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return ref
}
