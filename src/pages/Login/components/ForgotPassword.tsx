import { useTranslation } from 'react-i18next';

export const ForgotPassword = () => {
  const { t } = useTranslation();

  return (
    <div className="text-sm">
      <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
        {t('login.forgot')}
      </a>
    </div>
  );
};