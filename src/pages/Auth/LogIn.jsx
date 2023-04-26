import React, { useState } from "react";

import { Link, NavLink, useNavigate } from "react-router-dom";
import { Form, Button, Col, Container, Row } from "react-bootstrap";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/config";
import { toast } from "react-toastify";
import Loader from "../../components/loader/Loader";
import { useSelector } from "react-redux";
// import { prefix } from "@fortawesome/free-regular-svg-icons";
import { selectPreviousURL } from "../../redux/slice/cartSlice";
import { useTranslation } from "react-i18next";

const LogIn = () => {
	const { t } = useTranslation();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	const previousURL = useSelector(selectPreviousURL);
	const navigate = useNavigate();

	const redirectUser = () => {
		if (previousURL.includes("cart")) {
			return navigate("/cart");
		}
		navigate("/");
	};

	const logIn = (e) => {
		e.preventDefault();
		setIsLoading(true);
		signInWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				setIsLoading(false);
				// const user = userCredential.user;
				// toast.success("You Logged In Successfully!")
				redirectUser();
			})
			.catch((error) => {
				setIsLoading(false);
				toast.error(error.message);
			});
	};

	return (
		<div>
			{isLoading && <Loader />}
			<Container className="gradient">
				<Row className="py-5 px-2">
					<Col lg="6" sm="12" className="mb-5">
						<div className="d-flex flex-column">
							<div className="text-center">
								<h4 className="mt-1 mb-5 pb-1">{t(`welcomeToBadam`)}</h4>
							</div>

							<p>{t(`pleaseLoginToYourAccount`)}</p>

							<Form onSubmit={logIn}>
								<Form.Group className="mb-3 text-center" controlId="formBasicEmail">
									<Form.Control type="email" placeholder={t(`enterEmail`)} required value={email} onChange={(e) => setEmail(e.target.value)} />
								</Form.Group>

								<Form.Group className="mb-3 text-center" controlId="formBasicPassword">
									<Form.Control type="password" placeholder={t(`password`)} required value={password} onChange={(e) => setPassword(e.target.value)} />
								</Form.Group>

								<Button className="mb-4 w-100 gradient-custom-2" variant="primary" type="submit">
									{t(`login`)}
								</Button>
								<Link className="text-muted" to="/reset">
									{t(`forgotPasswordQ`)}
								</Link>
							</Form>

							<div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
								<p className="mb-0">{t(`dontHaveAnAccountQ`)}</p>
								<Button as={NavLink} to="/signup" className="mx-2 text-white" color="danger" variant="secondary">
									{t(`signup`)}
								</Button>
							</div>
						</div>
					</Col>

					<Col lg="6" sm="12" className="mb-5">
						<div className="d-flex flex-column  justify-content-center bg-primary h-100 mb-4">
							<div className="text-white px-3 py-4 p-md-5 mx-md-4">
								<h4 className="mb-4">{t(`companyTitle`)}</h4>
								<p className="small mb-0">{t(`compantDesc`)}</p>
							</div>
						</div>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default LogIn;
