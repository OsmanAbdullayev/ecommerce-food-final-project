import React from "react";
// import styles from "./Search.module.scss";

import {  Form } from "react-bootstrap";

import { t } from "i18next";

const Search = ({ value, onChange }) => {
	return (
		<Form>
			<Form.Control type="search" placeholder={t(`search`)} className="me-2" aria-label="Search" value={value} onChange={onChange} />
		</Form>
	);
};

export default Search;
