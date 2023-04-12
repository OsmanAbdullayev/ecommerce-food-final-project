import styles from "./ProductDetails.module.scss";
import { doc, getDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { toast } from "react-toastify";
import { db } from "../../../firebase/config";
import { Link } from "react-router-dom";
import spinnerImg from "../../../assets/loader.gif";
import { useCart } from "react-use-cart";

const ProductDetails = () => {
	const { id } = useParams();
	const [product, setProduct] = useState(null);

	useEffect(() => {
		getProduct();
	}, []);

	const getProduct = async () => {
		const docRef = doc(db, "products", id);
		const docSnap = await getDoc(docRef);

		if (docSnap.exists()) {
			// console.log("Document data:", docSnap.data());
			const obj = {
				...docSnap.data(),
				id,
			};
			setProduct(obj);
		} else {
			// docSnap.data() will be undefined in this case
			// console.log("No such document!");
			toast.error("Product not found.");
		}
	};

	const { addItem } = useCart();

	return (
		<section>
			<div className={`container ${styles.product}`}>
				<h2>Product Details</h2>
				<div>
					<Link to="/#products">&larr; Back To Products</Link>
				</div>
				{product === null ? (
					<img src={spinnerImg} alt="Loading..." />
				) : (
					<>
						<div className={styles.details}>
							<div className={styles.img}>
								<img src={product.imageURL} alt={product.name} />
							</div>
							<div className={styles.content}>
								<h3>{product.name}</h3>
								<p className={styles.price}>{`$${product.price}`}</p>
								<p>{product.description}</p>

								<p>
									<b>SKU: </b> {id}
								</p>
								<p>
									<b>CATEGORY: </b> {product.category}
								</p>
								{/* <div className={styles.count}>
									<button className="--btn">-</button>
									<p>1</p>
									<button className="--btn">+</button>
								</div> */}
								<button className={`--btn --btn-danger`} onClick={() => addItem(product)}>
									Add To Card
								</button>
							</div>
						</div>
					</>
				)}
			</div>
		</section>
	);
};

export default ProductDetails;
