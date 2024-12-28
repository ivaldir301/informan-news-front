import { useTranslation } from 'react-i18next';
import { LogoMarquee } from './LogoMarquee';

export const NewsSourcesCarousel = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-white py-12 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
            {t('sources.title')}
          </h2>
        </div>
        <div className="relative overflow-hidden">
          <LogoMarquee />
          <div className="absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-white to-transparent" />
          <div className="absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-white to-transparent" />
        </div>
      </div>
    </div>
  );
};