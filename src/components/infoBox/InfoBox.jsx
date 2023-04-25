import React, { useContext } from "react";

// import styles from "./InfoBox.module.scss";
import { Card } from "react-bootstrap";
import { ColorModeContext } from "../../routers/AppRouter";

const InfoBox = ({ cardClass, title, count, icon }) => {
const {colorMode} = useContext(ColorModeContext)

	return (
		<>
			<Card className={colorMode === `dark` ? `bg-dark` : ``}>
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
