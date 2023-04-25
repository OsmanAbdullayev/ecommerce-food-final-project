import React, { useContext } from "react";

import { Link } from "react-router-dom";
import image from "../../../assets/img/menu/burgers-2-300x300.png";
import ChangeOrderStatus from "../changeOrderStatus/ChangeOrderStatus";
import { Col, Row, Table } from "react-bootstrap";
import { ColorModeContext } from "../../../routers/AppRouter";

const OrderDetails = () => {
	const { colorMode } = useContext(ColorModeContext);
	return (
		<>
			<div  className="p-3">
				<Row className="g-3">
					<Col lg={6}>
						<h2 className="my-2">Order Details</h2>
					</Col>
					<Col lg={6}>
						<div>
							<Link to="/admin/orders">&larr; Back To Orders</Link>
						</div>
					</Col>
				</Row>
				<Row className="g-3">
					<Col lg={6}>
						<div className="mt-3">
							<p className="m-0">
								<b>Order ID</b> nkjndfsn3498834br34
							</p>
							<p className="m-0">
								<b>Order Amount</b> $190
							</p>
							<p className="m-0">
								<b>Order Status</b> Delivered
							</p>

							<h3 className="my-3">Shipping Address</h3>
							<p className="m-0">
								<b>Address:</b> Mahammad Hadi street 49, Khatai distr.
							</p>
							<p className="m-0">
								<b>State:</b> Azerbaijan
							</p>
							<p className="m-0">
								<b>Country:</b> Baku
							</p>
						</div>

						<ChangeOrderStatus className="p-0 m-0" />
					</Col>
					<Col lg={6}>
					<Table striped bordered hover variant={colorMode === `dark` ? `dark` : ``}>
							<thead>
								<tr>
									<th>s/n</th>
									<th>Product</th>
									<th>Price</th>
									<th>Quantity</th>
									<th>Total</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<b>1</b>
									</td>
									<td>
										<p>
											<b>Royal Cheeseburger</b>
										</p>
										<img src={image} alt="..." style={{ width: "100px" }} />
									</td>
									<td>19</td>
									<td>10</td>
									<td>190</td>
								</tr>
							</tbody>
						</Table>
					</Col>
				</Row>
			</div>
		</>
	);
};

export default OrderDetails;
