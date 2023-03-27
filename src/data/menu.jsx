
import BlackBurger from "../assets/img/menu/burgers-1-300x300.png";
import DoubleBurger from "../assets/img/menu/burgers-2-300x300.png";
import ThaiBurger from "../assets/img/menu/burgers-3-300x300.png";
import ClassicBurger from "../assets/img/menu/burgers-4-300x300.png";
import CheeseBurger from "../assets/img/menu/burgers-5-300x300.png";
import FriesBurger from "../assets/img/menu/burgers-6-300x300.png";
import HomeBurger from "../assets/img/menu/burgers-7-300x300.png";
import MuffinBurger from "../assets/img/menu/burgers-8-300x300.png";

import PepperoniPizza from "../assets/img/menu/pizza-1-300x300.png";
import MushroomPizza from "../assets/img/menu/pizza-2-300x300.png";
import GreenPizza from "../assets/img/menu/pizza-3-300x300.png";
import CherryPizza from "../assets/img/menu/pizza-4-300x300.png";
import PizzaMargherita from "../assets/img/menu/pizza-5-300x300.png";
import PizzaQuattroFormaggi from "../assets/img/menu/pizza-6-300x300.png";
import HawaiianPizza from "../assets/img/menu/pizza-7-300x300.png";

import VegetableSalad from "../assets/img/menu/salad1-640x640.jpg";
import TacoSalad from "../assets/img/menu/salad2-640x640.jpg";
import ChickenSalad from "../assets/img/menu/salad3-640x640.jpg";

import Shrimps from "../assets/img/menu/side1-640x640.jpg";
import Mozzarella from "../assets/img/menu/side2-640x640.jpg";
import Onions from "../assets/img/menu/side3-640x640.jpg";
import Potatoes from "../assets/img/menu/side4-640x640.jpg";
import FrenchFries from "../assets/img/menu/side5-640x640.jpg";
import Chips from "../assets/img/menu/side6-640x640.jpg";

import RaisinCake from "../assets/img/menu/dessert1-300x300.jpg";
import NutellaCake from "../assets/img/menu/dessert2-300x300.jpg";
import BirthdayCake from "../assets/img/menu/dessert3-300x300.jpg";
import CreamyCake from "../assets/img/menu/dessert4-300x300.jpg";
import ChocolateCake from "../assets/img/menu/dessert5-300x300.jpg";

import CocaCola from "../assets/img/menu/drinks1-300x300.jpg";
import PinaColada from "../assets/img/menu/drinks2-300x300.jpg";
import OrangeJuice from "../assets/img/menu/drinks3-300x300.jpg";
import IceTea from "../assets/img/menu/drinks4-300x300.jpg";
import Kvas from "../assets/img/menu/drinks5-300x300.jpg";
import Water from "../assets/img/menu/drinks6-300x300.jpg";
import Mojito1 from "../assets/img/menu/drinks8-300x300.jpg";
import Mojito2 from "../assets/img/menu/drinks9-300x300.jpg";
import CherryBoom from "../assets/img/menu/drinks10-300x300.jpg";
import KiwiBoom from "../assets/img/menu/drinks11-300x300.jpg";
import Pepsi from "../assets/img/menu/drinks12-300x300.jpg";

