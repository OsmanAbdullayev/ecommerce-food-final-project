import React, { useContext } from "react";
// import { useNavigate } from "react-router-dom";

import { Button, Card, Form } from "react-bootstrap";
import { ColorModeContext } from "../../../routers/AppRouter";
import { useTranslation } from "react-i18next";

const ChangeOrderStatus = () => {
	const { t } = useTranslation();
	const { colorMode } = useContext(ColorModeContext);

	const editOrder = (e) => {
		e.preventDefault();
		console.log("Form Submitted.");
	};

	return (
		<Card className={colorMode === `dark` ? `shadow my-4 bg-dark` : `shadow my-4 `}>
			<Card.Body>
				<Form onSubmit={(e) => editOrder(e)}>
					<Form.Group>
						<Form.Label>
							<h4>{t(`updateStatus`)}</h4>
						</Form.Label>
						<Form.Select>
							<option value="" disabled>
								-- {t(`chooseOne`)}--
							</option>
							<option value="Order Placed...">{t(`orderPlaced`)}...</option>
							<option value="Processing...">{t(`processing`)}...</option>
							<option value="Shipped...">{t(`shipped`)}...</option>
							<option value="Delivered">{t(`delivered`)}</option>
						</Form.Select>
					</Form.Group>

					<Button className="my-3" variant="primary" type="submit">
						{t(`updateStatus`)}
					</Button>
				</Form>
			</Card.Body>
		</Card>
	);
};

export default ChangeOrderStatus;
