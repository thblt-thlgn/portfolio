import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import homeTranslation from 'assets/i18n/fr/home.json';

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources: {
      fr: {
        home: homeTranslation,
      },
    },
    fallbackLng: 'fr',
    interpolation: {
      escapeValue: true,
    },
  });
