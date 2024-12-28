import { motion } from 'framer-motion';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { PricingCard } from '../../../components/Pricing/PricingCard';
import { Button } from '../../../components/ui/button';
import { useRegisterPricing } from '../hooks/useRegisterPricing';
import { PlanTypeSwitch } from './PlanTypeSwitch';
import { PlatformSelection } from './PlatformSelection';
import { BusinessPlanNotification } from './BusinessPlanNotification';

export const RegisterPricing = () => {
  const { t } = useTranslation();
  const [planType, setPlanType] = useState<'personal' | 'business'>('personal');
  const [isPlatformSelectionOpen, setIsPlatformSelectionOpen] = useState(false);
  const [isBusinessNotificationOpen, setIsBusinessNotificationOpen] = useState(false);
  const { getPersonalPlans, getBusinessPlans, getCtaText } = useRegisterPricing();

  const plans = planType === 'personal' ? getPersonalPlans() : getBusinessPlans();

  const handlePlanClick = () => {
    if (planType === 'business') {
      setIsBusinessNotificationOpen(true);
    } else {
      setIsPlatformSelectionOpen(true);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mt-12"
    >
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="px-6 py-8 sm:p-10 space-y-8">
          <PlanTypeSwitch selectedType={planType} onTypeChange={setPlanType} />

          <div className={`grid gap-8 ${planType === 'personal' ? 'lg:grid-cols-3' : 'lg:grid-cols-2 lg:max-w-4xl lg:mx-auto'}`}>
            {plans.map((plan) => (
              <PricingCard
                key={plan.type}
                planType={plan.type}
                name={plan.name}
                price={plan.price}
                features={plan.features}
                ctaText={getCtaText(plan.type)}
                highlighted={planType === 'personal' && plan.type === 'pro'}
                onClick={handlePlanClick}
              />
            ))}
          </div>

          {planType === 'personal' && (
            <div className="pt-6 border-t border-gray-200">
              <Button
                variant="outline"
                size="lg"
                className="w-full py-6 text-lg font-medium border-2 border-blue-200 hover:bg-blue-50 hover:border-blue-300 transition-colors"
                onClick={() => setIsPlatformSelectionOpen(true)}
              >
                {t('register.betaAccess')}
              </Button>
            </div>
          )}
        </div>
      </div>

      <PlatformSelection
        isOpen={isPlatformSelectionOpen}
        onClose={() => setIsPlatformSelectionOpen(false)}
      />

      <BusinessPlanNotification
        isOpen={isBusinessNotificationOpen}
        onClose={() => setIsBusinessNotificationOpen(false)}
      />
    </motion.div>
  );
};