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
		<div className={styles.footer}>
			<Container fluid className={styles.container}>
				<div className="container py-5">
					<Row className="text-white">
						<Col sm={12} lg={3}>
							<Stack>
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
							</Stack>
						</Col>

						<Col sm={12} lg={3}>
							<Stack>
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
							</Stack>
						</Col>

						<Col sm={12} lg={3}>
							<Stack>
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
							</Stack>
						</Col>

						<Col sm={12} lg={3}>
							<h3>{t(`followUsOn`)}</h3>
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
						{t(`developedByOsmanAbdullayev`)}.
					</Col>

					<Col sm={12} lg={6} className="text-end">
						Copyright &copy; {year} {t(`allRightsReserved`)}.
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default Footer;
