import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../assets/sass/global.scss";
import Footer from "../components/Layouts/Footer/Footer";
import Header from "../components/Layouts/Header/Header";
import Home from "../pages/Home/Home";
import Contacts from "../pages/Contacts/Contacts";
import AboutUs from "../pages/AboutUs/AboutUs";
import Blog from "../pages/Blog/Blog";
import Cart from "../pages/Cart/Cart";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import Pizza from "../pages/Menu/Pizza";
import Burgers from "../pages/Menu/Burgers";
import SidesAndSalads from "../pages/Menu/SidesAndSalads";
import Desserts from "../pages/Menu/Desserts";
import Drinks from "../pages/Menu/Drinks";
import AllProducts from "../pages/Menu/AllProducts";
import LogIn from "../pages/Auth/LogIn";
import SignUp from "../pages/Auth/SignUp";
import Reset from "../pages/Auth/Reset";
import { ToastContainer } from "react-toastify";
import Admin from "../pages/Admin/Admin";
import AdminOnlyRoute from "../components/adminOnlyRoute/AdminOnlyRoute";
import ProductDetails from "../components/product/productDetails/productDetails";
import CheckoutDetails from "../pages/Checkout/CheckoutDetails";
import Checkout from "../pages/Checkout/Checkout";
import { createContext, useState } from "react";
import Wishlist from "../pages/Wishlist/Wishlist";
import { useTranslation } from "react-i18next";

export const ColorModeContext = createContext();

function App() {
	const { t } = useTranslation();

	const [colorMode, setColorMode] = useState("primary");

	const toggleColorMode = () => {
		colorMode === "dark" ? setColorMode("primary") : setColorMode("dark");
	};

	return (
		<ColorModeContext.Provider value={{ colorMode, toggleColorMode }}>
			<div style={colorMode === "dark" ? { backgroundColor: "rgba(0, 0, 0, 0.75)" } : {}} className={colorMode === "dark" ? "text-white" : ""}>
				<BrowserRouter>
					<ToastContainer />

					<Header />

					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/aboutus" element={<AboutUs />} />
						<Route path="/blog" element={<Blog />} />
						<Route path="/contacts" element={<Contacts />} />
						<Route path="/menu" element={<AllProducts />} />
						<Route path="/cart" element={<Cart />} />
						<Route path="/wishlist" element={<Wishlist />} />
						<Route path="/menu" element={<AllProducts />} />
						<Route path="/menu/pizza" element={<Pizza />} />
						<Route path="/menu/burgers" element={<Burgers />} />
						<Route path="/menu/sidesandsalads" element={<SidesAndSalads />} />
						<Route path="/menu/desserts" element={<Desserts />} />
						<Route path="/menu/drinks" element={<Drinks />} />

						<Route path="/login" element={<LogIn />} />
						<Route path="/signup" element={<SignUp />} />
						<Route path="/reset" element={<Reset />} />
						<Route path="*" element={<NotFoundPage />} />

						<Route
							path="/admin/*"
							element={
								<AdminOnlyRoute>
									<Admin />
								</AdminOnlyRoute>
							}
						/>

						<Route path="/product-details/:id" element={<ProductDetails />} />
						<Route path="/checkout-details" element={<CheckoutDetails />} />
						<Route path="/checkout" element={<Checkout />} />
					</Routes>
					<Footer />
				</BrowserRouter>
			</div>
		</ColorModeContext.Provider>
	);
}

export default App;
