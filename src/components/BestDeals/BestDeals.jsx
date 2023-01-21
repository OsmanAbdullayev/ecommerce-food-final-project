import React from "react";
import { Button, Card, Col, Container, Nav, Row, Stack } from "react-bootstrap";
import BlackBurger from "../../assets/img/menu/burgers-1-300x300.png";
import PepperoniPizza from "../../assets/img/menu/pizza-1-300x300.png";
import VegetableSalad from "../../assets/img/menu/salad1-640x640.jpg";
import NutellaCake from "../../assets/img/menu/dessert2-300x300.jpg";
import CocaCola from "../../assets/img/menu/drinks1-300x300.jpg";
import { NavLink } from "react-router-dom";

const BestDeals = () => {
	return (
		<Container>
			<h1 className="text-center py-5">Current Offers</h1>
			<Row>
        <Col lg="4" sm="12">
				<Nav.Link as={NavLink} to="/burgers/blackburger">
					<Card className="p-3">
            <Stack direction="horizontal">
						<Card.Body>
							<Card.Title className="fs-5 text-danger fw-3"><h3>
              Save 30%</h3></Card.Title>
							<Card.Subtitle><h1 className="p-0 m-0">Black Burger</h1></Card.Subtitle>
							<Card.Text>Enjoy our Burgers at a slashed price</Card.Text>
						</Card.Body>
						<Card.Img className="w-50" src={BlackBurger} />
            </Stack>
					</Card>
        </Nav.Link>
				</Col>
        <Col lg="4" sm="12">
        <Nav.Link as={NavLink} to="/menu/pizza/pepperoni">
					<Card className="p-3">
            <Stack direction="horizontal">
						<Card.Body>
							<Card.Title className="fs-5 text-danger fw-3"><h3>
              Save 20%</h3></Card.Title>
							<Card.Subtitle><h1 className="p-0 m-0">Pepperoni Pizza</h1></Card.Subtitle>
							<Card.Text>Enjoy our Pizza at a slashed price</Card.Text>
						</Card.Body>
						<Card.Img className="w-50" src={PepperoniPizza} />
            </Stack>
					</Card>
        </Nav.Link>
				</Col>
        <Col lg="4" sm="12">
        <Nav.Link as={NavLink} to="/menu/desserts/nutellacake">
					<Card className="p-3">
            <Stack direction="horizontal">
						<Card.Body>
							<Card.Title className="fs-5 text-danger fw-3"><h3>
              Save 10%</h3></Card.Title>
							<Card.Subtitle><h1 className="p-0 m-0">Nutella Cake</h1></Card.Subtitle>
							<Card.Text>Enjoy our Desserts at a slashed price</Card.Text>
						</Card.Body>
						<Card.Img className="w-50" src={NutellaCake} />
            </Stack>
					</Card>
        </Nav.Link>
				</Col>
			</Row>
		</Container>
	);
};

export default BestDeals;
