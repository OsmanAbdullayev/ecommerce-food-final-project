import React, { useContext, useEffect } from "react";
import { useCart } from "react-use-cart";
import { NavLink, useNavigate } from "react-router-dom";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button, Container, Stack, Table } from "react-bootstrap";
import { BsTrashFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/slice/authSlice";
import { SAVE_URL } from "../../redux/slice/cartSlice";
import { ColorModeContext } from "../../routers/AppRouter";
import { useTranslation } from "react-i18next";

const Cart = () => {
	const { t } = useTranslation();
	const { colorMode } = useContext(ColorModeContext);
	const { isEmpty, totalUniqueItems, items, updateItemQuantity, removeItem, emptyCart, totalItems, cartTotal } = useCart();
	const removed = () => toast("Item removed successfully!");

	const navigate = useNavigate();
	const dispatch = useDispatch();

	const isLoggedIn = useSelector(selectIsLoggedIn);
	const url = window.location.href;

	useEffect(() => {
		dispatch(SAVE_URL(""));
	});

	const checkout = () => {
		toast(t(`checkingOut`));
		if (isLoggedIn) {
			navigate("/checkout-details");
		} else {
			dispatch(SAVE_URL(url));
			navigate("/login");
		}
	};

	const removeAllItems = () => {
		confirmAlert({
			title: t(`areYouSureQ`),
			message: t(`allItemsWillBeRemoved`),
			buttons: [
				{
					label: t(`yes`),
					onClick: () => {
						emptyCart();
					},
				},
				{
					label: t(`no`),
				},
			],
		});
	};

	if (isEmpty)
		return (
			<h2 className=" text-center p-5 mt-3">
				{" "}
				{t(`yourCartIsEmpty`)}{" "}
				<NavLink to="/menu" className="text-secondary">
					{t(`menu`)}
				</NavLink>{" "}
				{t(`toChooseProducts`)}
			</h2>
		);
	return (
		<Container>
			<section className="d-flex justify-content-center align-items-center mt-3 p-3">
				<h2 className=" text-center m-0">{t(`totalUniqueProducts`)} {totalUniqueItems}</h2>
				<Button variant="danger" className="fs-5 text-light mx-4" onClick={removeAllItems}>
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
							<th scope="col">{t(`quantity`)}</th>
							<th scope="col">{t(`actions`)}</th>
						</tr>
					</thead>
					<tbody>
						{items.map((fd, i) => (
							<tr className="align-middle text-center" key={fd.id}>
								<th scope="row" className="align-middle">
									{i + 1}
								</th>
								<td>
									<img src={fd.imageURL} alt="error"></img>
								</td>
								<td>
									<h5 className="text-primary">{fd.name}</h5>
								</td>
								<td className="align-middle">
									<h5>${fd.price * fd.quantity}</h5>
								</td>
								<td className="align-middle">
									<h5>x{fd.quantity}</h5>
								</td>
								<td className="d-flex justify-content-around align-items-center flex-column">
									<Stack className="d-flex flex-column justify-content-center align-items-center">
										<Button variant="warning" className="fs-5 my-1 text-light text-nowrap w-100" onClick={() => updateItemQuantity(fd.id, fd.quantity - 1)}>
											-
										</Button>
										<Button variant="warning" className="fs-5 my-1 text-light text-nowrap w-100" onClick={() => updateItemQuantity(fd.id, fd.quantity + 1)}>
											+
										</Button>
										<Button
											variant="danger"
											className="fs-5 my-1 text-light text-nowrap w-100"
											onClick={() => {
												removed();
												removeItem(fd.id);
											}}>
											<BsTrashFill />
										</Button>
									</Stack>
									<ToastContainer position="bottom-center" autoClose={1000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="colored" />
								</td>
							</tr>
						))}
						<tr className="align-middle text-center">
							<th>{t(`total`)}</th>
							<td></td>
							<td></td>
							<td>
								<h3 className="text-danger">${cartTotal} </h3>
							</td>
							<td>
								<h3 className="text-danger">x{totalItems} </h3>
							</td>
							<td className="d-flex justify-content-around align-items-center flex-column"></td>
						</tr>
					</tbody>
				</Table>
				<div className="text-center">
					<Button variant="secondary" className="my-3 text-light text-nowrap" onClick={checkout}>
						{t(`checkout`)}
					</Button>
					<ToastContainer position="bottom-center" autoClose={1000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="colored" />
				</div>
			</div>
		</Container>
	);
};

export default Cart;
