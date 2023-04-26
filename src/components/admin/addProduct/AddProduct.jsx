import React from "react";
import { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { db, storage } from "../../../firebase/config";
import { deleteObject, getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { toast } from "react-toastify";
import { addDoc, collection, doc, setDoc, Timestamp } from "firebase/firestore";
import { useNavigate, useParams } from "react-router";
import Loader from "../../loader/Loader";
import { useSelector } from "react-redux";
import { selectProducts } from "../../../redux/slice/productsSlice";
import { useTranslation } from "react-i18next";

const AddProduct = () => {
	const { t } = useTranslation();

	const categories = [
		{
			id: 1,
			name: t(`burgers`),
		},
		{
			id: 2,
			name: t(`pizza`),
		},
		{
			id: 3,
			name: t(`sidesandsalads`),
		},
		{
			id: 4,
			name: t(`desserts`),
		},
		{
			id: 5,
			name: t(`drinks`),
		},
	];

	const initialState = {
		name: "",
		imageURL: "",
		category: "",
		description: "",
		price: 0,
		quantity: 0,
		discount: 0,
		vegetarian: false,
		spicy: false,
	};

	const { id } = useParams();

	const products = useSelector(selectProducts);
	const productEdit = products.find((item) => item.id === id);

	const [product, setproduct] = useState(() => {
		const newState = detectForm(id, { ...initialState }, productEdit);
		return newState;
	});

	const [uploadProgress, setUploadProgress] = useState(0);
	const [isLoading, setIsLoading] = useState(false);

	const navigate = useNavigate();

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setproduct({ ...product, [name]: value });
	};

	const handleVegetarianChange = (e) => {
		const { name } = e.target;
		setproduct({ ...product, [name]: !product.vegetarian });

		console.log(product.vegetarian);
	};
	const handleSpicyChange = (e) => {
		const { name } = e.target;
		setproduct({ ...product, [name]: !product.spicy });
		console.log(product.spicy);
	};

	let progress = "w-25";
	if (Math.floor(uploadProgress) <= 25) {
		progress = "w-25";
	} else if (Math.floor(uploadProgress) <= 50 && Math.floor(uploadProgress) > 25) {
		progress = "w-25";
	} else if (Math.floor(uploadProgress) <= 75 && Math.floor(uploadProgress) > 50) {
		progress = "w-50";
	} else if (Math.floor(uploadProgress) <= 99 && Math.floor(uploadProgress) > 75) {
		progress = "w-75";
	} else if (Math.floor(uploadProgress) > 99) {
		progress = "w-100";
	} else {
		progress = "w-25";
	}

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
			// eslint-disable-next-line no-unused-vars
			const docRef = addDoc(collection(db, "products"), {
				name: product.name,
				imageURL: product.imageURL,
				category: product.category,
				description: product.description,
				price: Number(product.price),
				discount: Number(product.discount),
				vegetarian: Boolean(product.vegetarian),
				spicy: Boolean(product.spicy),
				createdAt: JSON.stringify(Timestamp.now().toDate()),
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

	const editProduct = (e) => {
		e.preventDefault();
		setIsLoading(true);

		if (product.imageURL !== productEdit.imageURL) {
			const storageRef = ref(storage, productEdit.imageURL);
			deleteObject(storageRef);
		}

		try {
			setDoc(doc(db, "products", id), {
				name: product.name,
				imageURL: product.imageURL,
				category: product.category,
				description: product.description,
				price: Number(product.price),
				discount: Number(product.discount),
				vegetarian: Boolean(product.vegetarian),
				spicy: Boolean(product.spicy),
				createdAt: productEdit.createdAt,
				editedAt: JSON.stringify(Timestamp.now().toDate()),
			});

			setIsLoading(false);
			toast.success("Product Edited Sucessfully!");
			navigate("/admin/all-products");
		} catch (error) {
			setIsLoading(false);
			toast.error(error.message);
		}
	};

	function detectForm(id, f1, f2) {
		if (id === "ADD") {
			return f1;
		} else {
			return f2;
		}
	}

	return (
		<>
			{isLoading && <Loader />}
			<section>
				<h1 className="text-center my-3">{detectForm(id, t(`addNewProduct`), t(`editProduct`))}</h1>

				<Form onSubmit={detectForm(id, addProduct, editProduct)} className="p-3">
					{/* name */}
					<Row className="g-3">
						<Col lg={6} sm={12} className="">
							<div>
								{" "}
								{/* category */}
								<Form.Group className="mb-3 ">
									<Form.Label>{t(`productCategory`)}</Form.Label>
									<Form.Select required name="category" value={product.category} onChange={(e) => handleInputChange(e)}>
										<option value="" disabled>
											-- {t(`chooseProductCategory`)} --
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
								{/* Product Name */}
								<Form.Group className="mb-3 ">
									<Form.Label> {t(`productName`)} </Form.Label>
									<Form.Control type="text" placeholder={t(`enterProductName`)} required name="name" value={product.name} onChange={(e) => handleInputChange(e)} />
								</Form.Group>
								{/* description */}
								<Form.Group className="mb-3 ">
									<Form.Label> {t(`productDescription`)} </Form.Label>
									<Form.Control type="text" as="textarea" rows={5} placeholder={t(`describeYourProduct`)} required name="description" value={product.description} onChange={(e) => handleInputChange(e)} />
								</Form.Group>
								<Row>
									{/* vegetarian */}
									<Col>
										<Form.Group className="mb-3 ">
											<Form.Check checked={product.vegetarian} label={t(`vegetarian`)} type="switch" name="vegetarian" onChange={(e) => handleVegetarianChange(e)} />
										</Form.Group>
									</Col>
									{/* spicy */}
									<Col>
										<Form.Group className="mb-3 ">
											<Form.Check checked={product.spicy} label={t(`spicy`)} type="switch" name="spicy" onChange={(e) => handleSpicyChange(e)} />
										</Form.Group>
									</Col>
								</Row>
							</div>
						</Col>
						<Col lg={6} sm={12} className="">
							{/* price  */}

							<div>
								<Form.Group className="mb-3 ">
									<Form.Label> {t(`productPrice`)} </Form.Label>
									<Form.Control type="number" placeholder={t(`productPrice`)}required name="price" value={product.price} onChange={(e) => handleInputChange(e)} />
								</Form.Group>

								{/* discount */}
								<Form.Group className="mb-3">
									<Form.Label>
										{t(`discount`)} {product.discount}%
									</Form.Label>
									<Form.Range className="my-2" min="0" max="100" step="1" placeholder={t(`productDiscount`)} required name="discount" value={product.discount} onChange={(e) => handleInputChange(e)} />
								</Form.Group>

								{/* image */}
								<Form.Group className="mb-3 ">
									<Form.Label> {t(`productImage`)} </Form.Label>

									{uploadProgress === 0 ? null : (
										<div className="my-2">
											<div className={` ${progress} p-1 bg-primary text-white`}>{uploadProgress < 100 ? `Uploading ${Math.floor(uploadProgress)}` : `Upload complete.`}</div>
										</div>
									)}

									<Form.Control type="file" placeholder={t(`productImage`)} accept="image/*" name="image" onChange={(e) => handleImageChange(e)} />
									{product.imageURL === "" ? null : (
										<Form.Control
											className="my-2"
											type="text"
											value={product.imageURL}
											placeholder="Image URL"
											// required
											name="ImageURL"
											disabled
										/>
									)}
								</Form.Group>
							</div>
						</Col>

						<div className="text-center">
							<Button type="submit" className="text-nowrap">
								{detectForm(id, t(`saveProduct`), t(`saveChanges`))}
							</Button>
						</div>
					</Row>
				</Form>
			</section>
		</>
	);
};

export default AddProduct;
