import { Facebook, Instagram, Mail, Twitter } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { LanguageToggle } from './ui/language-toggle';

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-2xl font-bold text-white">
              {t('footer.title')}
            </h2>
            <p className="mt-4 text-gray-400">
              {t('footer.description')}
            </p>
            <div className="mt-4 text-white">
              <LanguageToggle variant="footer" />
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
              {t('footer.quickLinks')}
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a href="#features" className="text-base text-gray-300 hover:text-white">
                  {t('footer.menu.features')}
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-base text-gray-300 hover:text-white">
                  {t('nav.pricing')}
                </a>
              </li>
              <li>
                <a href="#reviews" className="text-base text-gray-300 hover:text-white">
                  {t('footer.menu.reviews')}
                </a>
              </li>
              <li>
                <a href="#faq" className="text-base text-gray-300 hover:text-white">
                  {t('footer.menu.faq')}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
              {t('footer.connect')}
            </h3>
            <div className="mt-4 flex space-x-6">
              <a 
                href="#" 
                className="text-gray-400 hover:text-gray-300"
                aria-label={t('footer.socialLinks.facebook')}
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-gray-300"
                aria-label={t('footer.socialLinks.instagram')}
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-gray-300"
                aria-label={t('footer.socialLinks.twitter')}
              >
                <Twitter className="h-6 w-6" />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-gray-300"
                aria-label={t('footer.socialLinks.email')}
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8">
          <p className="text-base text-gray-400 text-center">
            {t('footer.rights', { year: new Date().getFullYear() })}
          </p>
        </div>
      </div>
    </footer>
  );
};