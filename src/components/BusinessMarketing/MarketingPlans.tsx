import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Button } from '../ui/button';
import { Check } from 'lucide-react';

export const MarketingPlans = () => {
  const { t } = useTranslation();
  const planTypes = ['basic', 'pro'] as const;

  const getFeatures = (type: string): string[] => {
    const features = t(`marketing.plans.${type}.features`, { returnObjects: true });
    return Array.isArray(features) ? features : [];
  };

  return (
    <div className="mt-20">
      <div className="grid gap-8 lg:grid-cols-2 max-w-4xl mx-auto">
        {planTypes.map((type, index) => {
          const features = getFeatures(type);
          
          return (
            <motion.div
              key={type}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`bg-white rounded-lg p-8 ${
                type === 'pro' 
                  ? 'ring-2 ring-blue-500 shadow-xl' 
                  : 'shadow-sm'
              }`}
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {t(`marketing.plans.${type}.name`)}
                  </h3>
                  <p className="mt-4 flex items-baseline">
                    <span className="text-4xl font-extrabold tracking-tight text-gray-900">
                      ${t(`marketing.plans.${type}.price`)}
                    </span>
                    <span className="ml-1 text-xl font-semibold text-gray-500">/month</span>
                  </p>
                </div>
                {type === 'pro' && (
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                    Popular
                  </span>
                )}
              </div>
              <p className="mt-2 text-sm text-gray-500">
                {t(`marketing.plans.${type}.description`)}
              </p>
              <ul className="mt-6 space-y-4">
                {features.map((feature) => (
                  <li key={feature} className="flex">
                    <Check className="h-5 w-5 text-green-500 shrink-0" />
                    <span className="ml-3 text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                variant={type === 'pro' ? 'default' : 'outline'}
                className={`mt-8 w-full ${
                  type === 'pro' ? 'bg-blue-600 hover:bg-blue-700' : ''
                }`}
              >
                {t('marketing.plans.cta')}
              </Button>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};