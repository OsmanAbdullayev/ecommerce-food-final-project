import React from "react";
import styles from "./footer.module.scss"
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container, Nav, Stack } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram, faTiktok, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { NavLink } from "react-router-dom";

const Footer = () => {
	return (
		<div className={styles.footer}>
			<Container fluid className={styles.container}>
				<div className="container py-5">
					<Row className="text-white">
						<Col sm={12} lg={3}>
							<Stack>
								<h3>Information</h3>

								<Nav.Link as={NavLink} to="/">
									<p>Home</p>
								</Nav.Link>
								<Nav.Link as={NavLink} to="/aboutus">
									<p>About Us</p>
								</Nav.Link>
								<Nav.Link as={NavLink} to="/blog">
									<p>Blog</p>
								</Nav.Link>
								<Nav.Link as={NavLink} to="/contacts">
									<p>Contacts</p>
								</Nav.Link>
								<Nav.Link as={NavLink} to="/menu">
									<p>Menu</p>
								</Nav.Link>
							</Stack>
						</Col>

						<Col sm={12} lg={3}>
							<Stack>
								<h3>Extras</h3>

								<Nav.Link as={NavLink} to="/">
									<p>Business Inquiries</p>
								</Nav.Link>
								<Nav.Link as={NavLink} to="/">
									<p>Privacy Policy</p>
								</Nav.Link>
								<Nav.Link as={NavLink} to="/">
									<p>Terms and Conditions</p>
								</Nav.Link>
							</Stack>
						</Col>

						<Col sm={12} lg={3}>
							<Stack>
								<h3>Get In Touch</h3>
								<p>
									<FontAwesomeIcon icon={faClock} /> Mon.-Sun. 10:00-23:00
								</p>
								<p>
									<FontAwesomeIcon icon={faLocationDot} /> Azadliq avenue, 37
								</p>
								<p>
									<FontAwesomeIcon icon={faPhone} /> +994 55 875 83 22
								</p>
								<p>
									<FontAwesomeIcon icon={faEnvelope} /> pizzario@gmail.com
								</p>
							</Stack>
						</Col>

						<Col sm={12} lg={3}>
								<h3>Follow Us On</h3>
							<Stack direction="horizontal">

								<h2 className="mx-2">
									<FontAwesomeIcon icon={faFacebook} />
								</h2>
								<h2 className="mx-2">
									<FontAwesomeIcon icon={faInstagram} />
								</h2>

								<h2 className="mx-2">
									<FontAwesomeIcon icon={faYoutube} />
								</h2>
								<h2 className="mx-2">
									<FontAwesomeIcon icon={faTiktok} />
								</h2>
							</Stack>
						</Col>
					</Row>
				</div>
				<Row className="px-5 py-2 bg-black text-white">
					<Col sm={12} lg={6} className="text-start">
					Designed by Osman Abdullayev
					</Col>

					<Col sm={12} lg={6} className="text-end">
				Copyright © 2022 All rights reserved.
					
					</Col>
				</Row>
				
			</Container>
		</div>
	);
};

export default Footer;
