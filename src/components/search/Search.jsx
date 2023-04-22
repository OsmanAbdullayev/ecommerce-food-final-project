import React from "react";
import styles from "./Search.module.scss";
import { BiSearch } from "react-icons/bi";
import { Button, Form } from "react-bootstrap";
import { CiSearch } from "react-icons/ci";
import { t } from "i18next";

const Search = ({ value, onChange }) => {
	return (
		<Form>
			<Form.Control type="search" placeholder={t(`search`)} className="me-2" aria-label="Search" value={value} onChange={onChange} />
		</Form>
	);
};

export default Search;
