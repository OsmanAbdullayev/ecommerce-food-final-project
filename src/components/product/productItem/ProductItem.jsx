import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";

import styles from "./ProductItem.module.scss";

const ProductItem = ({ product, grid, id, name, price, description, vegetarian, spicy, imageURL, discount, addProduct }) => {
	const shortenText = (text, n) => {
		if (text.length > n) {
			const shortenedText = text.substring(0, n).concat("...");
			return shortenedText;
		}
		return text;
	};

	const { addItem } = useCart();

	if (grid) {
		return (
			// <Card cardclass={grid ? `${styles.grid}` : ` ${styles.list}`}>
			<Card className="shadow overflow-hidden h-100">
				<Link to={`/product-details/${id}`} className="overflow-hidden">
					<Card.Img variant="top" className="object-fit-cover " src={imageURL} alt={name} />
				</Link>

				<Card.Body>
					<Card.Title>{shortenText(name, 18)}</Card.Title>
					<Card.Subtitle>
						<h3 className="text-primary">
							<b>{`$${price}`}</b>
						</h3>
					</Card.Subtitle>
					<Card.Text>{shortenText(description, 100)}</Card.Text>
					<Button variant="primary" onClick={() => addItem(addProduct)} className="text-white my-3">
						Add to Cart
					</Button>
				</Card.Body>
			</Card>
		);
	} else {
		return (
			<Card className="shadow overflow-hidden h-100">
				<Row className="g-0">
					<Col md={4} className="overflow-hidden">
						<Link to={`/product-details/${id}`} className="overflow-hidden w-100">
							<Card.Img variant="top" className="object-fit-fit w-100 " src={imageURL} alt={name} />
						</Link>
					</Col>

					<Col md={8} className="d-flex flex-column justify-content-center align-items-start">
						<Card.Body className="d-flex flex-column justify-content-center align-items-start">
							<Card.Title>{shortenText(name, 18)}</Card.Title>
							<Card.Subtitle>
								<h3 className="text-primary">
									<b>{`$${price}`}</b>
								</h3>
							</Card.Subtitle>
							<Card.Text>{shortenText(description, 300)}</Card.Text>
							<Button variant="primary" onClick={() => addItem(addProduct)} className="text-white my-3">
								Add to Cart
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
