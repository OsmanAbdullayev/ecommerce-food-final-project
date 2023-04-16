import React, { useState } from "react";

import { NavLink, useNavigate } from "react-router-dom";
import { Form, Button, Col, Row, Container } from "react-bootstrap";
import {  toast } from "react-toastify";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/config";
import Loader from "../../components/loader/Loader";

const SignUp = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [cPassword, setCPassword] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	const navigate = useNavigate();

	const signUpUser = (e) => {
		e.preventDefault();
		if (password !== cPassword) {
			toast.error("Passwords do not match.");
		} else {
			setIsLoading(true);
			createUserWithEmailAndPassword(auth, email, password)
				.then((userCredential) => {
					const user = userCredential.user;
					console.log(user);
					setIsLoading(false);
					// toast.success("You Signed Up Successfully!");
					navigate("/login");
				})
				.catch((error) => {

					toast.error("error.message");
          setIsLoading(false)
				});
		}
	};

	return (
		<>
			{isLoading && <Loader />}
			<Container className="">
				<div className="d-flex flex-column justify-content-center align-items-center ms-5	">
					<div className="text-center">
						<h4 className="my-2 pb-3">Please, fill in your details</h4>
					</div>

					<Form className="w-50" onSubmit={signUpUser}>
						<Form.Group className="mb-3" controlId="formGridEmail">
							<Form.Label>Email</Form.Label>
							<Form.Control required type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
						</Form.Group>

						<Row className="mb-3">
							<Form.Group as={Col} controlId="formGridPassword">
								<Form.Label>Password</Form.Label>
								<Form.Control required type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
							</Form.Group>

							<Form.Group as={Col} controlId="formGridConfirmPassword">
								<Form.Label>Confirm Password</Form.Label>
								<Form.Control required type="password" placeholder="Confirm Password" value={cPassword} onChange={(e) => setCPassword(e.target.value)} />
							</Form.Group>
						</Row>

						<Form.Group className="mb-3" controlId="formGridAddress1">
							<Form.Label>Address</Form.Label>
							<Form.Control placeholder="1234 Main St" />
						</Form.Group>

						<Form.Group className="mb-3" controlId="formGridAddress2">
							<Form.Label>Address 2</Form.Label>
							<Form.Control placeholder="Apartment, studio, or floor" />
						</Form.Group>

						<Row className="mb-3">
							<Form.Group as={Col} controlId="formGridCity">
								<Form.Label>City</Form.Label>
								<Form.Control />
							</Form.Group>

							<Form.Group as={Col} controlId="formGridCountry">
								<Form.Label>Country</Form.Label>
								<Form.Control />
							</Form.Group>

							<Form.Group as={Col} controlId="formGridZip">
								<Form.Label>Zip</Form.Label>
								<Form.Control />
							</Form.Group>
						</Row>

						<Button variant="primary" type="submit">
							Sign Up
						</Button>
					</Form>
					<div className="d-flex flex-row align-items-center justify-content-center my-4">
						<p className="mb-0">Already have an account?</p>
						<Button as={NavLink} to="/login" className="mx-2 text-white" color="danger" variant="secondary">
							Log In
						</Button>
					</div>
				</div>
			</Container>
		</>
	);
};

export default SignUp;
