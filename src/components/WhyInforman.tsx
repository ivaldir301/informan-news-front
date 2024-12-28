import { motion } from 'framer-motion';
import { Clock, Newspaper, Smartphone } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const featureIcons = {
  time: Clock,
  coverage: Newspaper,
  delivery: Smartphone,
} as const;

export const WhyInforman = () => {
  const { t } = useTranslation();

  const features = Object.entries(featureIcons).map(([key, Icon]) => ({
    icon: Icon,
    title: t(`whyInforman.features.${key}.title`),
    description: t(`whyInforman.features.${key}.description`)
  }));

  const processSteps = [
    { status: 'received' },
    { status: 'processing' },
    { status: 'generated' },
    { status: 'delivering', isActive: true }
  ] as const;

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
            <div className="mt-12 space-y-10">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex"
                >
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
                      <feature.icon className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-medium text-gray-900">{feature.title}</h3>
                    <p className="mt-2 text-gray-600">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
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
              <div className="absolute -right-4 top-1/2 transform -translate-y-1/2">
                <div className="bg-white rounded-lg shadow-lg p-4 w-64">
                  <div className="space-y-2">
                    {processSteps.map((step) => (
                      <div key={step.status} className="flex items-center space-x-2">
                        <div className={`h-4 w-4 rounded-full ${step.isActive ? 'bg-blue-500 animate-pulse' : 'bg-green-500'}`} />
                        <span className="text-sm font-medium">
                          {t(`whyInforman.process.${step.status}`)}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};