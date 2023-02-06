import React, { useState } from "react";

import { Link, NavLink, useNavigate } from "react-router-dom";
import { Form, Button, Col, Container, Row } from "react-bootstrap";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/config";
import {  toast } from "react-toastify";
import Loader from "../../components/loader/Loader";

const LogIn = () => {
  const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate()


  const logIn = (e) => {
    e.preventDefault();
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    setIsLoading(false)
    // const user = userCredential.user;
    // toast.success("You Logged In Successfully!")
    navigate("/")
  })
  .catch((error) => {
    setIsLoading(false)
    toast.error(error.message)
  });

  }

	return (
	<>
			{isLoading && <Loader />}
  	<Container className="my-5 gradient-form">
			<Row>
				<Col lg="6" sm="12" className="mb-5">
					<div className="d-flex flex-column ms-5">
						<div className="text-center">
							<h4 className="mt-1 mb-5 pb-1">Welcome to Badam!</h4>
						</div>

						<p>Please login to your account</p>

						<Form onSubmit={logIn}>
							<Form.Group className="mb-3 text-center" controlId="formBasicEmail">
								<Form.Control type="email" placeholder="Enter email" required
                value={email} onChange={(e) => setEmail(e.target.value)}/>
							</Form.Group>

							<Form.Group className="mb-3 text-center" controlId="formBasicPassword">
								<Form.Control type="password" placeholder="Password" required 
                value={password} onChange={(e) => setPassword(e.target.value)}/>
							</Form.Group>

							<Button className="mb-4 w-100 gradient-custom-2" variant="primary" type="submit">
								Log In
							</Button>
							<Link className="text-muted" to="/reset">
								Forgot password?
							</Link>
						</Form>

						<div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
							<p className="mb-0">Don't have an account?</p>
							<Button as={NavLink} to="/signup" className="mx-2 text-white" color="danger" variant="secondary">
								Sign Up
							</Button>
						</div>
					</div>
				</Col>

				<Col lg="6" sm="12" className="mb-5">
					<div className="d-flex flex-column  justify-content-center bg-primary h-100 mb-4">
						<div className="text-white px-3 py-4 p-md-5 mx-md-4">
							<h4 className="mb-4">We are more than just a company</h4>
							<p className="small mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
						</div>
					</div>
				</Col>
			</Row>
		</Container></>
	);
};

export default LogIn;
