import { useTranslation } from 'react-i18next';
import { cn } from '../../../lib/utils';

interface PlanTypeSwitchProps {
  selectedType: 'personal' | 'business';
  onTypeChange: (type: 'personal' | 'business') => void;
}

export const PlanTypeSwitch = ({ selectedType, onTypeChange }: PlanTypeSwitchProps) => {
  const { t } = useTranslation();

  return (
    <div className="flex justify-center mb-8">
      <div className="bg-gray-100 p-1 rounded-lg inline-flex">
        <button
          onClick={() => onTypeChange('personal')}
          className={cn(
            'px-6 py-2 rounded-md text-sm font-medium transition-colors',
            selectedType === 'personal'
              ? 'bg-white text-gray-900 shadow-sm'
              : 'text-gray-500 hover:text-gray-900'
          )}
        >
          {t('register.planTypes.personal')}
        </button>
        <button
          onClick={() => onTypeChange('business')}
          className={cn(
            'px-6 py-2 rounded-md text-sm font-medium transition-colors',
            selectedType === 'business'
              ? 'bg-white text-gray-900 shadow-sm'
              : 'text-gray-500 hover:text-gray-900'
          )}
        >
          {t('register.planTypes.business')}
        </button>
      </div>
    </div>
  );
};