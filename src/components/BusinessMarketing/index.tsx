import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { MarketingFeatures } from './MarketingFeatures';
import { MarketingPlans } from './MarketingPlans';

export const BusinessMarketing = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-gray-50 py-24" id="business">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            {t('marketing.title')}
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            {t('marketing.description')}
          </p>
        </motion.div>

        <MarketingFeatures />
        <MarketingPlans />
      </div>
    </div>
  );
};