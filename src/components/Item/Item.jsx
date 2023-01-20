import React from "react";
import { Button, Card } from "react-bootstrap";
import { useCart } from "react-use-cart";

const Item = ({ img, title, price, addProduct }) => {
	const { addItem } = useCart();
	return (
		<Card className="shadow overflow-hidden h-100">
			<figure className="overflow-hidden">
				<Card.Img src={img} variant="top" className="object-fit" alt="..." />
			</figure>
			<Card.Body>
				<Card.Title>{title}</Card.Title>
				<Card.Subtitle>${price}</Card.Subtitle>
				<Button variant="primary" onClick={() => addItem(addProduct)} className="text-white my-3">
					Add to Cart
				</Button>
			</Card.Body>
		</Card>
	);
};
export default Item;
