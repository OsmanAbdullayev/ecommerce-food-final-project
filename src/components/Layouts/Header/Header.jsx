import { useCart } from "react-use-cart";
import styles from "./header.module.scss";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";
import Form from "react-bootstrap/Form";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import { CiPizza, CiBurger, CiFries, CiSearch } from "react-icons/ci";
import { BiCake } from "react-icons/bi";
import { BsCart2, BsCircleHalf, BsCupStraw, BsPerson } from "react-icons/bs";
import { GiAlmond } from "react-icons/gi";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../../firebase/config";
import { toast } from "react-toastify";
import Loader from "../../loader/Loader";
import { useDispatch } from "react-redux";
import { REMOVE_ACTIVE_USER, SET_ACTIVE_USER } from "../../../redux/slice/authSlice";
import ShowOnLogIn, { ShowOnLogOut } from "../../hiddenLink/HiddenLink";
import AdminOnlyRoute from "../../adminOnlyRoute/AdminOnlyRoute";

function Header() {
	const { totalItems } = useCart();
	const [isHidden, setIsHidden] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [displayName, setDisplayName] = useState("");
	const dispatch = useDispatch();

	const navigate = useNavigate();

	const logOut = () => {
		setIsLoading(true);
		signOut(auth)
			.then(() => {
				// Sign-out successful.
				// toast.success("Signed Out Successfully!");
				setIsLoading(false);
				navigate("/");
			})
			.catch((error) => {
				// An error happened.
				toast.error(`An error happened: ${error}`);
			});
	};

	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				if (user.displayName == null) {
					const u1 = user.email.substring(0, user.email.indexOf("@"));
					const uName = u1.charAt(0).toUpperCase() + u1.slice(1);
					setDisplayName(uName);
				} else {
					setDisplayName(user.displayName);
				}

				console.log(displayName);
				dispatch(
					SET_ACTIVE_USER({
						email: user.email,
						userName: displayName,
						userID: user.uid,
					})
				);
			} else {
				setDisplayName("");
				dispatch(REMOVE_ACTIVE_USER());
			}
		});

		window.addEventListener("scroll", () => {
			if (window.pageYOffset > 10) {
				setIsHidden(true);
			} else {
				setIsHidden(false);
			}

			return () => {
				window.removeEventListener("scroll", () => {});
			};
		});
	}, [dispatch, displayName]);
	return (
		<>
			{isLoading && <Loader />}
			<Navbar className={`${styles.navbarbg} d-flex flex-column sticky-top m-0 p-0`} variant="dark" expand="lg">
				<Container className="py-2">
					<Navbar.Brand as={NavLink} to="/">
						<h1 className="pb-1 m-0 d-flex justify-content-between align-items-start">
							<GiAlmond size="1.2em" className="me-2 " />
							<span>Badam</span>
						</h1>
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="d-flex align-items-start">
							{/* <Nav.Link as={NavLink} to="/">
								Home
							</Nav.Link>
							<Nav.Link as={NavLink} to="/aboutus" className={`${styles.nowrap}`}>
								About Us
							</Nav.Link>
							<Nav.Link as={NavLink} to="/blog">
								Blog
							</Nav.Link> */}

							<Nav.Link as={NavLink} to="/contacts">
								Contacts
							</Nav.Link>

							<NavDropdown title="Menu" id="basic-nav-dropdown" className="me-3">
								<NavDropdown.Item as={Link} to="/menu/pizza">
									Pizza
								</NavDropdown.Item>
								<NavDropdown.Item as={Link} to="/menu/burgers">
									Burgers
								</NavDropdown.Item>
								<NavDropdown.Item as={Link} to="/menu/sidesandsalads">
									Sides & Salads
								</NavDropdown.Item>
								<NavDropdown.Item as={Link} to="/menu/desserts">
									Desserts
								</NavDropdown.Item>
								<NavDropdown.Item as={Link} to="/menu/drinks">
									Drinks
								</NavDropdown.Item>

								<NavDropdown.Item as={Link} to="/menu">
									All
								</NavDropdown.Item>
							</NavDropdown>

							<Form className="d-flex align-items-start">
								<Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" />
								<Button variant="outline-light">
									<CiSearch />
								</Button>
							</Form>
						</Nav>

						<Nav className="ms-auto">
							{/* <Stack className="ms-3">
								<Stack direction="horizontal" gap={4}>
									<p className={styles.p}>Call and Order in</p>
									<Form.Select className={styles.select} size="sm">
										<option className={styles.select}>Baku</option>
										<option className={styles.select}>Sumgait</option>
										<option className={styles.select}>Ganja</option>
									</Form.Select>
								</Stack>
								<h2 className={`${styles.number} text-start text-white`}>055 875 83 22</h2>
							</Stack> */}

							<Stack direction="horizontal">
								<Button as={NavLink} to="/cart" variant="secondary" className={`${styles.cart} my-1`}>
									<Stack direction="vertical" className={`${styles.vstack}`}>
										<Stack direction="horizontal" className={`${styles.tophstack}`}>
											<BsCart2 size="1.5em" className="me-2" /> <p className="p-0 m-0 bolder">Cart ({totalItems})</p>
										</Stack>
									</Stack>
								</Button>
								<ShowOnLogOut>
									<Button as={NavLink} to="/login" className="text-white d-flex justify-content-center align-items-center h-50" variant="secondary me-1">
										Log In
									</Button>
								</ShowOnLogOut>
								<ShowOnLogIn>
									<Button as={NavLink} to="/profile" className="text-white me-1">
										<BsPerson size="1.4em" />
										{displayName}
									</Button>
									<AdminOnlyRoute>
										<Button variant="dark" className="text-white me-1" as={NavLink} to="/admin">
											Admin
										</Button>
									</AdminOnlyRoute>
								</ShowOnLogIn>
								<ShowOnLogOut>
									<Button as={NavLink} to="/signup" className="text-white d-flex justify-content-center align-items-center h-50" variant="warning me-1">
										Sign Up
									</Button>
								</ShowOnLogOut>
								<ShowOnLogIn>
									<Button onClick={logOut} className="text-white d-flex justify-content-center align-items-center h-50" variant="warning me-1">
										Log Out
									</Button>
								</ShowOnLogIn>
								<Button className="text-white d-flex justify-content-center align-items-center h-50" variant="secondary me-1">
									<BsCircleHalf size="1.1em" />
								</Button>
								<Button className="text-white d-flex justify-content-center align-items-center h-50" variant="secondary">
									EN
								</Button>
							</Stack>
						</Nav>
					</Navbar.Collapse>
				</Container>
				<Container className={`${styles.hidingSection}`} style={{ display: isHidden ? "none" : "block" }}>
					<Navbar.Collapse id="basic-navbar-nav" className={`${styles.line} py-0 mt-0 w-100`}>
						<Nav className="d-flex justify-content-between align-items-start w-100">
							<Nav.Link as={NavLink} to="/menu/pizza" className={`${styles.menuNav}`}>
								<CiPizza size="1.8em" /> Pizza
							</Nav.Link>
							<Nav.Link as={NavLink} to="/menu/burgers" className={`${styles.menuNav}`}>
								<CiBurger size="1.8em" /> Burgers
							</Nav.Link>

							<Nav.Link as={NavLink} to="/menu/sidesandsalads" className={`${styles.menuNav}`}>
								<CiFries size="1.8em" /> Sides & Salads
							</Nav.Link>

							<Nav.Link as={NavLink} to="/menu/desserts" className={`${styles.menuNav}`}>
								<BiCake size="1.8em" /> Desserts
							</Nav.Link>
							<Nav.Link as={NavLink} to="/menu/drinks" className={`${styles.menuNav}`}>
								<BsCupStraw size="1.8em" /> Drinks
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	);
}

export default Header;
