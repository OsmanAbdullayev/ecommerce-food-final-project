import { doc, getDoc } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { toast } from "react-toastify";
import { db } from "../../../firebase/config";
import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";
import LeaveReview from "../../Reviews/LeaveReview/LeaveReview";
import Loader from "../../loader/Loader";
import useFetchCollection from "../../../customHooks/useFetchCollection";
import { Button, Card, Col, Container, Row, Spinner } from "react-bootstrap";
import StarsRating from "react-star-rate";
import { TOGGLE_WISHLIST, selectWishlistItems } from "../../../redux/slice/wishlistSlice";
import { useDispatch, useSelector } from "react-redux";
import { FaHeartBroken } from "react-icons/fa";
import { BsFillCartDashFill, BsFillHeartFill, BsHeart } from "react-icons/bs";
import { ColorModeContext } from "../../../routers/AppRouter";
import { useTranslation } from "react-i18next";

const ProductDetails = () => {
	const { t } = useTranslation();

	const { id } = useParams();
	const { addItem, removeItem, items } = useCart();
	const { colorMode } = useContext(ColorModeContext);
	const [loaded, setLoaded] = useState(false);

	const dispatch = useDispatch();
	const [product, setProduct] = useState(null);
	const { data } = useFetchCollection("reviews");

	const wishlistItems = useSelector(selectWishlistItems);

	const filteredReviews = data.filter((review) => review.productID === id);

	const addToWishlist = (wishlist) => {
		dispatch(TOGGLE_WISHLIST(wishlist));
	};

	const checkWishlist = (product) => {
		return wishlistItems.some((item) => item.id === product.id);
	};

	const checkCart = (product) => {
		return items.some((item) => item.id === product.id);
	};

	useEffect(() => {
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
		getProduct();
	}, [id]);

	return (
		<section>
			<Container>
				<div className="d-flex justify-content-between align-items-center my-3">
					<h1 className="my-2">{t(`productDetails`)}</h1>
					<div>
						<Link to="/menu">&larr; {t(`backToMenu`)}</Link>
					</div>
				</div>
				{product === null ? (
					<Loader />
				) : (
					<>
						<Card className={colorMode === `dark` ? `p-3 h-100 shadow bg-dark overflow-hidden border-0` : `p-3 h-100 shadow overflow-hiddenborder-0`}>
							<Row className="g-3 m-0 p-0">
								<Col md={6} sm={12} lg={4} className="overflow-hidden">
									{loaded ? null : (
										<div className="spinnerBootstrapContainer d-flex justify-content-center align-items-center position-relative">
											<div className="position-absolute spinnerBootstrapDiv">
												<Spinner as={Card.Img} animation="border" variant="primary" />
											</div>
										</div>
									)}
									<Card.Img
										style={loaded ? {} : { display: "none" }}
										onLoad={() => {
											setLoaded(true);
										}}
										variant="top"
										className="object-fit-fit w-100"
										src={product.imageURL}
										alt={product.image}
									/>
								</Col>

								<Col md={6} sm={12} lg={8} className="d-flex flex-column justify-content-center align-items-start">
									<Card.Body className="d-flex flex-column justify-content-between align-items-start w-100 p-1 ps-3 pe-3">
										<Row className="w-100">
											<Card.Title>
												<h1>{product.name}</h1>
											</Card.Title>
											<Card.Subtitle>
												<h3 className="text-primary">
													<b>{`$${product.price}`}</b>
												</h3>
											</Card.Subtitle>
											<Card.Text className="w-100">{product.description}</Card.Text>
										</Row>
										<div className="d-flex justify-content-between align-items-center w-100">
											{checkCart(product) ? (
												<Button variant="primary" onClick={() => removeItem(id)} className="text-white mt-3 text-nowrap">
													<BsFillCartDashFill size="1.3em" />
												</Button>
											) : (
												<Button variant="primary" onClick={() => addItem(product)} className="text-white mt-3 text-nowrap">
													{t(`addToCart`)}
												</Button>
											)}

											{checkWishlist(product) ? (
												<Button variant="primary" onClick={() => addToWishlist(product)} className="text-white mt-3 text-nowrap">
													<BsFillHeartFill />
												</Button>
											) : (
												<Button variant="primary" onClick={() => addToWishlist(product)} className="text-white mt-3 text-nowrap">
													<BsHeart />
												</Button>
											)}
										</div>
									</Card.Body>
								</Col>
							</Row>
						</Card>
					</>
				)}
			</Container>
			<LeaveReview id={id} product={product} />
			<Container className="my-3">
				<h3>{t(`productReviews`)}</h3>
				{filteredReviews.length === 0 ? (
					<p>There are no reviews for this product yet. </p>
				) : (
					<>
						{filteredReviews.map((item, index) => {
							const { rate, review, reviewDate, userName } = item;
							return (
								<Card key={index} className={colorMode === `dark` ? `bg-dark my-2 ` : `my-2`}>
									<Card.Header className="d-flex justify-content-between align-items-center">
										<b>{userName}</b> <StarsRating value={rate} />
									</Card.Header>
									<Card.Body>
										<Card.Text>{review}</Card.Text>
										<Card.Text>
											<i>{reviewDate}</i>
										</Card.Text>
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
