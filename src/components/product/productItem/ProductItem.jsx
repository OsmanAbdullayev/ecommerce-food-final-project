import React, { useContext } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";
import { ColorModeContext } from "../../../routers/AppRouter";
import { TOGGLE_WISHLIST, CHECK_WISHLIST, REMOVE_FROM_WISHLIST } from "../../../redux/slice/wishlistSlice";
import { useDispatch } from "react-redux";
import { BsFillHeartFill } from "react-icons/bs";
import { useState } from "react";
import { useEffect } from "react";

// import styles from "./ProductItem.module.scss";

const ProductItem = ({ product, grid, id, name, price, description, vegetarian, spicy, imageURL, discount, addProduct }) => {

	
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

	const checkWishlist = (product) => {
		dispatch(CHECK_WISHLIST(product));
	};

	useEffect(() => {
		dispatch(CHECK_WISHLIST(product));
	}, [dispatch, product]);

	const { colorMode, toggleColorMode } = useContext(ColorModeContext);

	const { addItem } = useCart();

	if (grid) {
		return (
			// <Card cardclass={grid ? `${styles.grid}` : ` ${styles.list}`}>
			<Card className={colorMode === "dark" ? "shadow overflow-hidden h-100 bg-dark" : "shadow overflow-hidden h-100"}>
				<Link to={`/product-details/${id}`} className="overflow-hidden">
					<Card.Img variant="top" className="object-fit-cover " src={imageURL} alt={name} />
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
							<BsFillHeartFill className={checkWishlist(product) ? `bg-primary` : `bg-dark`} />
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
						<Card.Body className="d-flex flex-column justify-content-between align-items-start">
							<Row>
								<Card.Title>{name}</Card.Title>
								<Card.Subtitle>
									<h3 className="text-primary">
										<b>{`$${price}`}</b>
									</h3>
								</Card.Subtitle>
								<Card.Text>{shortenText(description, 300)}</Card.Text>
							</Row>
							<Button variant="primary" onClick={() => addItem(addProduct)} className="text-white my-3">
								Add to Cart
							</Button>
							<Button variant="primary" onClick={() => addToWishlist(addProduct)} className="text-white mt-3">
								Add to Wishlist
							</Button>
						</Card.Body>
					</Col>
				</Row>
			</Card>
			// <Card cardclass={grid ? `${styles.grid}` : ` ${styles.list}`}>
		);
	}
};

export default ProductItem;
