export const quickStats = [
  { label: 'ROMs tracked', value: '6 ROMs' },
  { label: 'Supported devices', value: '2 devices' },
  { label: 'Release flow', value: 'Per-ROM tracking' },
]

export const roms = [
  {
    name: 'Mist OS',
    version: 'v4.5',
    status: 'Current build',
    branch: 'Android 16',
    tagline: 'Balanced daily-driver tuning with a clean base and stable pacing.',
    buildDate: 'March 22, 2026',
    devices: ['Nothing Phone 2a', 'Nothing Phone 2a Plus'],
    channelLabel: 'Telegram release feed',
    telegramUrl: '',
    maintenanceNote: 'Current lane: stability-first release cycle',
    accent: '#ff7a62',
    accentSoft: 'rgba(255, 122, 98, 0.14)',
    accentStrong: '#d94f37',
    highlights: [
      'Android 16 base aligned for Nothing Phone 2a and 2a Plus.',
      'Thermal, camera, and day-to-day polish grouped into the current drop.',
      'Release notes stay short enough to scan quickly before downloading.',
    ],
  },
  {
    name: 'Lunaris OS',
    version: 'v3.8',
    status: 'Current build',
    branch: 'QPR refresh',
    tagline: 'Smooth, polished, and tuned around a cleaner visual cadence.',
    buildDate: 'March 21, 2026',
    devices: ['Nothing Phone 2a'],
    channelLabel: 'Telegram release feed',
    telegramUrl: '',
    maintenanceNote: 'Current lane: visual polish and consistency',
    accent: '#17b68e',
    accentSoft: 'rgba(23, 182, 142, 0.14)',
    accentStrong: '#0f8c6c',
    highlights: [
      'Focused on a refined day-to-day feel without overloading the UI.',
      'Animation and surface tuning keep the build feeling quick and light.',
      'Clear version framing makes it easy to compare against other active ROMs.',
    ],
  },
  {
    name: 'Infinity X',
    version: 'v3.8',
    status: 'Active lane',
    branch: 'Feature track',
    tagline: 'A broader feature set presented without sacrificing clarity.',
    buildDate: 'March 20, 2026',
    devices: ['Nothing Phone 2a Plus'],
    channelLabel: 'Telegram release feed',
    telegramUrl: '',
    maintenanceNote: 'Current lane: feature validation on 2a Plus',
    accent: '#6c7cff',
    accentSoft: 'rgba(108, 124, 255, 0.14)',
    accentStrong: '#4557e6',
    highlights: [
      'Designed for a denser set of changes while keeping release notes readable.',
      'Per-ROM tracking helps feature-heavy builds stay separated from the rest.',
      'Side metadata gives testers a quick view of date, target device, and lane.',
    ],
  },
  {
    name: 'Evolution X',
    version: 'v11.6',
    status: 'Featured build',
    branch: 'Performance pass',
    tagline: 'Strong release framing with a clear emphasis on current build state.',
    buildDate: 'March 24, 2026',
    devices: ['Nothing Phone 2a', 'Nothing Phone 2a Plus'],
    channelLabel: 'Telegram release feed',
    telegramUrl: '',
    maintenanceNote: 'Current lane: public-facing mainline build',
    accent: '#1f5eff',
    accentSoft: 'rgba(31, 94, 255, 0.14)',
    accentStrong: '#1543bf',
    highlights: [
      'Large version framing keeps the newest release obvious at a glance.',
      'Good fit for major drops, upstream sync notes, and wider public visibility.',
      'Works well as the top-pinned ROM when a fresh update lands.',
    ],
  },
  {
    name: 'PixelOS',
    version: 'v16.2',
    status: 'Stable lane',
    branch: 'Pixel track',
    tagline: 'Minimal presentation, quick readability, and easy release scanning.',
    buildDate: 'March 19, 2026',
    devices: ['Nothing Phone 2a'],
    channelLabel: 'Telegram release feed',
    telegramUrl: '',
    maintenanceNote: 'Current lane: concise stable updates',
    accent: '#3da3ff',
    accentSoft: 'rgba(61, 163, 255, 0.14)',
    accentStrong: '#0b71c7',
    highlights: [
      'Clean layout supports shorter notes without looking sparse.',
      'Ideal for stable release communication and small incremental drops.',
      'Device targeting stays clear even on narrower mobile screens.',
    ],
  },
  {
    name: 'AxionOS',
    version: 'v2.5',
    status: 'Bring-up lane',
    branch: 'Fast-moving track',
    tagline: 'A sharper lane for faster progress updates and iterative releases.',
    buildDate: 'March 18, 2026',
    devices: ['Nothing Phone 2a Plus'],
    channelLabel: 'Telegram release feed',
    telegramUrl: '',
    maintenanceNote: 'Current lane: active iteration and bring-up',
    accent: '#ffb64d',
    accentSoft: 'rgba(255, 182, 77, 0.14)',
    accentStrong: '#c37d12',
    highlights: [
      'Useful for communicating momentum while the build is still evolving.',
      'A good fit for tester-facing notes and faster release turnover.',
      'Keeps early-stage progress visible without blending into stable lanes.',
    ],
  },
]

