import React from "react";

import styles from "./InfoBox.module.scss";
import { Card } from "react-bootstrap";

const InfoBox = ({ cardClass, title, count, icon }) => {
	return (
		<>
			<Card>
				<Card.Body>
					<Card.Title>{title}</Card.Title>
					<Card.Text>
						<h3>{count}</h3>
						{icon}
					</Card.Text>
				</Card.Body>
			</Card>
		</>
	);
};

export default InfoBox;
