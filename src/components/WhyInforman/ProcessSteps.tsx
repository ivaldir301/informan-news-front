import { useTranslation } from 'react-i18next';
import { ProcessStep } from './ProcessStep';

const steps = [
  { status: 'received' },
  { status: 'processing' },
  { status: 'generated' },
  { status: 'delivering', isActive: true }
] as const;

export const ProcessSteps = () => {
  const { t } = useTranslation();

  return (
    <div className="absolute -right-4 top-1/2 transform -translate-y-1/2">
      <div className="bg-white rounded-lg shadow-lg p-4 w-64">
        <div className="space-y-2">
          {steps.map((step) => (
            <ProcessStep
              key={step.status}
              status={step.status}
              isActive={step.isActive}
            />
          ))}
        </div>
      </div>
    </div>
  );
};