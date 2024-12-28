import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Features } from './Features';
import { ProcessSteps } from './ProcessSteps';

export const WhyInforman = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-24 items-center">
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
            <Features />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-12 lg:mt-0"
          >
            <div className="relative">
              <img
                className="w-full rounded-lg shadow-xl"
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
                alt={t('whyInforman.imageAlt')}
              />
              <ProcessSteps />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};