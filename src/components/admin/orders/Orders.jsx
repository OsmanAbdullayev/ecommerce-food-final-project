import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import useFetchCollection from "../../../customHooks/useFetchCollection";

import Loader from "../../loader/Loader";
import styles from "./Orders.module.scss";

const Orders = () => {
	const navigate = useNavigate();

	const handleClick = () => {
		navigate(`/admin/order-details`);
	};

	return (
		<>
			<div className={styles.order}>
				<h1 className="my-3 text-center">Your Order History</h1>
				<p>
					Open an order to <b>Change order status</b>
				</p>
				<br />
				<>
					<div className={styles.table}>
						<table>
							<thead>
								<tr>
									<th>s/n</th>
									<th>Date</th>
									<th>Order ID</th>
									<th>Order Amount</th>
									<th>Order Status</th>
								</tr>
							</thead>
							<tbody>
								<tr onClick={() => handleClick()}>
									<td>1</td>
									<td>12.03.2022 at 16:04</td>
									<td>jnsdf7n349f9dfg8h45</td>
									<td>$123</td>
									<td>
										<p className={styles.pending}>Pending</p>
									</td>
								</tr>
                <tr onClick={() => handleClick()}>
									<td>2</td>
									<td>12.03.2022 at 16:08</td>
									<td>jnsdf734oijdfg8h45</td>
									<td>$13</td>
									<td>
										<p className={styles.delivered}>Delivered</p>
									</td>
								</tr>
                <tr onClick={() => handleClick()}>
									<td>3</td>
									<td>11.03.2022 at 12:54</td>
									<td>45sdf7n303f9dfg8h45</td>
									<td>$47</td>
									<td>
										<p className={styles.pending}>Order Placed</p>
									</td>
								</tr>
                <tr onClick={() => handleClick()}>
									<td>4</td>
									<td>08.03.2022 at 06:32</td>
									<td>ljnsf7n349f9dfg8h45</td>
									<td>$423</td>
									<td>
										<p className={styles.pending}>Pending</p>
									</td>
								</tr>
                <tr onClick={() => handleClick()}>
									<td>5</td>
									<td>04.03.2022 at 13:01</td>
									<td>knrdf7n499f9dfg8h45</td>
									<td>$52</td>
									<td>
										<p className={styles.pending}>Pending</p>
									</td>
								</tr>
                <tr onClick={() => handleClick()}>
									<td>6</td>
									<td>01.03.2022 at 14:44</td>
									<td>jnngf7n349f9dfg8h45</td>
									<td>$43</td>
									<td>
										<p className={styles.delivered}>Delivered</p>
									</td>
								</tr>
                <tr onClick={() => handleClick()}>
									<td>7</td>
									<td>12.02.2022 at 06:04</td>
									<td>kndiw7n349f9dfg8h45</td>
									<td>$123</td>
									<td>
										<p className={styles.delivered}>Delivered</p>
									</td>
								</tr>
                <tr onClick={() => handleClick()}>
									<td>8</td>
									<td>11.02.2022 at 18:44</td>
									<td>jnsdf7n349f9dfg8h45</td>
									<td>$405</td>
									<td>
										<p className={styles.pending}>Processing</p>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</>
			</div>
		</>
	);
};

export default Orders;
