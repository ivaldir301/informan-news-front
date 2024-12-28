import { useTranslation } from 'react-i18next';

interface ProcessStepProps {
  status: string;
  isActive?: boolean;
}

export const ProcessStep = ({ status, isActive = false }: ProcessStepProps) => {
  const { t } = useTranslation();
  
  return (
    <div className="flex items-center space-x-2">
      <div className={`h-4 w-4 rounded-full ${isActive ? 'bg-blue-500 animate-pulse' : 'bg-green-500'}`} />
      <span className="text-sm font-medium">
        {t(`whyInforman.process.${status}`)}
      </span>
    </div>
  );
};