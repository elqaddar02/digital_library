import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import frTranslations from './locales/fr.json';
import enTranslations from './locales/en.json';

const resources = {
  en: { translation: enTranslations },
  fr: { translation: frTranslations },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'fr', // Default language is French
    fallbackLng: 'fr',
    interpolation: {
      escapeValue: false, // React already protects from XSS
    },
  });

export default i18n;
