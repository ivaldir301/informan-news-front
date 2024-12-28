export const processSteps = [
  { status: 'received' },
  { status: 'processing' },
  { status: 'generated' },
  { status: 'delivering', isActive: true }
] as const;

export const featureIcons = {
  time: 'Clock',
  coverage: 'Newspaper',
  delivery: 'Smartphone'
} as const;