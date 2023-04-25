import React, { useContext } from "react";
// import { useNavigate } from "react-router-dom";

import { Button, Card, Form } from "react-bootstrap";
import { ColorModeContext } from "../../../routers/AppRouter";

const ChangeOrderStatus = () => {
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
							<h4>Update Status</h4>
						</Form.Label>
						<Form.Select>
							<option value="" disabled>
								-- Choose one --
							</option>
							<option value="Order Placed...">Order Placed...</option>
							<option value="Processing...">Processing...</option>
							<option value="Shipped...">Shipped...</option>
							<option value="Delivered">Delivered</option>
						</Form.Select>
					</Form.Group>

					<Button className="my-3" variant="primary" type="submit">
						Update Status
					</Button>
				</Form>
			</Card.Body>
		</Card>
	);
};

export default ChangeOrderStatus;
