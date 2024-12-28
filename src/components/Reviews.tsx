import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { useTranslation } from 'react-i18next';

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
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {[1, 2, 3].map((reviewNum, index) => (
            <motion.div
              key={reviewNum}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 transform rotate-1 rounded-2xl" />
              <div className="relative bg-white p-8 rounded-2xl shadow-xl">
                <div className="flex items-center">
                  <img
                    className="h-12 w-12 rounded-full ring-4 ring-blue-50"
                    src={`https://images.unsplash.com/photo-${t(`reviews.testimonials.${reviewNum}.image`)}?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80`}
                    alt={t(`reviews.testimonials.${reviewNum}.name`)}
                  />
                  <div className="ml-4">
                    <h4 className="text-lg font-bold text-gray-900">
                      {t(`reviews.testimonials.${reviewNum}.name`)}
                    </h4>
                    <p className="text-sm text-gray-500">
                      {t(`reviews.testimonials.${reviewNum}.role`)}
                    </p>
                  </div>
                </div>
                <div className="flex mt-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  {t(`reviews.testimonials.${reviewNum}.content`)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};