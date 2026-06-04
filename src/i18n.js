import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationPT from './locales/pt.json';
import translationEN from './locales/en.json';
import translationES from './locales/es.json';

const resources = {
  pt: translationPT,
  en: translationEN,
  esp: translationES
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'pt',
    fallbackLng: 'pt',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;