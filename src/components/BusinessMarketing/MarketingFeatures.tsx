import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Target, Users, TrendingUp, BarChart } from 'lucide-react';

const features = [
  { icon: Target, key: 'targeting' },
  { icon: Users, key: 'reach' },
  { icon: TrendingUp, key: 'engagement' },
  { icon: BarChart, key: 'analytics' }
];

export const MarketingFeatures = () => {
  const { t } = useTranslation();

  return (
    <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
      {features.map((Feature, index) => (
        <motion.div
          key={Feature.key}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="relative bg-white p-6 rounded-lg shadow-sm"
        >
          <div className="absolute -top-4 left-6">
            <div className="bg-blue-600 p-3 rounded-lg">
              <Feature.icon className="h-6 w-6 text-white" />
            </div>
          </div>
          <h3 className="mt-8 text-lg font-semibold text-gray-900">
            {t(`marketing.features.${Feature.key}.title`)}
          </h3>
          <p className="mt-2 text-gray-600">
            {t(`marketing.features.${Feature.key}.description`)}
          </p>
        </motion.div>
      ))}
    </div>
  );
};