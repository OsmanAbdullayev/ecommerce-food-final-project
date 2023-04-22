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
					menu: `Menu`,
          search: `Search`,
          login: `Log In`,
          logout: `Log Out`,
          signup: `Sign Up`,
          sortby: `Sort By`,
          latest: `Latest`,
          lowestprice: `Lowest Price`,
          highestprice: `Highest Price`,
          productsfound: "products found",
          maxprice: `Max price:`,
          clearfilters: `Clear Filters`,
          vegetarian: `Vegetarian`,
          spicy: `Spicy`,
          hero1title: `The Tastiest Pizza`,
          hero2title: `The Tastiest Burger`,
          hero3title: `The Tastiest Desserts`,
          hero1desc: `in our shop`,
          hero2desc: `you can order from us`,
          hero3desc: `you will never forget this delight`,
          chooseyourproduct: `Choose Your Product`,
          burgers: `Burgers`,
          pizza: `Pizza`,
          sidesandsalads: `Sides & Salads`,
          desserts: `Desserts`,
          drinks: `Drinks`,
          currentoffers: `Current Offers`,
          save: `Save`,
          categories: `Categories`,
          all: `All`



				},
			},
			az: {
				translation: {
					transText: `bu tercume olunan tekstdir`,
					contacts: `Əlaqə`,
          menu: `Menyu`,
          search: `Axtar`,
          login: `Daxil Ol`,
          logout: `Hesabdan Çıx`,
          signup: `Qeydiyayt`,
          sortby: `Sortlaşdır`,
          latest: `Sonuncu`,
          lowestprice: `Əvvəlcə Ucuz`,
          highestprice: `Əccəlcə Baha`,
          productsfound: "məhsul tapıldı",
          maxprice: `Qiymət limiti:`,
          clearfilters: `Filtrləri Təmizlə`,
          vegetarian: `Vegetarian`,
          spicy: `Acılı`,
          hero1title: `Ən Dadlı Pizza`,
          hero2title: `Ən Dadlı Burger`,
          hero3title: `Ən Dadlı Desertlər`,
          hero1desc: `bizim restoranımızda`,
          hero2desc: `dərhal sifariş edə bilərsiniz`,
          hero3desc: `bu həzzi heç vaxt unutmayacaqsınız!`,
          chooseyourproduct: `Məhsulu Seçin`,
          burgers: `Burger`,
          pizza: `Pizza`,
          sidesandsalads: `Salat və Qəlyanaltı`,
          desserts: `Desert`,
          drinks: `İçki`,
          currentoffers: `Sərfəli Təkliflər`,
          save: `Endirim:`,
          categories: `Kateqoriyalar`,
          all: `Hamısı`

          
          

				},
			},
		},
		lng: localStorage.getItem("lng") || "en",
	});
