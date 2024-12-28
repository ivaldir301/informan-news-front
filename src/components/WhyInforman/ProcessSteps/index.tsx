import { useTranslation } from 'react-i18next';
import { ProcessStepList } from './ProcessStepList';

export const ProcessSteps = () => {
  return (
    <div className="absolute -right-4 top-1/2 transform -translate-y-1/2">
      <div className="bg-white rounded-lg shadow-lg p-4 w-64">
        <ProcessStepList />
      </div>
    </div>
  );
};