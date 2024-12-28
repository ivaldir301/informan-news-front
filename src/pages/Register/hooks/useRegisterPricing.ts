import { useTranslation } from 'react-i18next';
import { PlanType } from '../../../components/Pricing/types';

export const useRegisterPricing = () => {
  const { t } = useTranslation();

  const getFeatures = (path: string): string[] => {
    const features = t(path, { returnObjects: true });
    return Array.isArray(features) ? features : [];
  };

  const getPersonalPlans = () => {
    return [
      {
        type: 'free' as PlanType,
        name: t('pricing.plans.free.name'),
        price: t('pricing.plans.free.price'),
        features: getFeatures('pricing.plans.free.features')
      },
      {
        type: 'pro' as PlanType,
        name: t('pricing.plans.pro.name'),
        price: t('pricing.plans.pro.price'),
        features: getFeatures('pricing.plans.pro.features')
      },
      {
        type: 'enterprise' as PlanType,
        name: t('pricing.plans.enterprise.name'),
        price: t('pricing.plans.enterprise.price'),
        features: getFeatures('pricing.plans.enterprise.features')
      }
    ];
  };

  const getBusinessPlans = () => {
    return [
      {
        type: 'pro' as PlanType,
        name: t('pricing.plans.business.basic.name'),
        price: t('pricing.plans.business.basic.price'),
        features: getFeatures('pricing.plans.business.basic.features')
      },
      {
        type: 'enterprise' as PlanType,
        name: t('pricing.plans.business.pro.name'),
        price: t('pricing.plans.business.pro.price'),
        features: getFeatures('pricing.plans.business.pro.features')
      }
    ];
  };

  const getCtaText = (planType: PlanType): string => {
    return t(`pricing.cta.${planType === 'free' ? 'free' : 'other'}`);
  };

  return {
    getPersonalPlans,
    getBusinessPlans,
    getCtaText
  };
};