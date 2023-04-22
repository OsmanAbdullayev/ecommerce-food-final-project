import React from "react";

import styles from "./InfoBox.module.scss";
import { Card } from "react-bootstrap";

const InfoBox = ({ cardClass, title, count, icon }) => {
	return (
		<>
			<Card>
				<Card.Body>
					<Card.Title>
						{icon} {title}
					</Card.Title>
					<Card.Text className="fs-4">{count}</Card.Text>
				</Card.Body>
			</Card>
		</>
	);
};

export default InfoBox;
