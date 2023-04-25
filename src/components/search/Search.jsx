import React, { useContext } from "react";
// import styles from "./Search.module.scss";

import { Form } from "react-bootstrap";

import { t } from "i18next";
import { ColorModeContext } from "../../routers/AppRouter";

const Search = ({ value, onChange }) => {
	const { colorMode } = useContext(ColorModeContext);
	return (
		<Form>
			<Form.Control type="search" placeholder={t(`search`)} className={colorMode === `dark` ? `bg-dark text-white me-2` : `me-2`} aria-label="Search" value={value} onChange={onChange} />
		</Form>
	);
};

export default Search;
