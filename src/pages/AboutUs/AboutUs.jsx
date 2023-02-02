import React from "react";
import { Container } from "react-bootstrap";
import AllProducts from "../../components/MenuComponents/AllProductsComponent";

const AboutUs = () => {
	return (
		<Container>
			<h1 className="text-center p-5">We are a restaurant functioning in Baku, Azerbaijan.</h1>
			<AllProducts lg="3" md="6" sm="12" />
		</Container>
	);
};

export default AboutUs;
