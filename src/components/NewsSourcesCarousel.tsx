import { motion, useAnimationControls } from 'framer-motion';
import { Newspaper } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';

const newsSources = [
  {
    name: 'Inforpress',
    logo: 'https://inforpress.cv/favicon.ico'
  },
  {
    name: 'A Nação',
    logo: 'https://www.anacao.cv//wp-content/uploads/2020/09/logo-rodape-96.png'
  },
  {
    name: 'Expresso das Ilhas',
    logo: 'https://assets.expressodasilhas.cv/images/expressodasilhas-logo-white-64.png'
  },
  {
    name: 'A Semana',
    logo: 'https://asemana.cv/images/icon/logo-asemana-RGB1.png'
  },
  {
    name: 'RTC',
    logo: 'https://rtc.cv/upload/img/assets/logo.png'
  }
];

export const NewsSourcesCarousel = () => {
  const { t } = useTranslation();
  const controls = useAnimationControls();

  useEffect(() => {
    const animate = async () => {
      while (true) {
        await controls.start({
          x: '-100%',
          transition: {
            duration: 15,
            ease: 'linear'
          }
        });
        await controls.set({ x: '0%' });
      }
    };

    animate();
  }, [controls]);

  return (
    <div className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            {t('sources.title')}
          </h2>
        </div>

        <div className="relative overflow-hidden">
          <motion.div
            animate={controls}
            className="flex space-x-16 whitespace-nowrap"
          >
            {[...newsSources, ...newsSources].map((source, index) => (
              <div
                key={`${source.name}-${index}`}
                className="flex items-center justify-center w-48 h-24 bg-blue-50 rounded-lg shadow-sm"
              >
                <img
                  src={source.logo}
                  alt={source.name}
                  className="max-w-[120px] max-h-[60px] object-contain"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.parentElement!.innerHTML = `
                      <div class="flex flex-col items-center justify-center">
                        <div class="text-blue-600">
                          <svg class="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"/>
                            <path d="M18 14v4"/>
                            <path d="M18 10h.01"/>
                          </svg>
                        </div>
                        <span class="mt-2 text-sm font-medium text-gray-900">${source.name}</span>
                      </div>
                    `;
                  }}
                />
              </div>
            ))}
          </motion.div>

          <div className="absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-white to-transparent" />
          <div className="absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-white to-transparent" />
        </div>
      </div>
    </div>
  );
};