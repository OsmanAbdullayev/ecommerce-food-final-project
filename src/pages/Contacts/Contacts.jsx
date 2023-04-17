import { useRef } from "react";
import Card from "../../components/Card/Card";
import styles from "./Contacts.module.scss";
import { FaPhoneAlt, FaEnvelope, FaTwitter } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import { toast } from "react-toastify";
import { Col, Container, Row, Form, Button, Stack } from "react-bootstrap";

const Contacts = () => {

	return (
		<>
			<Container>
				<h2 className="mt-3 text-center">Contact Us</h2>
				<Row gutter="3" className="mb-3">
					
					<Col lg="6" md="12" sm="12" className="py-3">
						<div className="h-100 shadow bg-primary text-white p-3 rounded d-flex justify-content-center align-items-center flex-column">
            <h3>Our Contact Information</h3>
						<p>Fill the form or contact us via other channels listed below</p>
						<div className="d-flex flex-column justify-content-around align-items-center">
							<span className="text-nowrap">
								<FaPhoneAlt  className="me-2"/>
								+994 55 888 85 55
							</span>
							<span className="text-nowrap">
								<FaEnvelope  className="me-2"/>
								Support@badam.com
							</span>
							<span className="text-nowrap">
								<GoLocation  className="me-2"/>
								Baku, Azerbaijan
							</span>
							<span className="text-nowrap">
								<FaTwitter  className="me-2"/>
								@badam
							</span>
						</div>
            </div>
					</Col>
          <Col lg="6" md="12" sm="12" className="py-3">
						<Form className="shadow p-3">
							<Form.Group className="my-3">
								<Form.Label>Name</Form.Label>
								<Form.Control type="text" placeholder="Full Name" />
							</Form.Group>
							<Form.Group className="my-3">
								<Form.Label>Email</Form.Label>
								<Form.Control type="email" placeholder="Your active email" />
							</Form.Group>
							<Form.Group className="my-3">
								<Form.Label>Subject</Form.Label>
								<Form.Control type="text" placeholder="Subject" />
							</Form.Group>
							<Form.Group className="my-3">
								<Form.Label>Message</Form.Label>
								<Form.Control as="textarea" placeholder="" />
							</Form.Group>
							<Button className="my-3">Send Message</Button>
						</Form>
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default Contacts;
