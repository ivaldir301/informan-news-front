import { useTranslation } from 'react-i18next';
import { Button } from '../../../components/ui/button';
import { LoginInput } from './LoginInput';
import { RememberMe } from './RememberMe';
import { ForgotPassword } from './ForgotPassword';

export const LoginForm = () => {
  const { t } = useTranslation();

  return (
    <form className="space-y-6">
      <LoginInput
        id="email"
        type="email"
        label={t('login.email')}
        autoComplete="email"
      />

      <LoginInput
        id="password"
        type="password"
        label={t('login.password')}
        autoComplete="current-password"
      />

      <div className="flex items-center justify-between">
        <RememberMe />
        <ForgotPassword />
      </div>

      <div>
        <Button type="submit" className="w-full">
          {t('login.submit')}
        </Button>
      </div>
    </form>
  );
};