import { useTranslation } from 'react-i18next';
import { StatList } from './StatList';

export const Stats = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-blue-600">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            {t('stats.title')}
          </h2>
        </div>
        <StatList />
      </div>
    </div>
  );
};