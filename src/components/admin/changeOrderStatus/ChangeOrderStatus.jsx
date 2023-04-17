import React from "react";
import { useNavigate } from "react-router-dom";
import Card from "../../Card/Card";
import styles from "./ChangeOrderStatus.module.scss";
import { Button, Form } from "react-bootstrap";

const ChangeOrderStatus = () => {

	const navigate = useNavigate();

  const editOrder = (e) => {
    e.preventDefault();
    console.log("Form Submitted.")
  }
	

	return (
		<>
			

			<div className={styles.status}>
				<Card cardClass={styles.card}>
					<h4>Update Status</h4>
					<Form onSubmit={(e) => editOrder(e)}>
						
							<Form.Select>
								<option value="" disabled>
									-- Choose one --
								</option>
								<option value="Order Placed...">Order Placed...</option>
								<option value="Processing...">Processing...</option>
								<option value="Shipped...">Shipped...</option>
								<option value="Delivered">Delivered</option>
							</Form.Select>
						
							<Button variant="primary" type="submit" >
								Update Status
							</Button>
						
					</Form>
				</Card>
			</div>
		</>
	);
};

export default ChangeOrderStatus;
