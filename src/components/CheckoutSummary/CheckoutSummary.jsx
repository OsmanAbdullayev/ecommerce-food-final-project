import React from "react";
import { Link } from "react-router-dom";

import styles from "./CheckoutSummary.module.scss";
import { Card } from "react-bootstrap";
import { useCart } from "react-use-cart";
import { Button } from "bootstrap";

const CheckoutSummary = () => {
	const { items, totalItems, cartTotal } = useCart();


  return (
		<div>
		<h3>Checkout Summary</h3>
		<div>
			{items.length === 0 ? (
				<>
					<p>No item in your cart.</p>
					<Button variant="primary">
						<Link to="/#products" className="text-white">
							Back To Shop
						</Link>
					</Button>
				</>
			) : (
				<div>
					<p>
						<b>{`Cart item(s): ${totalItems}`}</b>
					</p>
					<div className="row mb-3">
						<div className="col-8">
							<h4>Subtotal:</h4>
						</div>
						<div className="col-4">
							<h3>{cartTotal.toFixed(2)}</h3>
						</div>
					</div>
					{items.map((item, index) => {
						const { id, name, price, quantity } = item;
						return (
							<Card key={id} className="mb-3">
								<Card.Body>
									<h4>Product: {name}</h4>
									<p>Quantity: {quantity}</p>
									<p>Unit price: {price}</p>
									<p>Set price: {price * quantity}</p>
								</Card.Body>
							</Card>
						);
					})}
				</div>
			)}
		</div>
	</div>
  );
  
};

export default CheckoutSummary;