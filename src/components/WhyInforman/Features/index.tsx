import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FeatureList } from './FeatureList';

export const Features = () => {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
        {t('whyInforman.title')}
      </h2>
      <p className="mt-4 text-lg text-gray-600">
        {t('whyInforman.description')}
      </p>
      <FeatureList />
    </motion.div>
  );
};