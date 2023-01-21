import React from "react";
import { Card, Col, Container, Nav, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import BlackBurger from "../../assets/img/menu/burgers-1-300x300.png";
import PepperoniPizza from "../../assets/img/menu/pizza-1-300x300.png";
import VegetableSalad from "../../assets/img/menu/salad1-640x640.jpg";
import NutellaCake from "../../assets/img/menu/dessert2-300x300.jpg";
import CocaCola from "../../assets/img/menu/drinks1-300x300.jpg";


const ProductsSection = () => {
	return (
		<Container>
      <h1 className="text-center py-5">Choose your product</h1>
			<Row className="justify-content-md-center">
				<Col sm="12" mg="6" lg="2">
					<Nav.Link as={NavLink} to="/menu/burgers">
						<Card>
							<Card.Img variant="top" src={BlackBurger} />
							<Card.Body>
								<Card.Title className="text-center">Burgers</Card.Title>
							</Card.Body>
						</Card>
					</Nav.Link>
				</Col>
        <Col sm="12" mg="6" lg="2">
					<Nav.Link as={NavLink} to="/menu/pizza">
						<Card>
							<Card.Img variant="top" src={PepperoniPizza} />
							<Card.Body>
								<Card.Title className="text-center">Pizza</Card.Title>
							</Card.Body>
						</Card>
					</Nav.Link>
				</Col>
     
        <Col sm="12" mg="6" lg="2">
					<Nav.Link as={NavLink} to="/menu/sidesandsalads">
						<Card>
							<Card.Img variant="top" src={VegetableSalad} />
							<Card.Body>
								<Card.Title className="text-center">Sides & Salads</Card.Title>
							</Card.Body>
						</Card>
					</Nav.Link>
				</Col>
        <Col sm="12" mg="6" lg="2">
					<Nav.Link as={NavLink} to="/menu/desserts">
						<Card>
							<Card.Img variant="top" src={NutellaCake} />
							<Card.Body>
								<Card.Title className="text-center">Desserts</Card.Title>
							</Card.Body>
						</Card>
					</Nav.Link>
				</Col>
        <Col sm="12" mg="6" lg="2">
					<Nav.Link as={NavLink} to="/menu/drinks">
						<Card>
							<Card.Img variant="top" src={CocaCola} />
							<Card.Body>
								<Card.Title className="text-center">Drinks</Card.Title>
							</Card.Body>
						</Card>
					</Nav.Link>
				</Col>
			</Row>
		</Container>
	);
};

export default ProductsSection;
