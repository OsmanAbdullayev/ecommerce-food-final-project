import React from "react";
import { Link } from "react-router-dom";

import { Col, Row } from "react-bootstrap";
import { useCart } from "react-use-cart";
import { Button } from "bootstrap";

const CheckoutSummary = () => {
	const { items, totalItems, cartTotal } = useCart();

	return (
		<div>
			<h3 className="mb-3">Checkout Summary</h3>
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
						<Row className="mb-3">
							<Col lg={8}>
								<h4>Subtotal:</h4>
							</Col>
							<Col lg={4}>
								<h3>${cartTotal.toFixed(2)}</h3>
							</Col>
						</Row>
						{items.map((item) => {
							const { id, name, price, quantity } = item;
							return (
								<Row key={id} className="g-3 shadow border my-2">
										<Col><h4>Product: {name}</h4></Col>
										<Row>
										<Col xxl={4} xl={12} lg={12} md={12} sm={12}><p>Quantity: {quantity}</p> </Col>
										<Col xxl={4} xl={12} lg={12} md={12} sm={12}><p>Unit price: {price}</p> </Col>
										<Col xxl={4} xl={12} lg={12} md={12} sm={12}><p>Set price: {price * quantity}</p> </Col>
										</Row>
								</Row>
							);
						})}
					</div>
				)}
			</div>
		</div>
	);
};

export default CheckoutSummary;
