import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ReviewList } from './ReviewList';

export const Reviews = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            {t('reviews.title')}
          </h2>
        </motion.div>
        <ReviewList />
      </div>
    </div>
  );
};