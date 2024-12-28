import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { en, pt, fr, es, ru, zh } from './translations';

// Get the stored language from localStorage or default to 'en'
const storedLanguage = localStorage.getItem('selectedLanguage') || 'en';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en,
      pt,
      fr,
      es,
      ru,
      zh,
      cv: pt // Using Portuguese translations as fallback for Cape Verdean Creole
    },
    lng: storedLanguage,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;