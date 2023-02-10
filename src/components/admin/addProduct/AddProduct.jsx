import React from "react";
import { useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import styles from "./AddProduct.module.scss";
import { db, storage } from "../../../firebase/config";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { toast } from "react-toastify";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import { useNavigate } from "react-router";
import Loader from "../../loader/Loader";

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

const initialState = {
	name: "",
	imageURL: "",
	price: 0,
	category: "",
	brand: "",
	desc: "",
};

const AddProduct = () => {
	const [product, setproduct] = useState({
		...initialState,
	});

	const [uploadProgress, setUploadProgress] = useState(0);
	const [isLoading, setIsLoading] = useState(false);

	const navigate = useNavigate();

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setproduct({ ...product, [name]: value });
	};
	const handleImageChange = (e) => {
		const file = e.target.files[0];
		const storageRef = ref(storage, `eshop/${Date.now()}${file.name}`);
		const uploadTask = uploadBytesResumable(storageRef, file);

		uploadTask.on(
			"state_changed",
			(snapshot) => {
				const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
				setUploadProgress(progress);
			},
			(error) => {
				toast.error(error.message);
			},
			() => {
				getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
					setproduct({ ...product, imageURL: downloadURL });
					toast.success("Image uploaded successfully.");
				});
			}
		);
	};

	const addProduct = (e) => {
		e.preventDefault();
		setIsLoading(true);
		try {
			const docRef = addDoc(collection(db, "products"), {
				name: product.name,
				imageURL: product.imageURL,
				price: Number(product.price),
				category: product.category,
				desc: product.desc,
				createdAt: Timestamp.now().toDate(),
			});
			setIsLoading(false);
			setUploadProgress(0);
			setproduct({ ...initialState });

			toast.success("Product uploaded successfully");
			navigate("/admin/all-products");
		} catch (error) {
			setIsLoading(false);
			toast.error(error.message);
		}
	};

	return (
		<>
			{isLoading && <Loader />}
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
								{uploadProgress === 0 ? null : (
									<div className={styles.progress}>
										<div className={`${styles["progress-bar"]} w-${String(uploadProgress).substring(0, 2)} p-1 bg-primary text-white`}>{uploadProgress < 100 ? `Uploading ${uploadProgress}` : `Upload complete.`}</div>
									</div>
								)}

								<Form.Control type="file" placeholder="Product Image" accept="image/*" name="image" onChange={(e) => handleImageChange(e)} />
								{product.imageURL === "" ? null : (
									<Form.Control
										type="text"
										value={product.imageURL}
										placeholder="Image URL"
										// required
										name="ImageURL"
										disabled
									/>
								)}
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
		</>
	);
};

export default AddProduct;
