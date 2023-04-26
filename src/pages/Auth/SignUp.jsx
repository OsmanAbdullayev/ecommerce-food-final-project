import React, { useState } from "react";

import { NavLink, useNavigate } from "react-router-dom";
import { Form, Button, Col, Row, Container } from "react-bootstrap";
import { toast } from "react-toastify";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/config";
import Loader from "../../components/loader/Loader";
import { useTranslation } from "react-i18next";

const SignUp = () => {
	const { t } = useTranslation();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [cPassword, setCPassword] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	const navigate = useNavigate();

	const signUpUser = (e) => {
		e.preventDefault();
		if (password !== cPassword) {
			toast.error(t(`passwordsDoNotMatch`));
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
					setIsLoading(false);
				});
		}
	};

	return (
		<>
			{isLoading && <Loader />}
			<Container className="my-4">
				<Row className="justify-content-center">
					<Col lg={6} sm={12}>
						<div className="text-center">
							<h2 className="mb-4">{t(`pleaseFillInYourDetails`)}</h2>
						</div>

						<Form onSubmit={signUpUser}>
							<Form.Group className="mb-3" controlId="formGridEmail">
								<Form.Label>Email</Form.Label>
								<Form.Control required type="email" placeholder={t(`email`)} value={email} onChange={(e) => setEmail(e.target.value)} />
							</Form.Group>

							<Row className="mb-3">
								<Form.Group as={Col} controlId="formGridPassword">
									<Form.Label>{t(`password`)}</Form.Label>
									<Form.Control required type="password" placeholder={t(`password`)} value={password} onChange={(e) => setPassword(e.target.value)} />
								</Form.Group>

								<Form.Group as={Col} controlId="formGridConfirmPassword">
									<Form.Label>{t(`confirmPassword`)}</Form.Label>
									<Form.Control required type="password" placeholder={t(`confirmPassword`)} value={cPassword} onChange={(e) => setCPassword(e.target.value)} />
								</Form.Group>
							</Row>

							<Form.Group className="mb-3" controlId="formGridAddress1">
								<Form.Label>{t(`address`)}</Form.Label>
								<Form.Control placeholder="1234 Main St" />
							</Form.Group>

							<Form.Group className="mb-3" controlId="formGridAddress2">
								<Form.Label>{t(`address`)} 2</Form.Label>
								<Form.Control placeholder="Apartment, studio, or floor" />
							</Form.Group>

							<Row className="mb-3">
								<Form.Group as={Col} controlId="formGridCity">
									<Form.Label>{t(`city`)}</Form.Label>
									<Form.Control />
								</Form.Group>

								<Form.Group as={Col} controlId="formGridCountry">
									<Form.Label>{t(`country`)}</Form.Label>
									<Form.Control />
								</Form.Group>

								<Form.Group as={Col} controlId="formGridZip">
									<Form.Label>{t(`zip`)}</Form.Label>
									<Form.Control />
								</Form.Group>
							</Row>

							<div className="text-center">
								<Button variant="primary" type="submit">
									{t(`signup`)}
								</Button>
							</div>
						</Form>
						<div className="d-flex flex-row align-items-center justify-content-center my-4">
							<p className="mb-0">{t(`alreadyHaveAnAccountQ`)}</p>
							<Button as={NavLink} to="/login" className="mx-2 text-white" color="danger" variant="secondary">
								{t(`login`)}
							</Button>
						</div>
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default SignUp;
