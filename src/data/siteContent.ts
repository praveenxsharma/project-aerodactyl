export const quickStats = [
  { label: 'ROMs tracked', value: '6 ROMs' },
  { label: 'Supported devices', value: '2 devices' },
  { label: 'Release flow', value: 'Telegram links' },
]

export const roms = [
  {
    name: 'Mist OS',
    version: 'v4.5',
    status: 'Fresh drop',
    branch: 'Android 16 base',
    tagline: 'A clean visual pass with strong daily-driver priorities.',
    buildDate: 'March 22, 2026',
    devices: ['Nothing Phone 2a', 'Nothing Phone 2a Plus'],
    channelLabel: '@replace_with_your_channel',
    telegramUrl: 'https://t.me/replace_with_your_channel/101',
    maintenanceNote: 'Builder note: tuned for stable rollouts',
    accent: '#ff7a62',
    accentSoft: 'rgba(255, 122, 98, 0.14)',
    accentStrong: '#d94f37',
    highlights: [
      'Launcher spacing refined for a lighter home surface.',
      'Camera and thermal tuning bundled into the same public drop.',
      'Patch summary stays short so users can decide quickly.',
    ],
  },
  {
    name: 'Lunaris OS',
    version: 'v3.8',
    status: 'Source synced',
    branch: 'QPR-style refresh',
    tagline: 'Balanced visuals and smoothness with a slightly richer style.',
    buildDate: 'March 21, 2026',
    devices: ['Nothing Phone 2a'],
    channelLabel: '@replace_with_your_channel',
    telegramUrl: 'https://t.me/replace_with_your_channel/102',
    maintenanceNote: 'Builder note: splash and setup flow refreshed',
    accent: '#17b68e',
    accentSoft: 'rgba(23, 182, 142, 0.14)',
    accentStrong: '#0f8c6c',
    highlights: [
      'Updated onboarding feel with brighter tonal surfaces.',
      'Animation timings tuned to stay quick on repeated navigation.',
      'Good fit for showing short release deltas and polish notes.',
    ],
  },
  {
    name: 'Infinity X',
    version: 'v3.8',
    status: 'Release candidate',
    branch: 'Feature-heavy lane',
    tagline: 'A denser feature set surfaced with still-readable changelog cards.',
    buildDate: 'March 20, 2026',
    devices: ['Nothing Phone 2a Plus'],
    channelLabel: '@replace_with_your_channel',
    telegramUrl: 'https://t.me/replace_with_your_channel/103',
    maintenanceNote: 'Builder note: testing queue on 2a Plus',
    accent: '#6c7cff',
    accentSoft: 'rgba(108, 124, 255, 0.14)',
    accentStrong: '#4557e6',
    highlights: [
      'Structured metadata keeps feature-rich ROMs from feeling cluttered.',
      'Status chip can flag release candidates or hotfix-needed builds.',
      'Telegram handoff stays obvious without dominating the card.',
    ],
  },
  {
    name: 'Evolution X',
    version: 'v11.6',
    status: 'Hot build',
    branch: 'Performance sweep',
    tagline: 'A strong hero ROM for the grid with big version framing.',
    buildDate: 'March 24, 2026',
    devices: ['Nothing Phone 2a', 'Nothing Phone 2a Plus'],
    channelLabel: '@replace_with_your_channel',
    telegramUrl: 'https://t.me/replace_with_your_channel/104',
    maintenanceNote: 'Builder note: motion and launcher cleanup landed',
    accent: '#1f5eff',
    accentSoft: 'rgba(31, 94, 255, 0.14)',
    accentStrong: '#1543bf',
    highlights: [
      'Version badge and tonal highlights call attention to the newest build.',
      'Keeps space for security merges, upstream syncs, and feature notes.',
      'Good candidate for pinning at the top when a major update lands.',
    ],
  },
  {
    name: 'PixelOS',
    version: 'v16.2',
    status: 'Stable lane',
    branch: 'Pixel-style track',
    tagline: 'Minimal, readable, and easy to trust at a glance.',
    buildDate: 'March 19, 2026',
    devices: ['Nothing Phone 2a'],
    channelLabel: '@replace_with_your_channel',
    telegramUrl: 'https://t.me/replace_with_your_channel/105',
    maintenanceNote: 'Builder note: ideal for smaller public notes',
    accent: '#3da3ff',
    accentSoft: 'rgba(61, 163, 255, 0.14)',
    accentStrong: '#0b71c7',
    highlights: [
      'Surface area works especially well for concise source and bug-fix notes.',
      'Device and channel metadata remains readable on smaller screens.',
      'Clean visual rhythm fits the simpler Pixel-style identity.',
    ],
  },
  {
    name: 'AxionOS',
    version: 'v2.5',
    status: 'Bring-up active',
    branch: 'Fast-moving track',
    tagline: 'Set up to communicate momentum even before every build feels final.',
    buildDate: 'March 18, 2026',
    devices: ['Nothing Phone 2a Plus'],
    channelLabel: '@replace_with_your_channel',
    telegramUrl: 'https://t.me/replace_with_your_channel/106',
    maintenanceNote: 'Builder note: active polish and iteration lane',
    accent: '#ffb64d',
    accentSoft: 'rgba(255, 182, 77, 0.14)',
    accentStrong: '#c37d12',
    highlights: [
      'Useful for early-stage bring-up notes and tester-facing expectations.',
      'Builder-side label can explain what is still settling before release.',
      'Lets you keep the community informed without overexplaining.',
    ],
  },
]

