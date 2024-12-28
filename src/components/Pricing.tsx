import { Check } from 'lucide-react';
import { Button } from './ui/button';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export const Pricing = () => {
  const { t } = useTranslation();
  const planTypes = ['free', 'pro', 'enterprise'] as const;

  return (
    <motion.div 
      className="bg-white py-24 relative" 
      id="pricing"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            {t('pricing.title')}
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            {t('pricing.subtitle')}
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {planTypes.map((planType) => (
            <motion.div
              key={planType}
              className="relative bg-white rounded-2xl shadow-lg p-8 flex flex-col transition-all duration-300"
              whileHover={{ 
                scale: 1.05,
                zIndex: 1,
                transition: { duration: 0.2 }
              }}
            >
              <h3 className="text-xl font-semibold text-gray-900">
                {t(`pricing.plans.${planType}.name`)}
              </h3>
              <p className="mt-4 flex items-baseline">
                <span className="text-4xl font-extrabold tracking-tight text-gray-900">
                  ${t(`pricing.plans.${planType}.price`)}
                </span>
                <span className="ml-1 text-xl font-semibold text-gray-500">/month</span>
              </p>
              <ul className="mt-6 space-y-4 flex-1">
                {t(`pricing.plans.${planType}.features`, { returnObjects: true }).map((feature: string) => (
                  <li key={feature} className="flex">
                    <Check className="h-5 w-5 text-green-500 shrink-0" />
                    <span className="ml-3 text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                variant={planType === 'pro' ? 'default' : 'outline'}
                className={`mt-8 w-full ${
                  planType === 'pro' ? 'bg-blue-600 hover:bg-blue-700' : ''
                }`}
              >
                {t(`pricing.cta.${planType === 'free' ? 'free' : 'other'}`)}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};