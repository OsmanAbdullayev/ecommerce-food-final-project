import { useCart } from "react-use-cart";
// import styles from "./header.module.scss";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";

import { CiSearch } from "react-icons/ci";
import { BsFillCartFill, BsFillHeartFill, BsPerson } from "react-icons/bs";
import { GiAlmond } from "react-icons/gi";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../../firebase/config";
import { toast } from "react-toastify";
import Loader from "../../loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { REMOVE_ACTIVE_USER, SET_ACTIVE_USER } from "../../../redux/slice/authSlice";
import ShowOnLogIn, { ShowOnLogOut } from "../../hiddenLink/HiddenLink";
import { AdminOnlyLink } from "../../adminOnlyRoute/AdminOnlyRoute";
import { ColorModeContext } from "../../../routers/AppRouter";
import ReactSwitch from "react-switch";
import { Dropdown } from "react-bootstrap";
import { selectWishlistItems } from "../../../redux/slice/wishlistSlice";
import { SEARCH_PRODUCT, SET_CATEGORY, SET_SEARCH, SET_SEARCH_KEYWORD, selectSearchKeyword, selectSearchedProducts } from "../../../redux/slice/filterSlice";
import { selectProducts } from "../../../redux/slice/productsSlice";
import { useTranslation } from "react-i18next";
import { Spin as Hamburger } from "hamburger-react";
// import i18next from "i18next";

