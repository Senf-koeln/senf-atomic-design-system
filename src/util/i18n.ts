/** @format */

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import * as translationDe from "./translations/german.json";
import * as translationEn from "./translations/german.json";

i18n
  //.use(LanguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    debug: false,
    supportedLngs: ["de", "en"],
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    resources: {
      en: {
        translation: translationEn,
      },
      de: {
        translation: translationDe,
      },
    },
    //lng: localStorage.getItem("lang"), // if you're using a language detector, do not define the lng option

    fallbackLng: "en",

    interpolation: {
      escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },
  });
export default i18n;
