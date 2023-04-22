import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectProducts } from "../../../redux/slice/productsSlice";
import { useParams } from "react-router";
import { selectUserID, selectUserName } from "../../../redux/slice/authSlice";
import { Col, Row, Form, Container, Card, Button } from "react-bootstrap";
import StarsRating from "react-star-rate";
import { db } from "../../../firebase/config";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import { toast } from "react-toastify";

const LeaveReview = (product, id) => {
	const [rate, setRate] = useState(0);
	const [review, setReview] = useState("");

	const userName = useSelector(selectUserName);


	const submitReview = (e) => {
		e.preventDefault();

		const today = new Date();
		const date = today.toDateString();
		const reviewConfig = {
			userName,
			productID: product.id,
			rate,
			review,
			reviewDate: date,
			createdAt: Timestamp.now().toDate(),
		};
		try {
			addDoc(collection(db, "reviews"), reviewConfig);
			toast.success("Review submitted successfully");
			setRate(0);
			setReview("");
		} catch (error) {
			toast.error(error.message);
		}
	};

	if (product.product) {
		return (
			<Container className="my-3">
				<Row>
					<Col lg={12}>
						<Card>
							<Card.Header>
								<b>Rate This Product</b>
							</Card.Header>

							<Card.Body>
								<Form onSubmit={(e) => submitReview(e)}>
									<Form.Group>
										<Form.Label className="me-3">Rating: </Form.Label>

										<StarsRating
											value={rate}
											onChange={(rate) => {
												setRate(rate);
											}}
										/>

										<Form.Group>
											<Form.Label>Review:</Form.Label>
											<Form.Control as="textarea" rows={4} type="text" value={review} required onChange={(e) => setReview(e.target.value)} />
										</Form.Group>
									</Form.Group>
									<Button type="submit" variant="primary" className="mt-3">
										Submit Review
									</Button>
								</Form>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</Container>
		);
	}
};

export default LeaveReview;