export const sourceChanges = [
  {
    title: 'Framework and SystemUI',
    date: 'March 24, 2026',
    summary:
      'Recent interface work focused on tightening motion, spacing, and readability across the current Android 16 base.',
    items: [
      'Quick settings and notification spacing were refined for better visual balance.',
      'App launch and return motion was tightened to feel quicker without becoming abrupt.',
      'Lockscreen contrast tuning improved legibility across brighter wallpapers.',
    ],
  },
  {
    title: 'Device Tree and Vendor',
    date: 'March 23, 2026',
    summary:
      'Shared device-side cleanup reduced duplicated maintenance between the Nothing Phone 2a and 2a Plus trees.',
    items: [
      'Common overlay and property alignment was cleaned up across both variants.',
      'Vendor-side adjustments were grouped to make future bring-up changes easier to track.',
      'Per-device divergence remains easy to call out when one lane needs separate handling.',
    ],
  },
  {
    title: 'Kernel and Thermal',
    date: 'March 21, 2026',
    summary:
      'Kernel-side and thermal-facing work continues to be summarized in plain language rather than raw commit lists.',
    items: [
      'Thermal messaging stays readable for users while still useful to testers.',
      'Kernel sync notes are short, specific, and easy to scan before flashing.',
      'The layout leaves room for follow-up fixes or hot builds when needed.',
    ],
  },
]

export const builderUpdates = [
  {
    type: 'Workflow',
    date: 'March 25, 2026',
    title: 'Per-ROM release tracking is now the default layout',
    summary:
      'Each ROM now has a dedicated lane for version context, device targeting, and release-side notes instead of sharing one mixed release grid.',
  },
  {
    type: 'Device Focus',
    date: 'March 24, 2026',
    title: '2a Plus-specific work is easier to surface cleanly',
    summary:
      'Device-specific updates can now sit in their own ROM lanes without being buried inside shared release notes or generic changelog cards.',
  },
  {
    type: 'Scalability',
    date: 'March 23, 2026',
    title: 'The site is ready for more ROMs and more release lanes',
    summary:
      'The current structure scales cleanly if more ROMs, devices, or release metadata need to be added later.',
  },
]

export const supportMatrix = [
  {
    badge: 'Primary target',
    name: 'Nothing Phone 2a',
    summary:
      'Structured for broad release visibility, concise changelog summaries, and stable-lane ROM coverage.',
    focus: 'Best for public drops, stable updates, and wider community-facing releases.',
  },
  {
    badge: 'Device-specific lane',
    name: 'Nothing Phone 2a Plus',
    summary:
      'The layout already supports separate notes when 2a Plus builds need their own timing, testing, or rollout context.',
    focus: 'Best for faster bring-up cycles, device-specific notes, and follow-up testing posts.',
  },
]

export const expansionCards = [
  {
    title: 'Add More ROMs',
    summary:
      'New ROMs can be added by extending the same content model without redesigning the homepage structure.',
  },
  {
    title: 'Map Release Links',
    summary:
      'Telegram release posts can be attached per ROM, per build, and swapped in without touching the layout itself.',
  },
  {
    title: 'Extend the Workflow',
    summary:
      'The current setup is ready for future JSON feeds, Git-based release data, or a lightweight content workflow when needed.',
  },
]
