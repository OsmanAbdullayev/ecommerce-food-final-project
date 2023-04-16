import React, { useEffect } from "react";
import InfoBox from "../../infoBox/InfoBox";
import styles from "./Home.module.scss";
import { AiFillDollarCircle } from "react-icons/ai";
import { BsCart4 } from "react-icons/bs";
import { FaCartArrowDown } from "react-icons/fa";

import Chart from "../../chart/Chart";

//Icons
const earningIcon = <AiFillDollarCircle size={30} color="#b624ff" />;
const productIcon = <BsCart4 size={30} color="#1f93ff" />;
const ordersIcon = <FaCartArrowDown size={30} color="orangered" />;

const Home = () => {





	return (
		<div className={styles.home}>
			<h2>Admin Home</h2>
			<div className={styles["info-box"]}>
				<InfoBox cardClass={`${styles.card} ${styles.card1}`} title={"Earnings"} count="$5486" icon={earningIcon} />
				<InfoBox cardClass={`${styles.card} ${styles.card2}`} title={"Products"} count="879" icon={productIcon} />
				<InfoBox cardClass={`${styles.card} ${styles.card3}`} title={"Orders"} count="345" icon={ordersIcon} />
			</div>
			<div>
				<Chart />
			</div>
		</div>
	);
};

export default Home;
