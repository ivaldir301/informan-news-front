import { useState, useEffect } from 'react';
import { Languages } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { cn } from '../../lib/utils';

const languages = [
  { code: 'cv', name: 'Kriolo CV' },
  { code: 'pt', name: 'Portuguese' },
  { code: 'en', name: 'English' },
  { code: 'fr', name: 'French' },
  { code: 'es', name: 'Spanish' },
  { code: 'ru', name: 'Russian' },
  { code: 'zh', name: 'Mandarin' }
];

interface LanguageToggleProps {
  variant?: 'navbar' | 'footer';
}

export const LanguageToggle = ({ variant = 'navbar' }: LanguageToggleProps) => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  
  useEffect(() => {
    const storedLanguage = localStorage.getItem('selectedLanguage');
    if (storedLanguage && storedLanguage !== i18n.language) {
      i18n.changeLanguage(storedLanguage);
    }
  }, [i18n]);

  const handleLanguageChange = (languageCode: string) => {
    localStorage.setItem('selectedLanguage', languageCode);
    i18n.changeLanguage(languageCode);
    setIsOpen(false);
    window.location.reload();
  };

  return (
    <div className="relative inline-block">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "p-2 rounded-md transition-colors",
          variant === 'footer' 
            ? "text-white hover:bg-white/10" 
            : "text-gray-700 hover:bg-gray-100"
        )}
        aria-label="Change language"
      >
        <Languages className="h-5 w-5" />
      </button>

      {isOpen && (
        <div className={cn(
          "absolute z-50 mt-1 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5",
          variant === 'footer' ? "bottom-full mb-1" : "top-full"
        )}>
          <div className="py-1">
            {languages.map((language) => (
              <button
                key={language.code}
                onClick={() => handleLanguageChange(language.code)}
                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                {language.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};