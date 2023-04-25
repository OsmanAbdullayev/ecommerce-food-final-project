import React, { useContext } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useSelector } from "react-redux";
import { selectProducts } from "../../redux/slice/productsSlice";

import { ColorModeContext } from "../../routers/AppRouter";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const BestDeals = () => {
	const { t } = useTranslation();
	const products = useSelector(selectProducts);

	const { colorMode } = useContext(ColorModeContext);

	const responsive = {
		superLargeDesktop: {
			// the naming can be any, depends on you.
			breakpoint: { max: 4000, min: 3000 },
			items: 5,
		},
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 3,
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 2,
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 2,
		},
	};

	return (
		<Container>
			<h1 className="text-center p-3 my-4">{t(`currentoffers`)}</h1>

			<Carousel responsive={responsive}>
				{products.map((product) => {
					if (product.discount) {
						return (
							<div key={product.id} className="h-100 px-2 py-3">
								<Card className={colorMode === "dark" ? `p-3 h-100 shadow bg-dark text-primary` : `p-3 h-100 shadow`}>
									<Row className="g-0">
										<Col md={6} className="d-flex flex-column justify-content-center align-items-start">
											<Card.Body>
												<Card.Title className="fs-5 text-danger py-1 fw-3 text-center">
													<h1>
														{t(`save`)} <b>{product.discount}%</b>
													</h1>
												</Card.Title>
												<Card.Subtitle className="text-center py-1">
													<h5 className="p-0 m-0">{product.name}</h5>
												</Card.Subtitle>
											</Card.Body>
										</Col>
										<Col md={6} className="overflow-hidden">
											<Link to={`/product-details/${product.id}`}>
												<Card.Img className="w-100" src={product.imageURL} alt={product.name} />
											</Link>
										</Col>
									</Row>
								</Card>
							</div>
						);
					} else {
						return null;
					}
				})}
			</Carousel>
		</Container>
	);
};

export default BestDeals;
