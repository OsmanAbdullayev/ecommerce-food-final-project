import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Item from "../Item/Item";
import menu from "../../data/menu";

const SidesAndSaladsComponent = (props) => {
	return (
		<Container>
			<h1 className="text-center py-5">Sides & Salads</h1>

			<Row className="g-3">
				{menu
					.filter((menu) => menu.title | menu.category.toLowerCase().includes("sidesandsalads"))
					.map((fd, i) => {
						return (
							<Col lg={props.lg} md={props.md} sm={props.sm}>
								<Item key={i} img={fd.img} title={fd.title} price={fd.price} addProduct={fd} />
							</Col>
						);
					})}
			</Row>
		</Container>
	);
};

export default SidesAndSaladsComponent;
