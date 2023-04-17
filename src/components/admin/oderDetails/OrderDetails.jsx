import React from "react";
import styles from "./OrderDetails.module.scss";
import { Link } from "react-router-dom";
import image from "../../../assets/img/menu/burgers-2-300x300.png";
import ChangeOrderStatus from "../changeOrderStatus/ChangeOrderStatus";

const OrderDetails = () => {
	return (
		<>
			<div className={styles.table}>
				<h2>Order Details</h2>
				<div>
					<Link to="/admin/orders">&larr; Back To Orders</Link>
				</div>
				<br />

				<>
					<p>
						<b>Order ID</b> nkjndfsn3498834br34
					</p>
					<p>
						<b>Order Amount</b> $190
					</p>
					<p>
						<b>Order Status</b> Delivered
					</p>
					<p>
						<b>Shipping Address</b>
						<br />
						Address: Mahammad Hadi street 49, Khatai distr.
						<br />
						State: Azerbaijan
						<br />
						Country: Baku
					</p>
					<br />
					<table>
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
					</table>
				</>

				<ChangeOrderStatus />
			</div>
		</>
	);
};

export default OrderDetails;
