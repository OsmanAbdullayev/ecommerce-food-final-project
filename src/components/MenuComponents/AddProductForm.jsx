import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { productAdded } from "../../redux/slice/productsSlice";

const AddProductForm = () => {
	// const dispatch = useDispatch();

	// const [title, setTitle] = useState("");
	// const [price, setPrice] = useState("");

	// const onTitleChanged = (e) => setTitle(e.target.value);
	// const onPriceChanged = (e) => setPrice(e.target.value);

	// const onSaveProductClicked = () => {
	// 	if (title && price) {
	// 		dispatch(productAdded(title, price));

	// 		console.log("this works");

	// 		setTitle("");
	// 		setPrice("");
	// 	}
	// };

	// return (
	// 	<section>
	// 		<h2>Add a New Product</h2>
	// 		<form>
	// 			<label htmlFor="productTitle">Product Title:</label>
	// 			<input type="text" id="productTitle" name="productTitle" value={title} onChange={onTitleChanged} />
	// 			<label htmlFor="productPrice">Product Price:</label>
	// 			<input type="number" name="productPrice" id="productPrice" value={price} onChange={onPriceChanged} />
	// 			<button type="button" onClick={onSaveProductClicked}>
	// 				Save Product
	// 			</button>
	// 		</form>
	// 	</section>
	// );
};

export default AddProductForm;
