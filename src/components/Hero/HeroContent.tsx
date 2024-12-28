import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export const HeroContent = () => {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center px-4 sm:px-6"
    >
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight font-extrabold text-gray-900">
        <span className="block">{t('hero.title')}</span>
        <span className="block text-blue-600">{t('hero.subtitle')}</span>
      </h1>
      <p className="mt-3 max-w-md mx-auto text-sm sm:text-base md:text-lg lg:text-xl text-gray-500 sm:mt-5 md:max-w-3xl">
        {t('hero.description')}
      </p>
    </motion.div>
  );
};