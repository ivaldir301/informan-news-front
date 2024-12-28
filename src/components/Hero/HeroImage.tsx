import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export const HeroImage = () => {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="hidden md:block mt-16 -mx-6 lg:-mx-8 px-4 sm:px-0"
    >
      <img
        src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80"
        alt={t('hero.imageAlt')}
        className="w-full h-[400px] lg:h-[600px] object-cover rounded-lg shadow-xl"
      />
    </motion.div>
  );
};