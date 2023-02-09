import React from "react";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectEmail } from "../../redux/slice/authSlice";

const AdminOnlyRoute = ({ children }) => {
	const userEmail = useSelector(selectEmail);
	if (userEmail === "os.abdullayev@gmail.com") {
		return children;
	} else {
		return (
			<section className="h-75 m-5 text-center">
				<div className="container">
					<h2>Permission Denied.</h2>
					<p>This page can only be viewed by an Admin user.</p>
					<Button as={Link} to="/" variant="primary">
						Back To Home
					</Button>
				</div>
			</section>
		);
	}
};
export const AdminOnlyLink = ({ children }) => {
	const userEmail = useSelector(selectEmail);
	if (userEmail === "os.abdullayev@gmail.com") {
		return children;
	} else {
		return null;
	}
};

export default AdminOnlyRoute;
