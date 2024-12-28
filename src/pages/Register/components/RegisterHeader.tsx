import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Logo } from '../../../components/Logo';

export const RegisterHeader = () => {
  const { t } = useTranslation();

  return (
    <div className="text-center">
      <Link to="/" className="inline-block">
        <Logo />
      </Link>
      <h1 className="mt-6 text-3xl font-extrabold text-gray-900 sm:text-4xl">
        {t('register.title')}
      </h1>
      <p className="mt-2 text-lg text-gray-600 max-w-2xl mx-auto">
        {t('register.subtitle')}
      </p>
    </div>
  );
};