const menu = [
	{
		id: 1,
		img: BlackBurger,
		title: "Black Burger",
		category: "burgers",
		description: "Mouth watering pepperoni, cabanossi, mushroom, capsicum, black olives and stretchy mozzarella, seasoned with garlic and oregano.",
		price: 5,
		quantity: 0,
		discount: 20,
		vegetarian: false,
		spicy: false,
	},
	{
		id: 2,
		img: DoubleBurger,
		title: "Double Burger",
		category: "burgers",
		price: 7,
		quantity: 0,
	},
	{
		id: 3,
		img: ThaiBurger,
		title: "Thai Burger",
		category: "burgers",
		price: 12,
		quantity: 0,
	},
	{
		id: 4,
		img: ClassicBurger,
		title: "Classic Burger",
		category: "burgers",
		price: 8,
		quantity: 0,
	},
	{
		id: 5,
		img: CheeseBurger,
		title: "Cheese Burger",
		category: "burgers",
		price: 9,
		quantity: 0,
	},
	{
		id: 6,
		img: FriesBurger,
		title: "Fries Burger",
		category: "burgers",
		price: 5,
		quantity: 0,
	},
	{
		id: 7,
		img: HomeBurger,
		title: "Home Burger",
		category: "burgers",
		price: 8,
		quantity: 0,
	},
	{
		id: 8,
		img: MuffinBurger,
		title: "Muffin Burger",
		category: "burgers",
		price: 11,
		quantity: 0,
	},
	{
		id: 9,
		img: PepperoniPizza,
		title: "Pepperoni Pizza",
		category: "pizza",
		price: 11,
		quantity: 0,
	},
	{
		id: 10,
		img: MushroomPizza,
		title: "Mushroom Pizza",
		category: "pizza",
		price: 21,
		quantity: 0,
	},
	{
		id: 11,
		img: GreenPizza,
		title: "Green Pizza",
		category: "pizza",
		price: 15,
		quantity: 0,
	},
	{
		id: 12,
		img: CherryPizza,
		title: "Cherry Pizza",
		category: "pizza",
		price: 15,
		quantity: 0,
	},
	{
		id: 13,
		img: PizzaMargherita,
		title: "Pizza Margherita",
		category: "pizza",
		price: 7,
		quantity: 0,
	},
	{
		id: 14,
		img: PizzaQuattroFormaggi,
		title: "Pizza Quattro Formaggi",
		category: "pizza",
		price: 16,
		quantity: 0,
	},
	{
		id: 15,
		img: HawaiianPizza,
		title: "Hawaiian Pizza",
		category: "pizza",
		price: 11,
		quantity: 0,
	},
	{
		id: 16,
		img: VegetableSalad,
		title: "Vegetable Salad",
		category: "sidesandsalads",
		price: 15,
		quantity: 0,
	},
	{
		id: 17,
		img: TacoSalad,
		title: "Taco Salad",
		category: "sidesandsalads",
		price: 11,
		quantity: 0,
	},
	{
		id: 18,
		img: ChickenSalad,
		title: "Chicken Salad",
		category: "sidesandsalads",
		price: 14,
		quantity: 0,
	},
	{
		id: 19,
		img: Shrimps,
		title: "Shrimps",
		category: "sidesandsalads",
		price: 14,
		quantity: 0,
	},
	{
		id: 20,
		img: Mozzarella,
		title: "Mozzarella",
		category: "sidesandsalads",
		price: 14,
		quantity: 0,
	},
	{
		id: 21,
		img: Onions,
		title: "Onions",
		category: "sidesandsalads",
		price: 14,
		quantity: 0,
	},
	{
		id: 22,
		img: Potatoes,
		title: "Potatoes",
		category: "sidesandsalads",
		price: 14,
		quantity: 0,
	},
	{
		id: 23,
		img: FrenchFries,
		title: "French-Fries",
		category: "sidesandsalads",
		price: 14,
		quantity: 0,
	},
	{
		id: 24,
		img: Chips,
		title: "Chips",
		category: "sidesandsalads",
		price: 14,
		quantity: 0,
	},
	{
		id: 25,
		img: RaisinCake,
		title: "Raisin Cake",
		category: "desserts",
		price: 14,
		quantity: 0,
	},
	{
		id: 26,
		img: NutellaCake,
		title: "Nutella Cake",
		category: "desserts",
		price: 14,
		quantity: 0,
	},
	{
		id: 27,
		img: BirthdayCake,
		title: "Birthday Cake",
		category: "desserts",
		price: 14,
		quantity: 0,
	},
	{
		id: 28,
		img: CreamyCake,
		title: "Creamy Cake",
		category: "desserts",
		price: 14,
		quantity: 0,
	},
	{
		id: 29,
		img: ChocolateCake,
		title: "Chocolate Cake",
		category: "desserts",
		price: 14,
		quantity: 0,
	},
	{
		id: 30,
		img: CocaCola,
		title: "Coca Cola",
		category: "drinks",
		price: 14,
		quantity: 0,
	},
	{
		id: 31,
		img: PinaColada,
		title: "Pina Colada",
		category: "drinks",
		price: 14,
		quantity: 0,
	},
	{
		id: 32,
		img: OrangeJuice,
		title: "Orange Juice",
		category: "drinks",
		price: 14,
		quantity: 0,
	},
	{
		id: 33,
		img: IceTea,
		title: "Ice Tea",
		category: "drinks",
		price: 14,
		quantity: 0,
	},
	{
		id: 34,
		img: Kvas,
		title: "Kvas",
		category: "drinks",
		price: 14,
		quantity: 0,
	},
	{
		id: 35,
		img: Water,
		title: "Water",
		category: "drinks",
		price: 14,
		quantity: 0,
	},
	{
		id: 36,
		img: Mojito1,
		title: "Mojito",
		category: "drinks",
		price: 14,
		quantity: 0,
	},
	{
		id: 37,
		img: Mojito2,
		title: "Mojito alc.",
		category: "drinks",
		price: 14,
		quantity: 0,
	},
	{
		id: 38,
		img: CherryBoom,
		title: "Cherry Boom",
		category: "drinks",
		price: 14,
		quantity: 0,
	},
	{
		id: 39,
		img: KiwiBoom,
		title: "Kiwi Boom",
		category: "drinks",
		price: 14,
		quantity: 0,
	},
	{
		id: 40,
		img: Pepsi,
		title: "Pepsi",
		category: "drinks",
		price: 14,
		quantity: 0,
	},
];

export default menu;

