import React from "react";
import styles from "./Search.module.scss";
import { BiSearch } from "react-icons/bi";
import { Button, Form } from "react-bootstrap";
import { CiSearch } from "react-icons/ci";

const Search = ({ value, onChange }) => {
	return (
		<Form>
			<Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" value={value} onChange={onChange} />
		</Form>
	);
};

export default Search;
