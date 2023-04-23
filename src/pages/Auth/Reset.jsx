import React from "react";
import { Link } from "react-router-dom";
import { Form, Button, Container } from "react-bootstrap";
import { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../firebase/config";
import { toast } from "react-toastify";
import Loader from "../../components/loader/Loader";

const Reset = () => {
	const [email, setEmail] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	const resetPassword = (e) => {
		e.preventDefault();
		setIsLoading(true);
		sendPasswordResetEmail(auth, email)
			.then(() => {
				setIsLoading(false);
				toast.success("The reset link has been sent to your email.")
			})
			.catch((error) => {
				setIsLoading(false);
				toast.error(error.message);
				// ..
			});
	};

	return (
		<>
			{isLoading && <Loader />}
			<Container className="mt-5">
				<div className="d-flex flex-column justify-content-center align-items-center ms-5">
					<div className="text-center">
						<h4 className="my-2 pb-3">Please, fill in your details</h4>
					</div>

					<Form onSubmit={resetPassword} className="w-50 ">
						<Form.Group className="mb-3" controlId="formGridEmail">
							<Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} required />
						</Form.Group>

						<Button variant="primary" type="submit">
							Reset Password
						</Button>
						<div className="d-flex justify-content-between align-items-center w-100 my-4">
							<Link className="text-muted" to="/login">
								Log In
							</Link>
							<Link className="text-muted" to="/signup">
								Sign Up
							</Link>
						</div>
					</Form>
				</div>
			</Container>
		</>
	);
};

export default Reset;
