import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18next
	.use(initReactI18next)
	// .use(LanguageDetector)
	.init({
		fallbackLng: "en",
		debug: true,
		resources: {
			en: {
				translation: {
					transText: `this is translated text`,
					contacts: `Contacts`,
					menu: `menu`,
				},
			},
			az: {
				translation: {
					transText: `bu tercume olunan tekstdir`,
					contacts: `Əlaqə`,
				},
			},
		},
		lng: localStorage.getItem("lng") || "en",
	});
