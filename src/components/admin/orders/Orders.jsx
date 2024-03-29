import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./Orders.module.scss";
import { Table } from "react-bootstrap";
import { ColorModeContext } from "../../../routers/AppRouter";
import { useTranslation } from "react-i18next";

const Orders = () => {
	const { t } = useTranslation();
	const { colorMode } = useContext(ColorModeContext);
	const navigate = useNavigate();

	const handleClick = () => {
		navigate(`/admin/order-details`);
	};

	return (
		<>
			<div className={styles.order}>
				<h1 className="my-3 text-center">{t(`yourOrderHistory`)}</h1>
				<p>
					{t(`openAnOrderToChangeOrderStatus`)}
				</p>
				<br />
				<>
					<div className={styles.table}>
						<Table striped bordered hover variant={colorMode === `dark` ? `dark` : ``}>
							<thead>
								<tr>
									<th>#</th>
									<th>{t(`date`)}</th>
									<th>{t(`orderID`)}</th>
									<th>{t(`orderAmount`)}</th>
									<th>{t(`orderStatus`)}</th>
								</tr>
							</thead>
							<tbody>
								<tr onClick={() => handleClick()}>
									<td>1</td>
									<td>12.03.2022 at 16:04</td>
									<td>jnsdf7n349f9dfg8h45</td>
									<td>$123</td>
									<td>
										<p className={styles.pending}>{t(`pending`)}</p>
									</td>
								</tr>
								<tr onClick={() => handleClick()}>
									<td>2</td>
									<td>12.03.2022 at 16:08</td>
									<td>jnsdf734oijdfg8h45</td>
									<td>$13</td>
									<td>
										<p className={styles.delivered}>{t(`delivered`)}</p>
									</td>
								</tr>
								<tr onClick={() => handleClick()}>
									<td>3</td>
									<td>11.03.2022 at 12:54</td>
									<td>45sdf7n303f9dfg8h45</td>
									<td>$47</td>
									<td>
										<p className={styles.pending}>{t(`orderPlaced`)}</p>
									</td>
								</tr>
								<tr onClick={() => handleClick()}>
									<td>4</td>
									<td>08.03.2022 at 06:32</td>
									<td>ljnsf7n349f9dfg8h45</td>
									<td>$423</td>
									<td>
										<p className={styles.pending}>{t(`pending`)}</p>
									</td>
								</tr>
								<tr onClick={() => handleClick()}>
									<td>5</td>
									<td>04.03.2022 at 13:01</td>
									<td>knrdf7n499f9dfg8h45</td>
									<td>$52</td>
									<td>
										<p className={styles.pending}>{t(`pending`)}</p>
									</td>
								</tr>
								<tr onClick={() => handleClick()}>
									<td>6</td>
									<td>01.03.2022 at 14:44</td>
									<td>jnngf7n349f9dfg8h45</td>
									<td>$43</td>
									<td>
										<p className={styles.delivered}>{t(`delivered`)}</p>
									</td>
								</tr>
								<tr onClick={() => handleClick()}>
									<td>7</td>
									<td>12.02.2022 at 06:04</td>
									<td>kndiw7n349f9dfg8h45</td>
									<td>$123</td>
									<td>
										<p className={styles.delivered}>{t(`delivered`)}</p>
									</td>
								</tr>
								<tr onClick={() => handleClick()}>
									<td>8</td>
									<td>11.02.2022 at 18:44</td>
									<td>jnsdf7n349f9dfg8h45</td>
									<td>$405</td>
									<td>
										<p className={styles.pending}>{t(`processing`)}</p>
									</td>
								</tr>
							</tbody>
						</Table>
					</div>
				</>
			</div>
		</>
	);
};

export default Orders;
