export const PLAN_TYPES = ['free', 'pro', 'enterprise'] as const;

export type PlanType = typeof PLAN_TYPES[number];