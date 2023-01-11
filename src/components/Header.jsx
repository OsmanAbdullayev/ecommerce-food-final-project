import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";
import Form from "react-bootstrap/Form";

function Header() {
	return (
		<Navbar bg="danger" variant="dark" expand="lg" className="d-flex flex-column">
			<Container>
				<Navbar.Brand href="#home"><h1>Pizzaro</h1></Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
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
						<Stack gap={2} className="px-3">
							<Stack direction="horizontal" gap={2}>
								<h5 className="text-white">Location:</h5>{" "}
								<Form.Select size="sm">
									<option>Baku</option>
									<option>Sumgait</option>
									<option>Ganja</option>
								</Form.Select>
							</Stack>{" "}
							<h4 className="text-center text-white">+393500312837</h4>
						</Stack>
						<Stack direction="horizontal">
						<Button  as="a" variant="success" className="text-center">Cart</Button>
						<Button variant="outline-light mx-1">ENG</Button>
            <Button variant="outline-light">Dark</Button>
						</Stack>
					</Nav>
				</Navbar.Collapse>
				
			</Container>
			<Container className="border-top border-light-subtle">
			<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="d-flex justify-content-between w-100">
							<Nav.Link>Pizza</Nav.Link>
							<Nav.Link>Burgers</Nav.Link>
							<Nav.Link>Sandwiches</Nav.Link>
							<Nav.Link>Sides & Salads</Nav.Link>
							<Nav.Link>Combos</Nav.Link>
							<Nav.Link>Drinks</Nav.Link>
							<Nav.Link>Desserts</Nav.Link>
						</Nav>
					</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default Header;
