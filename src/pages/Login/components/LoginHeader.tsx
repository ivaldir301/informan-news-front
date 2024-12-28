import { useTranslation } from 'react-i18next';
import { Logo } from '../../../components/Logo';

export const LoginHeader = () => {
  const { t } = useTranslation();

  return (
    <div className="sm:mx-auto sm:w-full sm:max-w-md">
      <div className="flex justify-center">
        <Logo />
      </div>
      <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
        {t('login.title')}
      </h2>
      <p className="mt-2 text-center text-sm text-gray-600">
        {t('login.subtitle')}{' '}
        <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
          {t('login.register')}
        </a>
      </p>
    </div>
  );
};