import React, { useContext } from "react";

import { Link } from "react-router-dom";
import image from "../../../assets/img/menu/burgers-2-300x300.png";
import ChangeOrderStatus from "../changeOrderStatus/ChangeOrderStatus";
import { Col, Row, Table } from "react-bootstrap";
import { ColorModeContext } from "../../../routers/AppRouter";
import { useTranslation } from "react-i18next";

const OrderDetails = () => {
	const { t } = useTranslation();
	const { colorMode } = useContext(ColorModeContext);
	return (
		<>
			<div className="p-3">
				<Row className="g-3">
					<Col lg={6}>
						<h2 className="my-2">{t(`orderDetails`)}</h2>
					</Col>
					<Col lg={6}>
						<div>
							<Link to="/admin/orders">&larr; {t(`backToOrders`)}</Link>
						</div>
					</Col>
				</Row>
				<Row className="g-3">
					<Col lg={6}>
						<div className="mt-3">
							<p className="m-0">
								<b>{t(`orderID`)}:</b> nkjndfsn3498834br34
							</p>
							<p className="m-0">
								<b>{t(`orderAmount`)}:</b> $190
							</p>
							<p className="m-0">
								<b>{t(`orderStatus`)}:</b> Delivered
							</p>

							<h3 className="my-3">{t(`shippingAddress`)}</h3>
							<p className="m-0">
								<b>{t(`address`)}:</b> Mahammad Hadi street 49, Khatai distr.
							</p>
							<p className="m-0">
								<b>{t(`country`)}:</b> Azerbaijan
							</p>
							<p className="m-0">
								<b>{t(`city`)}:</b> Baku
							</p>
						</div>

						<ChangeOrderStatus className="p-0 m-0" />
					</Col>
					<Col lg={6}>
						<Table striped bordered hover variant={colorMode === `dark` ? `dark` : ``}>
							<thead>
								<tr>
									<th>#</th>
									<th>{t(`productName`)}</th>
									<th>{t(`price`)}</th>
									<th>{t(`quantity`)}</th>
									<th>{t(`total`)}</th>
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
									<td>$19</td>
									<td>10</td>
									<td>$190</td>
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