export const sourceChanges = [
  {
    title: 'Framework and SystemUI',
    date: 'March 24, 2026',
    summary:
      'Interface spacing and launch transitions were tightened so the ROMs feel quicker without becoming abrupt.',
    items: [
      'Notification and quick settings spacing aligned to the new expressive direction.',
      'App open and return motion tuned for less visual snap on repeated use.',
      'Lockscreen surface contrast improved for brighter wallpapers.',
    ],
  },
  {
    title: 'Device Tree and Vendor Integration',
    date: 'March 23, 2026',
    summary:
      'Builder-facing plumbing updates were grouped into one readable entry rather than scattered per ROM.',
    items: [
      'Common device-side cleanups merged for both Nothing variants where possible.',
      'Overlay and property alignment reduced duplicate maintenance work.',
      'Better room for future per-device notes when one build diverges.',
    ],
  },
  {
    title: 'Kernel and Thermal Lane',
    date: 'March 21, 2026',
    summary:
      'Performance and heat behavior changes are represented as plain-language highlights instead of raw commit noise.',
    items: [
      'Thermal behavior messaging can be kept user-readable on the website.',
      'Kernel sync notes are concise but still specific enough to build confidence.',
      'The card layout leaves space for hotfix follow-ups if needed.',
    ],
  },
]

export const builderUpdates = [
  {
    type: 'Workflow',
    date: 'March 25, 2026',
    title: 'Telegram-first release flow is now reflected in the UI',
    summary:
      'The website is structured so your community lands on release context first, then gets a direct handoff to the Telegram post.',
  },
  {
    type: 'Device Focus',
    date: 'March 24, 2026',
    title: 'Nothing Phone 2a Plus got a dedicated lane',
    summary:
      'Cards and device sections can now call out 2a Plus-only work instead of burying it inside shared release notes.',
  },
  {
    type: 'Scalability',
    date: 'March 23, 2026',
    title: 'More ROMs can be added without redesigning the page',
    summary:
      'The content model is data-driven, so adding another ROM later is a simple entry update rather than a layout rewrite.',
  },
]

export const supportMatrix = [
  {
    badge: 'Primary focus',
    name: 'Nothing Phone 2a',
    summary:
      'Daily-driver style presentation with release links, changelog pulse, and room for stable-lane ROM coverage.',
    focus: 'Best for broad release visibility and polished update cadence.',
  },
  {
    badge: 'Growth lane',
    name: 'Nothing Phone 2a Plus',
    summary:
      'The layout already supports separate notes for builds that need their own testing or bring-up communication.',
    focus: 'Best for device-specific progress and rapid follow-up posts.',
  },
]

export const expansionCards = [
  {
    title: 'Add ROMs Fast',
    summary:
      'Mist OS, Lunaris OS, Infinity X, Evolution X, PixelOS, and AxionOS are seeded now, and new ones can slot into the same grid later.',
  },
  {
    title: 'Swap In Live Data',
    summary:
      'The sample Telegram URLs and release metadata are centralized, which makes the first real content pass very fast.',
  },
  {
    title: 'Ready for Automation',
    summary:
      'If you want, we can later wire this up to JSON, Git commits, Telegram post IDs, or a lightweight admin workflow.',
  },
]
