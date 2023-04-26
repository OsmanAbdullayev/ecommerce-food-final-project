import React from "react";
import InfoBox from "../../infoBox/InfoBox";
// import styles from "./Home.module.scss";
import { AiFillDollarCircle } from "react-icons/ai";
import { BsCart4 } from "react-icons/bs";
import { FaCartArrowDown } from "react-icons/fa";

import Chart from "../../chart/Chart";
import { Col, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";

//Icons
const earningIcon = <AiFillDollarCircle size={30} color="#b624ff" />;
const productIcon = <BsCart4 size={30} color="#1f93ff" />;
const ordersIcon = <FaCartArrowDown size={30} color="orangered" />;

const Home = () => {
	const { t } = useTranslation();
	return (
		<section className="ps-1 pe-3 m-4">
			<h1 className="my-3 text-center">{t(`analytics`)}</h1>
			<Row className="g-2">
				<Col lg={4} md={4} sm={12}>
					<InfoBox title={t(`earnings`)} count="$5486" icon={earningIcon} />
				</Col>

				<Col lg={4} md={4} sm={12}>
					<InfoBox title={t(`products`)} count="879" icon={productIcon} />
				</Col>
				<Col lg={4} md={4} sm={12}>
					<InfoBox title={t(`orders`)} count="345" icon={ordersIcon} />
				</Col>
			</Row>
			<Row>
				<Col lg={12} md={12} sm={12}>
					<Chart />
				</Col>
			</Row>
		</section>
	);
};

export default Home;
