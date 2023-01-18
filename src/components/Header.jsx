import styles from "./header.module.scss";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";
import Form from "react-bootstrap/Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBurger, faCartShopping, faPizzaSlice, faSandwich, faSalad, faHotdog, faBowlFood, faBoxesStacked, faChampagneGlasses, faIceCream, faKitchenSet } from "@fortawesome/free-solid-svg-icons";

function Header() {
	return (
		<>
			<Navbar className={`${styles.navbarbg} d-flex flex-column`} variant="dark" expand="lg">
				<Container>
					<Navbar.Brand href="#home">
						<h1>Pizzaro</h1>
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav" className="py-3">
						<Nav>
							<Nav.Link href="#home">Home</Nav.Link>
							<Nav.Link href="#link">Order Online</Nav.Link>
							<NavDropdown title="Products" id="basic-nav-dropdown">
								<NavDropdown.Item href="#action/3.1">Burger</NavDropdown.Item>
								<NavDropdown.Item href="#action/3.2">Potatoes</NavDropdown.Item>
								<NavDropdown.Item href="#action/3.3">Drinks</NavDropdown.Item>
								<NavDropdown.Divider />
								<NavDropdown.Item href="#action/3.4">All</NavDropdown.Item>
							</NavDropdown>
						</Nav>
						<Nav className="ms-auto">
							<Stack gap={2} className="me-4">
								<Stack direction="horizontal" gap={4}>
									<p className={styles.p}>Call and Order in</p>
									<Form.Select className={styles.select} size="sm">
										<option className={styles.select}>Baku</option>
										<option className={styles.select}>Sumgait</option>
										<option className={styles.select}>Ganja</option>
									</Form.Select>
								</Stack>{" "}
								<h2 className={`${styles.number} text-start text-white`}>54 548 779 654</h2>
							</Stack>
							<Stack direction="horizontal">
								<Button as="a" variant="secondary" className={`${styles.cart}`}>
									<Stack direction="vertical" className={`${styles.vstack}`}>
										<Stack direction="horizontal" className={`${styles.tophstack}`}>
											<FontAwesomeIcon icon={faCartShopping} className="me-2 my-0 py-0" /> <p>Your Cart is Empty</p>
										</Stack>
										<Stack direction="horizontal" className={`${styles.bottomhstack}`}>
											<div className={`${styles.receipt}`}>
											<span className={styles.count}>0 items</span> <span className={styles.amount}>£0.00</span>
											</div>
										</Stack>
									</Stack>
								</Button>

								<Button className="text-white" variant="secondary mx-1">
									ENG
								</Button>
								<Button className="text-white" variant="secondary">
									Dark
								</Button>
							</Stack>
						</Nav>
					</Navbar.Collapse>
				</Container>
				<Container>
					<Navbar.Collapse id="basic-navbar-nav" className={`${styles.line} py-3 w-100`}>
						<Nav className="d-flex justify-content-between align-items-start w-100">
							<Nav.Link className={`${styles.menuNav}`}>
								<FontAwesomeIcon icon={faPizzaSlice} /> Pizza
							</Nav.Link>
							<Nav.Link className={`${styles.menuNav}`}>
								<FontAwesomeIcon icon={faBurger} /> Burgers
							</Nav.Link>
							<Nav.Link className={`${styles.menuNav}`}>
								<FontAwesomeIcon icon={faHotdog} /> Hotdog
							</Nav.Link>
							<Nav.Link className={`${styles.menuNav}`}>
								<FontAwesomeIcon icon={faBowlFood} /> Sides & Salads
							</Nav.Link>
							<Nav.Link className={`${styles.menuNav}`}>
								<FontAwesomeIcon icon={faKitchenSet} /> Combos
							</Nav.Link>
							<Nav.Link className={`${styles.menuNav}`}>
								<FontAwesomeIcon icon={faChampagneGlasses} /> Drinks
							</Nav.Link>
							<Nav.Link className={`${styles.menuNav}`}>
								<FontAwesomeIcon icon={faIceCream} /> Desserts
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	);
}

export default Header;
