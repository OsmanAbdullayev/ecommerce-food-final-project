import React from "react";
import styles from "./footer.module.scss";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container, Nav, Stack } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram, faTiktok, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Footer = () => {
	const { t } = useTranslation();
	const date = new Date();
	const year = date.getFullYear();
	return (
		<Container fluid className={`${styles.container} bg-dark`}>
			<Container className="py-3">
				<Row className="text-white g-3">
					<Col sm={12} lg={3} className="p-2 ">
						<div className=" h-100  d-flex flex-column justify-content-start text-center align-items-center">
							<h3> {t(`information`)} </h3>

							<Nav.Link as={NavLink} to="/">
								<p> {t(`home`)} </p>
							</Nav.Link>
							<Nav.Link as={NavLink} to="/aboutus">
								<p>{t(`aboutUs`)}</p>
							</Nav.Link>
							{/* <Nav.Link as={NavLink} to="/blog">
			<p> {t(`blog`)} </p>
		</Nav.Link> */}
							<Nav.Link as={NavLink} to="/contacts">
								<p> {t(`contacts`)} </p>
							</Nav.Link>
							<Nav.Link as={NavLink} to="/menu">
								<p>{t(`menu`)}</p>
							</Nav.Link>
						</div>
					</Col>

					<Col sm={12} lg={3} className="p-2 ">
						<div className=" h-100  d-flex flex-column justify-content-start text-center align-items-center">
							<h3>{t(`extras`)} </h3>

							<Nav.Link as={NavLink} to="/">
								<p>{t(`businessInquiries`)}</p>
							</Nav.Link>
							<Nav.Link as={NavLink} to="/">
								<p>{t(`privacyPolicy`)}</p>
							</Nav.Link>
							<Nav.Link as={NavLink} to="/">
								<p>{t(`termsAndConditions`)}</p>
							</Nav.Link>
						</div>
					</Col>

					<Col sm={12} lg={3} className="p-2 ">
						<div className=" h-100  d-flex flex-column justify-content-start text-center align-items-center">
							<h3>{t(`getInTouch`)}</h3>
							<p>
								<FontAwesomeIcon icon={faClock} /> {t(`mon`)}.-{t(`sun`)}. 10:00-23:00
							</p>
							<p>
								<FontAwesomeIcon icon={faLocationDot} /> {t(`azadliq`)} {t(`avenue`)}, 37
							</p>
							<p>
								<FontAwesomeIcon icon={faPhone} /> +994 55 875 83 22
							</p>
							<p>
								<FontAwesomeIcon icon={faEnvelope} /> info@badam.az
							</p>
						</div>
					</Col>

					<Col sm={12} lg={3} className="p-2 ">
						<div className=" h-100  d-flex flex-column justify-content-start text-center align-items-center">
							<h3>{t(`followUsOn`)}</h3>
							<Stack direction="horizontal" className="d-flex justify-content-center">
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
						</div>
					</Col>
				</Row>
			</Container>
			<Row className="px-5 py-2 bg-black text-white">
				<Col sm={12} lg={6} className="py-2 d-flex justify-content-lg-start justify-content-center text-center">
					{t(`developedByOsmanAbdullayev`)}.
				</Col>

				<Col sm={12} lg={6} className="py-2 d-flex justify-content-lg-end justify-content-center text-center">
			
						Copyright &copy; {year} {t(`allRightsReserved`)}.
					
				</Col>
			</Row>
		</Container>
	);
};

export default Footer;
