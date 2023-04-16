import React from "react";
import BestDeals from "../../components/BestDeals/BestDeals";
import Hero from "../../components/Hero/Hero";
import ProductsSection from "../../components/ProductsSection/ProductsSection";
import Menu from "../../components/MenuComponents/AllProductsComponent";
import Product from "../../components/product/Product";

const Home = () => {
	// const url = window.location.href;

	// SCROLLS TO PRODUCTS
	// const scrollToProducts = () => {
	// 	if (url.includes("#products")) {
	// 		window.scrollTo({
	// 			top: 700,
	// 			behavior: "smooth"
	// 		})
	// 		return
	// 	}
	// }

	// useEffect(() => {
	// scrollToProducts()
	// }, [])

	return (
		<>
			<Hero />
			<Product />
			<ProductsSection />
			<BestDeals />
			<Menu lg="3" md="6" sm="12" />
		</>
	);
};

export default Home;
