import { useTranslation } from 'react-i18next';
import { StatItem } from './StatItem';
import { statKeys } from './constants';

export const StatList = () => {
  const { t } = useTranslation();

  const stats = statKeys.map(key => ({
    label: t(`stats.${key}`),
    value: key === 'activeUsers' ? '10,000+' :
           key === 'whatsappSubs' ? '5,000+' :
           key === 'emailSubs' ? '3,000+' : '2,000+'
  }));

  return (
    <dl className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
      {stats.map((stat, index) => (
        <StatItem
          key={stat.label}
          label={stat.label}
          value={stat.value}
          index={index}
        />
      ))}
    </dl>
  );
};