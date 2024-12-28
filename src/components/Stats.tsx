import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export const Stats = () => {
  const { t } = useTranslation();
  const statKeys = ['activeUsers', 'whatsappSubs', 'emailSubs', 'socialFollowers'];

  return (
    <div className="bg-blue-600">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            {t('stats.title')}
          </h2>
        </div>
        <dl className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
          {statKeys.map((key, index) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col text-center"
            >
              <dt className="order-2 mt-2 text-lg leading-6 font-medium text-blue-200">
                {t(`stats.${key}`)}
              </dt>
              <dd className="order-1 text-4xl font-extrabold text-white">
                {t(`stats.values.${key}`)}
              </dd>
            </motion.div>
          ))}
        </dl>
      </div>
    </div>
  );
};