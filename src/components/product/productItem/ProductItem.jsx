import React, { useContext, useState } from "react";
import { Button, Card, Col, Row, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";
import { ColorModeContext } from "../../../routers/AppRouter";
import { TOGGLE_WISHLIST, selectWishlistItems } from "../../../redux/slice/wishlistSlice";
import { useDispatch, useSelector } from "react-redux";
import { BsFillHeartFill } from "react-icons/bs";

import { FaHeartBroken } from "react-icons/fa";

// import styles from "./ProductItem.module.scss";

const ProductItem = ({ product, grid, id, name, price, description, vegetarian, spicy, imageURL, discount, addProduct }) => {
	const wishlistItems = useSelector(selectWishlistItems);
	const [loaded, setLoaded] = useState(false);

	const checkWishlist = (product) => {
		return wishlistItems.some((item) => item.id === product.id);
	};

	const shortenText = (text, n) => {
		if (text.length > n) {
			const shortenedText = text.substring(0, n).concat("...");
			return shortenedText;
		}
		return text;
	};

	const dispatch = useDispatch();

	const addToWishlist = (wishlist) => {
		dispatch(TOGGLE_WISHLIST(wishlist));
	};

	const colorMode = useContext(ColorModeContext);

	const { addItem } = useCart();

	if (grid) {
		return (
			// <Card cardclass={grid ? `${styles.grid}` : ` ${styles.list}`}>
			<Card className={colorMode === "dark" ? "shadow overflow-hidden h-100 bg-dark" : "shadow overflow-hidden h-100"}>
				<Link to={`/product-details/${id}`} className="overflow-hidden">
					{loaded ? null : (
						<div className="spinnerBootstrapContainer d-flex justify-content-center align-items-center position-relative">
							<div className="position-absolute spinnerBootstrapDiv">
								<Spinner as={Card.Img} animation="border" variant="primary" />
							</div>
						</div>
					)}
					<Card.Img
						style={loaded ? {} : { display: "none" }}
						variant="top"
						onLoad={() => {
							setLoaded(true);
						}}
						className="object-fit-cover"
						src={imageURL}
						alt={name}
					/>
				</Link>

				<Card.Body className="d-flex flex-column justify-content-between">
					<Row>
						<Card.Title>{shortenText(name, 18)}</Card.Title>
						<Card.Subtitle>
							<h3 className="text-primary">
								<b>{`$${price}`}</b>
							</h3>
						</Card.Subtitle>
						<Card.Text>{shortenText(description, 70)}</Card.Text>
					</Row>

					<div className="d-flex justify-content-between align-items-center">
						<Button variant="primary" onClick={() => addItem(addProduct)} className="text-white mt-3 text-nowrap">
							Add to Cart
						</Button>
						<Button variant="primary" onClick={() => addToWishlist(addProduct)} className="text-white mt-3 text-nowrap">
							{checkWishlist(product) ? <FaHeartBroken /> : <BsFillHeartFill />}
						</Button>
					</div>
				</Card.Body>
			</Card>
		);
	} else {
		return (
			<Card className="shadow overflow-hidden h-100">
				<Row className="g-0">
					<Col md={4} className="overflow-hidden">
						<Link to={`/product-details/${id}`} className="overflow-hidden w-100">
							<Card.Img variant="top" className="object-fit-fit w-100 p-3 " src={imageURL} alt={name} />
						</Link>
					</Col>

					<Col md={8} className="d-flex flex-column justify-content-center align-items-start">
						<Card.Body className="d-flex flex-column justify-content-between align-items-start w-100">
							<Row className="w-100">
								<Card.Title>{name}</Card.Title>
								<Card.Subtitle>
									<h3 className="text-primary">
										<b>{`$${price}`}</b>
									</h3>
								</Card.Subtitle>
								<Card.Text className="w-100">{shortenText(description, 300)}</Card.Text>
							</Row>
							<div className="d-flex justify-content-between align-items-center w-100">
								<Button variant="primary" onClick={() => addItem(addProduct)} className="text-white mt-3 text-nowrap">
									Add to Cart
								</Button>
								<Button variant="primary" onClick={() => addToWishlist(addProduct)} className="text-white mt-3 text-nowrap">
									{checkWishlist(product) ? <FaHeartBroken /> : <BsFillHeartFill />}
								</Button>
							</div>
						</Card.Body>
					</Col>
				</Row>
			</Card>
			// <Card cardclass={grid ? `${styles.grid}` : ` ${styles.list}`}>
		);
	}
};

export default ProductItem;
