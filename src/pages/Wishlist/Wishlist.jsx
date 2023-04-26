import React, { useContext } from "react";
import { CALCULATE_TOTAL_QUANTITY, CLEAR_WISHLIST, REMOVE_FROM_WISHLIST, selectWishlistItems } from "../../redux/slice/wishlistSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { Button, Container, Stack, Table } from "react-bootstrap";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { BsTrashFill } from "react-icons/bs";
import { FaCartPlus } from "react-icons/fa";
import { useCart } from "react-use-cart";
import { ColorModeContext } from "../../routers/AppRouter";
import { useTranslation } from "react-i18next";

const Wishlist = () => {
	const { t } = useTranslation();
	const { colorMode } = useContext(ColorModeContext);
	const wishlistItems = useSelector(selectWishlistItems);
	const { items } = useCart();

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const { addItem } = useCart();

	// const removed = () => toast("Item removed successfully!");

	const moveAllToCart = (products) => {
		products.forEach((product) => {
			if (items.some((item) => item.id === product.id)) {
			} else {
				addItem(product);
				navigate("/cart");
			}
		});
	};

	const moveToCart = (product) => {
		if (items.some((item) => item.id === product.id)) {
		} else {
			addItem(product);
		}
	};

	const clearWishlist = () => {
		dispatch(CLEAR_WISHLIST());
	};

	const removeFromWishlist = (wishlist) => {
		dispatch(REMOVE_FROM_WISHLIST(wishlist));
	};

	useEffect(() => {
		dispatch(CALCULATE_TOTAL_QUANTITY());
	}, [wishlistItems, dispatch]);

	if (wishlistItems.length === 0)
		return (
			<h2 className=" text-center p-5 mt-3">
				{" "}
				{t(`yourWishlistIsEmptyPleaseVisit`)}{" "}
				<NavLink to="/menu" className="text-secondary">
					{t(`menu`)}
				</NavLink>{" "}
				{t(`toChooseProducts`)}
			</h2>
		);
	return (
		<Container>
			<section className="d-flex justify-content-center align-items-center mt-3 p-3">
				<h2 className=" text-center m-0">
					{t(`totalWishedProducts`)}
					{wishlistItems.length}
				</h2>
				<Button variant="danger" className="fs-5 text-light mx-4" onClick={clearWishlist}>
					{t(`removeAllItems`)}
				</Button>
			</section>
			<div className="table-responsive-sm">
				<Table striped bordered hover variant={colorMode === `dark` ? `dark` : ``}>
					<thead>
						<tr className="align-middle text-center">
							<th scope="col">#</th>
							<th scope="col">{t(`productPhoto`)}</th>
							<th scope="col">{t(`productName`)}</th>
							<th scope="col">{t(`price`)}</th>
							<th scope="col">{t(`actions`)}</th>
						</tr>
					</thead>
					<tbody>
						{wishlistItems.map((fd, i) => (
							<tr className="align-middle text-center" key={i}>
								<th scope="row" className="align-middle">
									{i + 1}
								</th>
								<td>
									<img src={fd.imageURL} alt="error"></img>
								</td>
								<td>
									<h5 className="">{fd.name}</h5>
								</td>
								<td className="align-middle">
									<h5>${fd.price}</h5>
								</td>

								<td className="align-middle">
									<Stack className="d-flex flex-column justify-content-center align-items-center">
										<Button
											variant="danger"
											className="fs-5 my-1 text-light w-100"
											onClick={() => {
												removeFromWishlist(fd);
											}}>
											<BsTrashFill />
										</Button>
										<Button variant="secondary" className="fs-5 my-1 text-light text-nowrap w-100" onClick={() => moveToCart(fd)}>
											<FaCartPlus />
										</Button>
									</Stack>
								</td>
							</tr>
						))}
						<tr className="text-center">
							<td colSpan={5}>
								<Button variant="secondary" className="my-3 text-light text-nowrap " onClick={() => moveAllToCart(wishlistItems)}>
									{t(`moveAllToCart`)}
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
