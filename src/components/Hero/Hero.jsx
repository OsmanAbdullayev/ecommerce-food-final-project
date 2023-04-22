import React from "react";
import { Carousel } from "react-bootstrap";
import hero1 from "../../assets/img/hero/hero-1.jpg";
import hero2 from "../../assets/img/hero/hero-2.jpg";
import hero3 from "../../assets/img/hero/hero-3.jpg";

const Hero = () => {
	return (
		<Carousel fade>
			<Carousel.Item>
				<img className="d-block w-100" src={hero1} alt="First slide" />
				<Carousel.Caption >
					<h1>The Tastiest Pizza</h1>
					<p>in our shop</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img className="d-block w-100" src={hero2} alt="Second slide" />

				<Carousel.Caption >
					<h1>The Tastiest Burger</h1>
					<p>you can order from us</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img className="d-block w-100" src={hero3} alt="Third slide" />

				<Carousel.Caption >
					<h1>The Tastiest Desserts</h1>
					<p>you will never forget this delight</p>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	);
};

export default Hero;
