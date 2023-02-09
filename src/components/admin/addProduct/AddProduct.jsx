import React from "react";
import { useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import styles from "./AddProduct.module.scss";

const categories = [
	{
		id: 1,
		name: "Burger",
	},
	{
		id: 2,
		name: "Pizza",
	},
	{
		id: 3,
		name: "Side & Salads",
	},
	{
		id: 4,
		name: "Desserts",
	},
	{
		id: 5,
		name: "Drinks",
	},
];

const AddProduct = () => {
	const [product, setproduct] = useState({
		name: "",
		imageURL: "",
		price: null,
		category: "",
		brand: "",
		desc: "",
	});

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setproduct({ ...product, [name]: value });
	};
	const handleImageChange = (e) => {};

	const addProduct = (e) => {
		e.preventDefault();
		console.log(product);
	};

	return (
		<div className={styles.product}>
			<h1>Add New Product</h1>
			<Card className={styles.card}>
				<Form onSubmit={addProduct}>
					<Form.Group className="mb-3 px-3">
						<Form.Label>Product Name:</Form.Label>
						<Form.Control type="text" placeholder="Product Name" required name="name" value={product.name} onChange={(e) => handleInputChange(e)} />
					</Form.Group>

					<Form.Group className="mb-3 px-3">
						<Form.Label>Product Image:</Form.Label>
						<Card className={styles.group}>
							<div className={styles.progress}>
								<div className={`${styles["progress-bar"]} w-50 p-1 bg-primary text-white`}>Uploading 50%</div>
							</div>
							<Form.Control type="file" placeholder="Product Image" accept="image/*" name="image" onChange={(e) => handleImageChange(e)} />
							<Form.Control
								type="text"
								value={product.imageURL}
								placeholder="Image URL"
								// required
								name="ImageURL"
								disabled
							/>
						</Card>
					</Form.Group>

					<Form.Group className="mb-3 px-3">
						<Form.Label>Product Price:</Form.Label>
						<Form.Control type="number" placeholder="Product Price" required name="price" value={product.price} onChange={(e) => handleInputChange(e)} />
					</Form.Group>

					<Form.Group className="mb-3 px-3">
						<Form.Label>Product Category:</Form.Label>
						<Form.Select required name="category" value={product.category} onChange={(e) => handleInputChange(e)}>
							<option value="" disabled>
								-- choose product category --
							</option>
							{categories.map((cat) => {
								return (
									<option key={cat.id} value={cat.name}>
										{cat.name}
									</option>
								);
							})}
						</Form.Select>
					</Form.Group>
					<Button type="submit">Save Product</Button>
				</Form>
			</Card>
		</div>
	);
};

export default AddProduct;
