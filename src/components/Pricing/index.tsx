import { motion } from 'framer-motion';
import { PricingHeader } from './PricingHeader';
import { PricingCard } from './PricingCard';
import { PlanType } from './types';
import { usePricingData } from './hooks/usePricingData';

const PLAN_TYPES: PlanType[] = ['free', 'pro', 'enterprise'];

export const Pricing = () => {
  const { getPlanData, getCtaText } = usePricingData();

  return (
    <motion.div 
      className="bg-white py-24 relative" 
      id="pricing"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PricingHeader />

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {PLAN_TYPES.map((planType) => {
            const planData = getPlanData(planType);
            
            return (
              <PricingCard
                key={planType}
                planType={planType}
                name={planData.name}
                price={planData.price}
                features={planData.features}
                ctaText={getCtaText(planType)}
              />
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};