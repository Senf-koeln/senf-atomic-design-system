/** @format */

import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-locize-backend";
import LastUsed from "locize-lastused";
import { locizePlugin } from "locize";

const locizeOptions = {
  // projectId: process.env.REACT_APP_LOCIZE_PROJECT_ID,
  // apiKey: process.env.REACT_APP_LOCIZE_API_KEY,

  projectId: "1cad4709-c868-4365-96b4-d8864b120ddd",
  apiKey: "69182f75-3763-40d5-bb03-f0229aa0f7a1",
  referenceLng: "de",
};

const i18n = i18next.createInstance();

i18n
  // locize-lastused
  // sets a timestamp of last access on every translation segment on locize
  // -> safely remove the ones not being touched for weeks/months
  // https://github.com/locize/locize-lastused
  .use(LastUsed)
  // locize-editor
  // InContext Editor of locize
  .use(locizePlugin)
  // i18next-locize-backend
  // loads translations from your project, saves new keys to it (saveMissing: true)
  // https://github.com/locize/i18next-locize-backend
  .use(Backend)
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  // .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: "de",
    ns: ["common"],
    defaultNS: "common",
    interpolation: {
      // escapeValue: false, // not needed for react as it escapes by default
      // format: (value, format, lng) => { // legacy usage
      //   if (value instanceof Date) {
      //     return DateTime.fromJSDate(value).setLocale(lng).toLocaleString(DateTime[format])
      //   }
      //   return value;
      // }
    },
    backend: locizeOptions,
    locizeLastUsed: locizeOptions,
    saveMissing: true,
  });

export default i18n;

// import i18n from "i18next";
// import { initReactI18next } from "react-i18next";
// import translationDe from "./translations/german.json";
// import translationEn from "./translations/german.json";

// i18n
//   //.use(LanguageDetector)
//   .use(initReactI18next) // passes i18n down to react-i18next
//   .init({
//     debug: false,
//     supportedLngs: ["de", "en"],
//     // the translations
//     // (tip move them in a JSON file and import them,
//     // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
//     resources: {
//       en: {
//         translation: translationEn,
//       },
//       de: {
//         translation: translationDe,
//       },
//     },
//     //lng: localStorage.getItem("lang"), // if you're using a language detector, do not define the lng option

//     fallbackLng: "en",

//     interpolation: {
//       escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
//     },
//   });
// export default i18n;
