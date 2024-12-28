export const PROCESS_STEPS = [
  { status: 'received' },
  { status: 'processing' },
  { status: 'generated' },
  { status: 'delivering', isActive: true }
] as const;