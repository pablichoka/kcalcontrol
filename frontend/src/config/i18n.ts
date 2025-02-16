import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpApi from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

const options = {
  order: ['querystring', 'cookie', 'localStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],
  lookupQuerystring: 'lng',
  lookupCookie: 'i18next',
  lookupLocalStorage: 'i18nextLng',
  caches: ['localStorage', 'cookie'],
  excludeCacheFor: ['cimode'],
  checkWhitelist: true,
  lookupFromPathIndex: 0,
  lookupFromSubdomainIndex: 0,
  convertDetectedLanguage: (lng: string) => {
    if (lng.length > 2) {
      return lng.split('-')[0];
    }
    return lng;
  }
};

i18n
  .use(HttpApi)
  .use(new LanguageDetector(null, options))
  .use(initReactI18next)
  .init({
    fallbackLng: 'es',
    debug: true,
    interpolation: {
      escapeValue: false,
    },
    defaultNS: 'translations',
    ns: ['translations', 'header'],
    backend: {
      loadPath: (lng: string, ns: string) => `/locales/${lng}/${ns}.json`,
    },
    react: {
      useSuspense: false,
    }
  });

export default i18n;