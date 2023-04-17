import React from "react";
import { Link } from "react-router-dom";
import styles from "./NotFoundPage.module.scss";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

const NotFoundPage = () => {
	return (
		<Container>
			<Row className="justify-content-center">
				<Col lg="auto">
					<Card className="my-3 py-3">
						<Card.Header>404</Card.Header>
						<Card.Body>
							<Card.Title>Ooops, page not found.</Card.Title>
						</Card.Body>
						<Button as={Link} to="/" variant="primary">
							&larr; Back to Home
						</Button>
					</Card>
				</Col>
			</Row>
		</Container>
	);
};

export default NotFoundPage;
