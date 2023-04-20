import React from "react";
import { ADD_TO_WISHLIST, CALCULATE_TOTAL_QUANTITY, CLEAR_WISHLIST, REMOVE_FROM_WISHLIST, selectWishlistItems } from "../../redux/slice/wishlistSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { Button, Container, Stack, Table } from "react-bootstrap";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { removeListener } from "@reduxjs/toolkit";
import { BsTrashFill } from "react-icons/bs";
import { useCart } from "react-use-cart";

const Wishlist = () => {
	const wishlistItems = useSelector(selectWishlistItems);
	console.log(wishlistItems);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const { addItem } = useCart();

	const removed = () => toast("Item removed successfully!");

	const moveAllToCart = (products) => {
		products.map((product) => addItem(product));
		navigate("/cart");
	};

	const clearWishlist = () => {
		dispatch(CLEAR_WISHLIST());
	};

	// wishlistItems.map((fd) => console.log(fd.id))

	const removeFromWishlist = (wishlist) => {
		dispatch(REMOVE_FROM_WISHLIST(wishlist));
	};

	useEffect(() => {
		dispatch(CALCULATE_TOTAL_QUANTITY());
	}, [wishlistItems, dispatch]);

	if (wishlistItems.length === 0)
		return (
			<h2 className="text-primary text-center p-5 mt-3">
				{" "}
				Your wishlist is empty. Please, visit{" "}
				<NavLink to="/menu" className="text-secondary">
					Menu
				</NavLink>{" "}
				to choose products.
			</h2>
		);
	return (
		<Container>
			<section className="d-flex justify-content-center align-items-center mt-3 p-3">
				<h2 className="text-primary text-center m-0">Total Wished Products: {wishlistItems.length}</h2>
				<Button variant="danger" className="fs-5 text-light mx-4" onClick={clearWishlist}>
					Remove All Items
				</Button>
			</section>
			<div className="table-responsive-sm">
				<Table>
					<thead>
						<tr className="align-middle text-center">
							<th scope="col">#</th>
							<th scope="col">Product Photo</th>
							<th scope="col">Product Name</th>
							<th scope="col">Price</th>
							<th scope="col">Action</th>
						</tr>
					</thead>
					<tbody>
						{wishlistItems.map((fd, i) => (
							<tr className="align-middle text-center" key={i}>
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
									<h5>${fd.price}</h5>
								</td>

								<td className="align-middle">
									<Stack className="d-flex flex-column justify-content-center align-items-center">
										<Button
											variant="danger"
											className="fs-5 my-1 text-light"
											onClick={() => {
												removeFromWishlist(fd);
												console.log(fd);
											}}>
											<BsTrashFill />
										</Button>
										<Button variant="secondary" className=" text-light text-nowrap p-1 py-2 my-1" onClick={() => addItem(fd)}>
											Move to Cart
										</Button>
									</Stack>
								</td>
							</tr>
						))}
						<tr className="align-middle text-center">
							<td colSpan={5}>
								<Button variant="secondary" className=" text-light text-nowrap w-100 p-1 py-2 my-1" onClick={() => moveAllToCart(wishlistItems)}>
									Move All to Cart
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

export default Wishlist;
