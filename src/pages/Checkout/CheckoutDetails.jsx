import { useState } from "react";
import { CountryDropdown } from "react-country-region-selector";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { SAVE_BILLING_ADDRESS, SAVE_SHIPPING_ADDRESS } from "../../redux/slice/checkoutSlice.jsx";
import { Button, Col, Container, Form, Row, Stack } from "react-bootstrap";
import CheckoutSummary from "../../components/CheckoutSummary/CheckoutSummary.jsx";
import { useCart } from "react-use-cart";

const initialAddressState = {
	name: "",
	line1: "",
	line2: "",
	city: "",
	state: "",
	postal_code: "",
	country: "",
	phone: "",
};

const CheckoutDetails = () => {
	const [shippingAddress, setShippingAddress] = useState({
		...initialAddressState,
	});
	const [billingAddress, setBillingAddress] = useState({
		...initialAddressState,
	});

	const { emptyCart } = useCart();

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleShipping = (e) => {
		const { name, value } = e.target;
		setShippingAddress({
			...shippingAddress,
			[name]: value,
		});
	};

	const handleBilling = (e) => {
		const { name, value } = e.target;
		setBillingAddress({
			...billingAddress,
			[name]: value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(SAVE_SHIPPING_ADDRESS(shippingAddress));
		dispatch(SAVE_BILLING_ADDRESS(billingAddress));
		emptyCart();
		navigate("/");
	};

	return (
		<section>
			<Container>
				<h1 className="my-4 text-center">Checkout Details</h1>
				<Form onSubmit={handleSubmit} className="m-3">
					<Row>
						<Col lg={8} md={8} sm={12}>
							<Row className="g-3">
								<Col lg={6} md={12} sm={12}>
									{/* Shipping  */}

									<h3>Shipping Address</h3>

									<Form.Group className="my-3">
										<Form.Label>Recipient Name</Form.Label>
										<Form.Control type="text" placeholder="Recipient Name" name="name" value={shippingAddress.name} onChange={(e) => handleShipping(e)} />
									</Form.Group>

									<Form.Group className="my-3">
										<Form.Label>Address line 1</Form.Label>
										<Form.Control type="text" placeholder="Address line 1" name="line1" value={shippingAddress.line1} onChange={(e) => handleShipping(e)} />
									</Form.Group>
									<Form.Group className="my-3">
										<Form.Label>Address line 2</Form.Label>
										<Form.Control type="text" placeholder="Address line 2" name="line2" value={shippingAddress.line2} onChange={(e) => handleShipping(e)} />
									</Form.Group>
									<Form.Group className="my-3">
										<Form.Label>City</Form.Label>
										<Form.Control type="text" placeholder="City" name="city" value={shippingAddress.city} onChange={(e) => handleShipping(e)} />
									</Form.Group>
									<Form.Group className="my-3">
										<Form.Label>State</Form.Label>
										<Form.Control type="text" placeholder="State" name="state" value={shippingAddress.state} onChange={(e) => handleShipping(e)} />
									</Form.Group>
									<Form.Group className="my-3">
										<Form.Label>Postal code</Form.Label>
										<Form.Control type="text" placeholder="Postal code" name="postal_code" value={shippingAddress.postal_code} onChange={(e) => handleShipping(e)} />
									</Form.Group>
									{/* COUNTRY INPUT */}
									<Form.Group className="my-3">
										<Stack>
											<Form.Label>Country</Form.Label>
											<CountryDropdown
												valueType="short"
												value={shippingAddress.country}
												onChange={(val) =>
													handleShipping({
														target: {
															name: "country",
															value: val,
														},
													})
												}
											/>
										</Stack>
									</Form.Group>
									<Form.Group className="my-3">
										<Form.Label>Phone</Form.Label>
										<Form.Control type="text" placeholder="Phone" name="phone" value={shippingAddress.phone} onChange={(e) => handleShipping(e)} />
									</Form.Group>
								</Col>

								<Col lg={6} md={12} sm={12}>
									{/* BILLING ADDRESS */}

									<div>
										<h3>Billing Address</h3>
										<Form.Group className="my-3">
											<Form.Label>Recipient Name</Form.Label>
											<Form.Control type="text" placeholder="Name" name="name" value={billingAddress.name} onChange={(e) => handleBilling(e)} />
										</Form.Group>
										<Form.Group className="my-3">
											<Form.Label>Address line 1</Form.Label>
											<Form.Control type="text" placeholder="Address line 1" name="line1" value={billingAddress.line1} onChange={(e) => handleBilling(e)} />
										</Form.Group>
										<Form.Group className="my-3">
											<Form.Label>Address line 2</Form.Label>
											<Form.Control type="text" placeholder="Address line 2" name="line2" value={billingAddress.line2} onChange={(e) => handleBilling(e)} />
										</Form.Group>
										<Form.Group className="my-3">
											<Form.Label>City</Form.Label>
											<Form.Control type="text" placeholder="City" name="city" value={billingAddress.city} onChange={(e) => handleBilling(e)} />
										</Form.Group>
										<Form.Group className="my-3">
											<Form.Label>State</Form.Label>
											<Form.Control type="text" placeholder="State" name="state" value={billingAddress.state} onChange={(e) => handleBilling(e)} />
										</Form.Group>
										<Form.Group className="my-3">
											<Form.Label>Postal code</Form.Label>
											<Form.Control type="text" placeholder="Postal code" name="postal_code" value={billingAddress.postal_code} onChange={(e) => handleBilling(e)} />
										</Form.Group>
									</div>
									{/* COUNTRY INPUT */}
									<Form.Group className="my-3">
										<Stack>
											<Form.Label>Country</Form.Label>
											<CountryDropdown
												valueType="short"
												value={billingAddress.country}
												onChange={(val) =>
													handleBilling({
														target: {
															name: "country",
															value: val,
														},
													})
												}
											/>
										</Stack>
									</Form.Group>
									<Form.Group className="my-3">
										<Form.Label>Phone</Form.Label>
										<Form.Control type="text" placeholder="Phone" name="phone" value={billingAddress.phone} onChange={(e) => handleBilling(e)} />
									</Form.Group>
								</Col>
								<Col lg={12}>
									<div className="text-center">
										<Button type="submit" variant="primary" className="text-nowrap ">
											Proceed To Checkout
										</Button>
									</div>
								</Col>
							</Row>
						</Col>

						<Col lg={4} md={4} sm={12}>
							{/* CHECKOUT  */}
							<CheckoutSummary />
						</Col>
					</Row>
				</Form>
			</Container>
		</section>
	);
};

export default CheckoutDetails;
