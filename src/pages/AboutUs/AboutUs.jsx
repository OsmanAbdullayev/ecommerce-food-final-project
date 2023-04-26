import React, { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { ColorModeContext } from "../../routers/AppRouter";

const AboutUs = () => {
	const { t } = useTranslation();
	const { colorMode } = useContext(ColorModeContext);

	return (
		<Container className="my-5 py-5">
			<Row className="justify-content-center my-5 text-center h-100">
				<Col lg={6} className={colorMode === `dark` ? `bg-dark ` : `bg-primary`}>
					<div className="d-flex flex-column  justify-content-center h-100 mb-4">
						<div className="text-white px-3 py-4 p-md-5 mx-md-4">
							<h4 className="mb-4">{t(`companyTitle`)}</h4>
							<p className="small mb-0">{t(`compantDesc`)}</p>
						</div>
					</div>
				</Col>
			</Row>
		</Container>
	);
};

export default AboutUs;
