import { useTranslation } from 'react-i18next';

export const PricingHeader = () => {
  const { t } = useTranslation();

  return (
    <div className="text-center">
      <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
        {t('pricing.title')}
      </h2>
      <p className="mt-4 text-xl text-gray-600">
        {t('pricing.subtitle')}
      </p>
    </div>
  );
};