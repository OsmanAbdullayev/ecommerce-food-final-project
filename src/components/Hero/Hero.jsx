import React from "react";
import { Carousel } from "react-bootstrap";
import hero1 from "../../assets/img/hero/hero-1.jpg";
import hero2 from "../../assets/img/hero/hero-2.jpg";
import hero3 from "../../assets/img/hero/hero-3.jpg";
import { useTranslation } from "react-i18next";

const Hero = () => {
	const { t } = useTranslation();
	return (
		<Carousel fade>
			<Carousel.Item>
				<img className="d-block w-100" src={hero1} alt="First slide" />
				<Carousel.Caption>
					<h1>{t(`hero1title`)}</h1>
					<p>{t(`hero1desc`)}</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img className="d-block w-100" src={hero2} alt="Second slide" />

				<Carousel.Caption>
					<h1>{t(`hero2title`)}</h1>
					<p>{t(`hero2desc`)}</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img className="d-block w-100" src={hero3} alt="Third slide" />

				<Carousel.Caption>
					<h1>{t(`hero3title`)}</h1>
					<p>{t(`hero3desc`)}</p>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	);
};

export default Hero;
