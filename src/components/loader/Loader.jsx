import {React} from "react";
import ReactDOM from "react-dom";
import loaderImg from "../../assets/loader.gif";

import styles from "./loader.module.scss"
import { HashLoader } from "react-spinners";



const Loader = () => {

	return ReactDOM.createPortal(
		<div className={styles.wrapper}>
			<div className={styles.loader}>
			<HashLoader
        color="#c00a27"
        loading="true"
        cssOverride=""
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
			</div>
		</div>,
		document.getElementById("loader")
	);
};

export default Loader;
