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
import { useContext, createContext, useEffect, useState } from "react";

import { CiPizza, CiBurger, CiFries, CiSearch } from "react-icons/ci";
import { BiCake } from "react-icons/bi";
import { BsCart2, BsCircleHalf, BsCupStraw, BsFillCartFill, BsFillHeartFill, BsPerson } from "react-icons/bs";
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
import Switch from "react-switch";
import ReactSwitch from "react-switch";
import { Dropdown } from "react-bootstrap";
import { selectWishlistItems } from "../../../redux/slice/wishlistSlice";
import { FILTER, SEARCH_PRODUCT, SET_CATEGORY, SET_SEARCH, selectSearch, selectSearchedProducts } from "../../../redux/slice/filterSlice";
import { selectProducts } from "../../../redux/slice/productsSlice";

function Header() {
	const { totalItems } = useCart();
	const [isHidden, setIsHidden] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [keyword, setKeyword] = useState("");
	const [displayName, setDisplayName] = useState("");
	const dispatch = useDispatch();

	const wishlistItems = useSelector(selectWishlistItems);
	const search = useSelector(selectSearch);
	const searchedProducts = useSelector(selectSearchedProducts);
	const products = useSelector(selectProducts);

	const { colorMode, toggleColorMode } = useContext(ColorModeContext);

	const navigate = useNavigate();

	useEffect(() => {
		dispatch(SEARCH_PRODUCT({ products, keyword }));
	}, [dispatch, products, keyword]);

	const handleSearch = (e) => {
		e.preventDefault();
		console.log("before navigate");
		navigate("/menu");
		console.log("after navigate");

		dispatch(SET_SEARCH(keyword));
		console.log(search);
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

		window.addEventListener("scroll", () => {
			if (window.scrollY > 50) {
				setIsHidden(true);
				// console.log("activated");
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
			<Navbar bg={colorMode} sticky="top" variant={colorMode} expand="lg">
				<Container className="py-2">
					<Navbar.Brand as={NavLink} to="/">
						<h1 className={colorMode === `dark` ? `text-primary  pb-1 m-0 d-flex justify-content-between align-items-start` : `text-white pb-1 m-0 d-flex justify-content-between align-items-start`}>
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

							<Nav.Link as={NavLink} to="/contacts" className={colorMode === "dark" ? "" : "text-white"}>
								Contacts
							</Nav.Link>

							<NavDropdown title={<span className={colorMode === "dark" ? "" : "text-white"}>Menu</span>} id="basic-nav-dropdown" menuVariant={colorMode === "dark" ? "dark" : "light"} className="me-2">
								<NavDropdown.Item
									as={Link}
									to="/menu"
									onClick={() => {
										dispatch(SET_CATEGORY("Pizzas"));
									}}>
									Pizza
								</NavDropdown.Item>
								<NavDropdown.Item
									as={Link}
									to="/menu"
									onClick={() => {
										dispatch(SET_CATEGORY("Burger"));
									}}>
									Burgers
								</NavDropdown.Item>
								<NavDropdown.Item
									as={Link}
									to="/menu"
									onClick={() => {
										dispatch(SET_CATEGORY("Side & Salads"));
									}}>
									Sides & Salads
								</NavDropdown.Item>
								<NavDropdown.Item
									as={Link}
									to="/menu"
									onClick={() => {
										dispatch(SET_CATEGORY("Desserts"));
									}}>
									Desserts
								</NavDropdown.Item>
								<NavDropdown.Item
									as={Link}
									to="/menu"
									onClick={() => {
										dispatch(SET_CATEGORY("Drinks"));
									}}>
									Drinks
								</NavDropdown.Item>

								<NavDropdown.Item
									as={Link}
									to="/menu"
									onClick={() => {
										dispatch(SET_CATEGORY("All"));
									}}>
									All
								</NavDropdown.Item>
							</NavDropdown>

							<Form className="d-flex align-items-start">
								<Form.Control
									type="search"
									value={keyword}
									onChange={(e) => {
										setKeyword(e.target.value);
									}}
									placeholder="Search"
									className="me-2"
									aria-label="Search"
									list="search"
								/>
								<datalist id="search">
									{searchedProducts.map((item, key) => (
										<option key={key} value={item.name} />
									))}
								</datalist>
								<Button variant="outline-light" onClick={dispatch}>
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

							<Button as={NavLink} to="/wishlist" className={colorMode === "dark" ? "mx-1 text-nowrap" : "text-white mx-1 text-nowrap"} variant="transparent text-white">
								<BsFillHeartFill /> <sup>{wishlistItems.length}</sup>
							</Button>

							<Button as={NavLink} to="/cart" className={colorMode === "dark" ? "mx-1 text-nowrap" : "text-white mx-1 text-nowrap"} variant="transparent text-white">
								<BsFillCartFill size="1.2em" />
								<sup>{totalItems}</sup>
							</Button>

							<Dropdown>
								<Dropdown.Toggle className={colorMode === "dark" ? "" : "text-white"} variant={colorMode === "dark" ? "outline-secondary " : "secondary "}>
									<BsPerson size="1.4em" className="" />
									{displayName.substring(0, 6)}
								</Dropdown.Toggle>

								<Dropdown.Menu>
									<ShowOnLogOut>
										<Dropdown.Item as={NavLink} to="/login" variant={colorMode === "dark" ? "outline-secondary " : "secondary "}>
											Log In
										</Dropdown.Item>
									</ShowOnLogOut>

									<ShowOnLogIn>
										<AdminOnlyLink>
											<Dropdown.Item as={NavLink} to="/admin/home" variant={colorMode === "dark" ? "outline-primary " : "dark "}>
												Admin Panel
											</Dropdown.Item>
										</AdminOnlyLink>
									</ShowOnLogIn>

									<ShowOnLogOut>
										<Dropdown.Item as={NavLink} to="/signup" variant={colorMode === "dark" ? "outline-secondary " : "secondary "}>
											Sign Up
										</Dropdown.Item>
									</ShowOnLogOut>

									<ShowOnLogIn>
										<Dropdown.Item onClick={logOut} variant={colorMode === "dark" ? "outline-primary " : "outline-light "}>
											Log Out
										</Dropdown.Item>
									</ShowOnLogIn>
								</Dropdown.Menu>
							</Dropdown>

							<ReactSwitch onChange={toggleColorMode} checked={colorMode === "dark"} offColor="#FFF" onColor="#111" offHandleColor="#c00a27" uncheckedIcon={false} checkedIcon={false} className="px-2" />
							<Button className={colorMode === "dark" ? "" : "text-white"} variant={colorMode === "dark" ? "outline-secondary " : "secondary "}>
								EN
							</Button>
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