function Header() {
	const { t, i18n } = useTranslation();

	const { totalItems } = useCart();
	// const [isHidden, setIsHidden] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [expanded, setExpanded] = useState(false);

	const currentLng = localStorage.getItem("lng");

	const [displayName, setDisplayName] = useState("");
	const dispatch = useDispatch();

	const wishlistItems = useSelector(selectWishlistItems);
	// const search = useSelector(selectSearch);
	const searchedProducts = useSelector(selectSearchedProducts);
	const products = useSelector(selectProducts);
	const searchedKeyword = useSelector(selectSearchKeyword);

	const { colorMode, toggleColorMode } = useContext(ColorModeContext);

	const navigate = useNavigate();

	const handleLngChange = (language) => {
		i18n.changeLanguage(language);
		localStorage.setItem("lng", language);
	};

	useEffect(() => {
		dispatch(SEARCH_PRODUCT({ products, searchedKeyword }));
	}, [dispatch, products, searchedKeyword]);

	const handleSearch = (e) => {
		e.preventDefault();
		navigate("/menu");
		dispatch(SET_SEARCH(searchedKeyword));
		dispatch(SET_CATEGORY("All"));
		dispatch(SET_SEARCH_KEYWORD(""));
	};

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

				// console.log(displayName);
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

		// window.addEventListener("scroll", () => {
		// 	if (window.scrollY > 50) {
		// 		setIsHidden(true);
		// 		// console.log("activated");
		// 	} else {
		// 		setIsHidden(false);
		// 	}

		// 	return () => {
		// 		window.removeEventListener("scroll", () => {});
		// 	};
		// });
	}, [dispatch, displayName]);

	return (
		<>
			{isLoading && <Loader />}
			<Navbar expanded={expanded} bg={colorMode} sticky="top" variant={colorMode} expand="lg" className="p-0 py-2" id="header">
				<Container>
					<Navbar.Brand
						as={NavLink}
						to="/"
						onClick={() => {
							dispatch(SET_CATEGORY("All"));
							setExpanded(false);
						}}>
						<h1 className={colorMode === `dark` ? `text-primary  pb-1 m-0 d-flex justify-content-between align-items-start` : `text-white pb-1 m-0 d-flex justify-content-between align-items-start`}>
							<GiAlmond size="1.2em" className="me-2 " />
							<span>Badam</span>
						</h1>
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(!expanded)}>
						<Hamburger
							size={20}
							color="white"
							hideOutline={true}
							toggled={expanded}
							toggle={(expanded) => {
								setExpanded(!expanded);
							}}
						/>{" "}
					</Navbar.Toggle>
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="me-auto d-lg-flex align-items-lg-center">
							{/* <Nav.Link as={NavLink} to="/">
								Home
							</Nav.Link>
							<Nav.Link as={NavLink} to="/aboutus" className={`${styles.nowrap}`}>
								About Us
							</Nav.Link>
							<Nav.Link as={NavLink} to="/blog">
								Blog
							</Nav.Link> */}

							<Nav.Link as={NavLink} to="/contacts" className={colorMode === "dark " ? "" : "text-white "} onClick={() => setExpanded(false)}>
								{t(`contacts`)}
							</Nav.Link>

							<NavDropdown title={<span className={colorMode === "dark" ? "text-white" : "text-white"}>{t(`menu`)}</span>} id="basic-nav-dropdown" menuVariant={colorMode === "dark" ? "dark" : "light"} className="me-2">
								<NavDropdown.Item
									as={Link}
									to="/menu"
									onClick={() => {
										dispatch(SET_CATEGORY("All"));
										setExpanded(false);
									}}>
									{t(`all`)}
								</NavDropdown.Item>
								<NavDropdown.Item
									as={Link}
									to="/menu"
									onClick={() => {
										dispatch(SET_CATEGORY("Pizza"));
										setExpanded(false);
									}}>
									{t(`pizza`)}
								</NavDropdown.Item>
								<NavDropdown.Item
									as={Link}
									to="/menu"
									onClick={() => {
										dispatch(SET_CATEGORY("Burger"));
										setExpanded(false);
									}}>
									{t(`burgers`)}
								</NavDropdown.Item>
								<NavDropdown.Item
									as={Link}
									to="/menu"
									onClick={() => {
										dispatch(SET_CATEGORY("Side & Salads"));
										setExpanded(false);
									}}>
									{t(`sidesandsalads`)}
								</NavDropdown.Item>
								<NavDropdown.Item
									as={Link}
									to="/menu"
									onClick={() => {
										dispatch(SET_CATEGORY("Desserts"));
										setExpanded(false);
									}}>
									{t(`desserts`)}
								</NavDropdown.Item>
								<NavDropdown.Item
									as={Link}
									to="/menu"
									onClick={() => {
										dispatch(SET_CATEGORY("Drinks"));
										setExpanded(false);
									}}>
									{t(`drinks`)}
								</NavDropdown.Item>
							</NavDropdown>

							<Form className="d-flex align-items-start  me-2 py-2 mx-1">
								<Form.Control type="search" value={searchedKeyword} onChange={(e) => dispatch(SET_SEARCH_KEYWORD(e.target.value))} placeholder={t(`search`)} className={colorMode === `dark` ? `bg-dark me-2 text-white ` : `me-2`} aria-label="Search" list="search" />
								<datalist id="search">
									{searchedProducts.map((item, key) => (
										<option key={key} value={item.name} />
									))}
								</datalist>
								<Button
									type="submit"
									variant="outline-light"
									onClick={(e) => {
										handleSearch(e);
										setExpanded(false);
									}}>
									<CiSearch />
								</Button>
							</Form>
						</Nav>

						<Nav className="d-lg-flex align-items-lg-center">
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

							<Dropdown className="p-0 my-1 py-2 mx-1">
								<Dropdown.Toggle className={colorMode === "dark w-100" ? "" : "text-white w-100"} variant={colorMode === "dark" ? "outline-secondary " : "secondary "}>
									<BsPerson size="1.4em" className="" />
									{displayName.substring(0, 10)}
								</Dropdown.Toggle>

								<Dropdown.Menu className="positi">
									<ShowOnLogOut>
										<Dropdown.Item onClick={() => setExpanded(false)} as={NavLink} to="/login" variant={colorMode === "dark" ? "outline-secondary " : "secondary "}>
											{t(`login`)}
										</Dropdown.Item>
									</ShowOnLogOut>

									<ShowOnLogIn>
										<AdminOnlyLink>
											<Dropdown.Item onClick={() => setExpanded(false)} as={NavLink} to="/admin/home" variant={colorMode === "dark" ? "outline-primary " : "dark "}>
												Admin Panel
											</Dropdown.Item>
										</AdminOnlyLink>
									</ShowOnLogIn>

									<ShowOnLogOut>
										<Dropdown.Item onClick={() => setExpanded(false)} as={NavLink} to="/signup" variant={colorMode === "dark" ? "outline-secondary " : "secondary "}>
											{t(`signup`)}
										</Dropdown.Item>
									</ShowOnLogOut>

									<ShowOnLogIn>
										<Dropdown.Item
											onClick={() => {
												logOut();
												setExpanded(false);
											}}
											variant={colorMode === "dark" ? "outline-primary " : "outline-light "}>
											{t(`logout`)}
										</Dropdown.Item>
									</ShowOnLogIn>
								</Dropdown.Menu>
							</Dropdown>
							<nav className="w-100 d-flex justify-content-between align-items-center my-1 py-2 mx-1">
								<Button onClick={() => setExpanded(false)} as={NavLink} to="/wishlist" className={colorMode === "dark" ? "m-1 text-nowrap" : "text-white m-1 text-nowrap"} variant="transparent text-white">
									<BsFillHeartFill /> <sup>{wishlistItems.length}</sup>
								</Button>

								<Button onClick={() => setExpanded(false)} as={NavLink} to="/cart" className={colorMode === "dark" ? "m-1 text-nowrap" : "text-white m-1 text-nowrap"} variant="transparent text-white">
									<BsFillCartFill size="1.2em" />
									<sup>{totalItems}</sup>
								</Button>

								<div className="d-flex justify-content-center align-items-center">
									<ReactSwitch
										className="bg-secondary"
										onChange={() => {
											toggleColorMode();
											setExpanded(false);
										}}
										checked={colorMode === "dark"}
										offColor="#FFF"
										onColor="#444"
										offHandleColor="#c00a27"
										uncheckedIcon={false}
										checkedIcon={false}
									/>
								</div>
								<div className="text-nowrap m-1  mx-2 ">
									<Form.Select
										aria-label="Default select example"
										defaultValue={currentLng}
										className={colorMode === "dark" ? " bg-dark text-white " : "bg-secondary text-white"}
										variant={colorMode === "dark" ? "outline-secondary " : "secondary "}
										onChange={(e) => {
											handleLngChange(e.target.value);
											setExpanded(false);
										}}>
										<option value="en">EN</option>
										<option value="az">AZ</option>
									</Form.Select>
								</div>
							</nav>
						</Nav>
					</Navbar.Collapse>
				</Container>
				{/* <Container className={isHidden ? `${styles.hidingSection} d-none` : `${styles.hidingSection}`}>
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
				</Container> */}
			</Navbar>
			{/* <Navbar bg="primary" sticky="top" variant="light" expand="lg">
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
					

							<Nav.Link as={NavLink} to="/contacts">
								Contacts
							</Nav.Link>

							<NavDropdown title="Menu" id="basic-nav-dropdown" className="me-3" data-bs-theme="dark">
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
								<Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search"/>
								<Button variant="outline-light">
									<CiSearch />
								</Button>
							</Form>
						</Nav>

						<Nav className="ms-auto">
							<Stack className="ms-3">
								<Stack direction="horizontal" gap={4}>
									<p className={styles.p}>Call and Order in</p>
									<Form.Select className={styles.select} size="sm">
										<option className={styles.select}>Baku</option>
										<option className={styles.select}>Sumgait</option>
										<option className={styles.select}>Ganja</option>
									</Form.Select>
								</Stack>
								<h2 className={`${styles.number} text-start text-white`}>055 875 83 22</h2>
							</Stack>

							<Stack direction="horizontal">
								<Button as={NavLink} to="/cart" variant="secondary" className={`${styles.cart} my-1 ms-3 `}>
									<Stack direction="vertical" className={`${styles.vstack}`}>
										<Stack direction="horizontal" className={`${styles.tophstack}`}>
											<BsCart2 size="1.5em" className="me-2" /> <p className="p-0 m-0 bolder">Cart ({totalItems})</p>
										</Stack>
									</Stack>
								</Button>
								<ShowOnLogOut>
									<Button as={NavLink} to="/login" className="text-white d-flex justify-content-center align-items-center h-50" variant="secondary ">
										Log In
									</Button>
								</ShowOnLogOut>
								<ShowOnLogIn>
									<Button as={NavLink} to="/profile" className="text-white  pe-3 text-nowrap">
										<BsPerson size="1.4em" className="" />
										{displayName.substring(0, 6)}
									</Button>
									<AdminOnlyLink>
										<Button variant="dark" className="text-white " as={NavLink} to="/admin/home">
											Admin
										</Button>
									</AdminOnlyLink>
								</ShowOnLogIn>
								<ShowOnLogOut>
									<Button as={NavLink} to="/signup" className="text-white d-flex justify-content-center align-items-center h-50 text-nowrap" variant="warning ">
										Sign Up
									</Button>
								</ShowOnLogOut>
								<ShowOnLogIn>
									<Button onClick={logOut} className="text-white d-flex justify-content-center align-items-center h-50 text-nowrap" variant="warning ">
										Log Out
									</Button>
								</ShowOnLogIn>
								<Button className="text-white d-flex justify-content-center align-items-center h-50" variant="secondary ">
									<BsCircleHalf size="1.1em" />
								</Button>
								<Button className="text-white d-flex justify-content-center align-items-center h-50" variant="secondary">
									EN
								</Button>
							</Stack>
						</Nav>
					</Navbar.Collapse>
				</Container>
				<Container className={isHidden ? `${styles.hidingSection} d-none` : `${styles.hidingSection}`}>
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
			</Navbar> */}
		</>
	);
}

export default Header;
