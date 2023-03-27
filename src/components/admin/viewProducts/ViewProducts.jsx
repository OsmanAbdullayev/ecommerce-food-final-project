import { collection, deleteDoc, doc, onSnapshot, orderBy, query } from "firebase/firestore";
import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { db, storage } from "../../../firebase/config";
import { CiEdit, CiTrash } from "react-icons/ci";
import styles from "./ViewProducts.module.scss";
import Loader from "../../loader/Loader";
import { deleteObject, ref } from "firebase/storage";
import Notiflix from "notiflix";
import { useDispatch } from "react-redux";
import { STORE_PRODUCTS } from "../../../redux/slice/productsSlice";

const ViewProducts = () => {
	const [products, setProducts] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	const dispatch = useDispatch();

	useEffect(() => {
		getProducts();
	}, []);

	const getProducts = () => {
		setIsLoading(true);

		try {
			const productsRef = collection(db, "products");
			const q = query(productsRef, orderBy("createdAt"));

			onSnapshot(q, (snapshot) => {
				// console.log(snapshot);
				const allProducts = snapshot.docs.map((doc) => ({
					id: doc.id,
					...doc.data(),
				}));
				console.log(allProducts);
				setProducts(allProducts);
				setIsLoading(false);
				dispatch(
					STORE_PRODUCTS({
						products: allProducts,
					})
				);
			});
		} catch (error) {
			setIsLoading(false);
			toast.error(error.mesage);
		}
	};
	const confirmDelete = (id, imageURL) => {
		Notiflix.Confirm.show(
			"Are you sure?",
			"You are about to delete this product!",
			"Delete",
			"Cancel",
			function okCb() {
				deleteProduct(id, imageURL);
			},
			function cancelCb() {},
			{
				width: "320px",
				borderRadius: "8px",
				titleColor: "orangered",
				okButtonBackground: "orangered",
				cssAnimationStyle: "zoom",
				// etc...
			}
		);
	};
	const deleteProduct = async (id, imageURL) => {
		try {
			await deleteDoc(doc(db, "products", id));
			const storageRef = ref(storage, imageURL);
			await deleteObject(storageRef);
			toast.success("Product deleted successfully!");
		} catch (error) {
			toast.error(error.message);
		}
	};

	return (
		<>
			{isLoading && <Loader />}
			<div className={styles.table}>
				<h2>All Products</h2>

				{products.length === 0 ? (
					<p>No product found</p>
				) : (
					<table>
						<thead>
							<tr>
								<th>&#35;</th>
								<th>Image</th>
								<th>Name</th>
								<th>Category</th>
								<th>Price</th>
								<th>Discount</th>
								<th>Actions</th>
							</tr>
						</thead>
						<tbody>
							{products.map((product, index) => {
								const { id, name, price, imageURL, category, discount } = product;
								return (
									<tr key={id}>
										<td>{index + 1}</td>
										<td>
											<img src={imageURL} alt={name} style={{ width: "100px" }} />
										</td>
										<td>{name}</td>
										<td>{category}</td>
										<td>{`$${price}`}</td>
										<td>{`${discount}%`}</td>
										<td>
											<Link to="/admin/add-product">
												<CiEdit size={20} color="green" />
											</Link>
											&nbsp;
											<CiTrash
												size={20}
												color="red"
												onClick={() => {
													confirmDelete(id, imageURL);
												}}
											/>
										</td>
									</tr>
								);
							})}
						</tbody>
					</table>
				)}
			</div>
		</>
	);
};

export default ViewProducts;
