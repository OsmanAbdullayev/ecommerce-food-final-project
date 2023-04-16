import styles from "./ProductDetails.module.scss";
import { doc, getDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { toast } from "react-toastify";
import { db } from "../../../firebase/config";
import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";
import LeaveReview from "../../Reviews/LeaveReview/LeaveReview";
import Loader from "../../loader/Loader";
import useFetchCollection from "../../../customHooks/useFetchCollection";
import { Button, Card, Container } from "react-bootstrap";
import StarsRating from "react-star-rate";

const ProductDetails = () => {
	const { id } = useParams();
	const [product, setProduct] = useState(null);
	const { data } = useFetchCollection("reviews");

	const filteredReviews = data.filter((review) => review.productID === id);

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
					<Loader />
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
								<Button variant="primary" onClick={() => addItem(product)}>
									Add To Card
								</Button>
							</div>
						</div>
					</>
				)}
			</div>
			<LeaveReview id={id} product={product} />
			<Container className="my-3">
				<h3>Product Reviews</h3>
				{filteredReviews.length === 0 ? (
					<p>There are no reviews for this product yet. </p>
				) : (
					<>
						{filteredReviews.map((item, index) => {
							const { rate, review, reviewDate, userName } = item;
							return (
								<Card key={index} className="my-2">
									<Card.Header className="d-flex justify-content-between align-items-center"><b>{userName}</b> <StarsRating value={rate} /></Card.Header>
									<Card.Body>
										
										<Card.Text>{review}</Card.Text>
										<Card.Text><i>{reviewDate}</i></Card.Text>
											
										
									</Card.Body>
								</Card>
							);
						})}
					</>
				)}
			</Container>
		</section>
	);
};

export default ProductDetails;
