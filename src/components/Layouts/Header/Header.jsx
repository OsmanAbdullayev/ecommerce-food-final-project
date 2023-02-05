import styles from "./header.module.scss";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";
import Form from "react-bootstrap/Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBurger, faCartShopping, faPizzaSlice, faHotdog, faBowlFood, faChampagneGlasses, faIceCream, faKitchenSet, faCircleHalfStroke, faUser, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

function Header() {

	

  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset >= 1) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
    });

    return () => {
      window.removeEventListener('scroll', () => {});
    };
  }, []);
	return (
		<>
			<Navbar className={`${styles.navbarbg} d-flex flex-column sticky-top`} variant="dark" expand="lg">
				<Container>
					<Navbar.Brand as={NavLink} to="/">
						<h1>Bakuviano</h1>
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav" className="pt-3">
						<Nav>
							<Nav.Link as={NavLink} to="/">Home</Nav.Link>
							<Nav.Link as={NavLink} to="/aboutus">About Us</Nav.Link>
							<Nav.Link as={NavLink} to="/blog">Blog</Nav.Link>
							<Nav.Link as={NavLink} to="/contacts">Contacts</Nav.Link>

							<NavDropdown title="Menu" id="basic-nav-dropdown" className="me-3">
								<NavDropdown.Item as={Link} to="#action/3.2">Burgers</NavDropdown.Item>
								<NavDropdown.Item as={Link} to="#action/3.3">Hotdog</NavDropdown.Item>
								<NavDropdown.Item as={Link} to="#action/3.3">Sides & Salads</NavDropdown.Item>
								<NavDropdown.Item as={Link} to="#action/3.3">Combos</NavDropdown.Item>
								<NavDropdown.Item as={Link} to="#action/3.3">Drinks</NavDropdown.Item>
								<NavDropdown.Item as={Link} to="#action/3.3">Desserts</NavDropdown.Item>
								<NavDropdown.Item as={Link} to="#action/3.1">Pizza</NavDropdown.Item>
								<NavDropdown.Divider />
								<NavDropdown.Item as={Link} to="#action/3.4">All</NavDropdown.Item>
							</NavDropdown>

							<Form className="d-flex mb-3">
								<Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" />
								<Button variant="outline-light">
									<FontAwesomeIcon icon={faMagnifyingGlass} />
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

							<Stack direction="horizontal" className="mb-3">
								<Button as={NavLink} to="/cart" variant="secondary" className={`${styles.cart}`
							}>
									<Stack direction="vertical" className={`${styles.vstack}`}>
										<Stack direction="horizontal" className={`${styles.tophstack}`}>
											<FontAwesomeIcon icon={faCartShopping} /> <p className="p-0 m-0 bolder">Your Cart is Empty</p>
										</Stack>
									</Stack>
								</Button>
								<Button className="text-white" variant="secondary">
									<FontAwesomeIcon icon={faUser} />
								</Button>
								<Button className="text-white" variant="secondary mx-1">
									<FontAwesomeIcon icon={faCircleHalfStroke} />
								</Button>
								<Button className="text-white" variant="secondary">
									EN
								</Button>
							</Stack>
						</Nav>
					</Navbar.Collapse>
				</Container>
				<Container className={`${styles.hidingSection}`} style={{ display: isHidden ? 'none' : 'block' }}>
					<Navbar.Collapse id="basic-navbar-nav" className={`${styles.line} py-3 mt-0 w-100`}>
						<Nav className="d-flex justify-content-between align-items-start w-100">
							<Nav.Link as={NavLink} to="/menu/pizza" className={`${styles.menuNav}`}>
								<FontAwesomeIcon icon={faPizzaSlice} /> Pizza
							</Nav.Link>
							<Nav.Link as={NavLink} to="/menu/burgers" className={`${styles.menuNav}`}>
								<FontAwesomeIcon icon={faBurger} /> Burgers
							</Nav.Link>
			
							<Nav.Link as={NavLink} to="/menu/sidesandsalads" className={`${styles.menuNav}`}>
								<FontAwesomeIcon icon={faBowlFood} /> Sides & Salads
							</Nav.Link>
	
							<Nav.Link as={NavLink} to="/menu/desserts" className={`${styles.menuNav}`}>
								<FontAwesomeIcon icon={faIceCream} /> Desserts
							</Nav.Link>
							<Nav.Link as={NavLink} to="/menu/drinks" className={`${styles.menuNav}`}>
								<FontAwesomeIcon icon={faChampagneGlasses} /> Drinks
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	);
}

export default Header;
