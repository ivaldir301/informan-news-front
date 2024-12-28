import { useTranslation } from 'react-i18next';
import { PlanType, PlanData } from '../types';

export const usePricingData = () => {
  const { t } = useTranslation();

  const getPlanData = (planType: PlanType): PlanData => {
    const basePath = `pricing.plans.${planType}`;
    const features = t(`${basePath}.features`, { returnObjects: true });
    
    return {
      name: t(`${basePath}.name`),
      price: t(`${basePath}.price`),
      features: Array.isArray(features) ? features : []
    };
  };

  const getCtaText = (planType: PlanType): string => {
    return t(`pricing.cta.${planType === 'free' ? 'free' : 'other'}`);
  };

  return {
    getPlanData,
    getCtaText
  };
};