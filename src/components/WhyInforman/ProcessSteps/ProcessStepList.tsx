import { useTranslation } from 'react-i18next';
import { ProcessStep } from './ProcessStep';
import { PROCESS_STEPS } from './constants';

export const ProcessStepList = () => {
  return (
    <div className="space-y-2">
      {PROCESS_STEPS.map((step) => (
        <ProcessStep
          key={step.status}
          status={step.status}
          isActive={step.isActive}
        />
      ))}
    </div>
  );
};