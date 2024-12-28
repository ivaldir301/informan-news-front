export type PlanType = 'free' | 'pro' | 'enterprise';

export interface PlanData {
  name: string;
  price: string;
  features: string[];
}

export interface PricingCardProps {
  planType: PlanType;
  name: string;
  price: string;
  features: string[];
  ctaText: string;
  highlighted?: boolean;
  onClick?: () => void;
}