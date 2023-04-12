import React from "react";
import { useCart } from "react-use-cart";
import { NavLink } from "react-router-dom";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button, Container, Table } from "react-bootstrap";
import {BsTrashFill} from "react-icons/bs"
const Cart = () => {
	const { isEmpty, totalUniqueItems, items, updateItemQuantity, removeItem, emptyCart, totalItems, cartTotal } = useCart();
	const removed = () => toast("Item removed successfully!");
	const checkedOut = () => toast("Checking out...");

	const removeAllItems = () => {
		confirmAlert({
			title: "Are you sure?",
			message: "All items will be removed.",
			buttons: [
				{
					label: "Yes",
					onClick: () => {
						emptyCart();
					},
				},
				{
					label: "No",
				},
			],
		});
	};

	if (isEmpty)
		return (
			<h2 className="text-primary text-center p-5 mt-3">
				{" "}
				Your cart is empty. Please, visit{" "}
				<NavLink to="/menu" className="text-secondary">
					Menu
				</NavLink>{" "}
				to choose products.
			</h2>
		);
	return (
		<Container>
			<section className="d-flex justify-content-center align-items-center mt-3 p-3">
				<h2 className="text-primary text-center m-0">Total Unique Burgers: {totalUniqueItems}</h2>
				<Button variant="danger" className="fs-5 text-light mx-4" onClick={removeAllItems}>
					Remove All Items
				</Button>
			</section>
			<div className="table-responsive-sm">
				<Table>
					<thead>
						<tr className="align-middle text-center" >
							<th scope="col">#</th>
							<th scope="col">Product Photo</th>
							<th scope="col">Product Name</th>
							<th scope="col">Price</th>
							<th scope="col">Quantity</th>
							<th scope="col">Action</th>
						</tr>
					</thead>
					<tbody>
						{items.map((fd, i) => (
							<tr className="align-middle text-center">
								<th scope="row" className="align-middle">
									{i + 1}
								</th>
								<td>
									<img src={fd.imageURL} alt="error" className="shadow"></img>
								</td>
								<td>
									<h3 className="text-primary">{fd.name}</h3>
								</td>
								<td className="align-middle">
									<h5>${fd.price * fd.quantity}</h5>
								</td>
								<td className="align-middle">
									<h5>x{fd.quantity}</h5>
								</td>
								<td className="d-flex justify-content-around align-items-center flex-column">
									<tr>
										<Button variant="warning" className="fs-5 my-1 text-light" onClick={() => updateItemQuantity(fd.id, fd.quantity - 1)}>
											-
										</Button>
									</tr>
									<tr>
										<Button variant="warning" className="fs-5 my-1 text-light" onClick={() => updateItemQuantity(fd.id, fd.quantity + 1)}>
											+
										</Button>
									</tr>
									<tr>
										<Button
											variant="danger"
											className="fs-5 my-1 text-light"
											onClick={() => {
												removed();
												removeItem(fd.id);
											}}>
											<BsTrashFill />
										</Button>
										<ToastContainer position="bottom-center" autoClose={1000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="colored" />
									</tr>
								</td>
							</tr>
						))}
						<tr className="align-middle text-center">
							<th>Total</th>
							<td></td>
							<td></td>
							<td>
								<h3 className="text-danger">${cartTotal} </h3>
							</td>
							<td>
								<h3 className="text-danger">x{totalItems} </h3>
							</td>
							<td className="d-flex justify-content-around align-items-center flex-column">
								<Button variant="secondary" className="fs-5 my-1 text-light" onClick={checkedOut}>
									Checkout
								</Button>
								<ToastContainer position="bottom-center" autoClose={1000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="colored" />

							</td>
						</tr>
					</tbody>
				</Table>
			</div>
		</Container>
	);
};

export default Cart;
