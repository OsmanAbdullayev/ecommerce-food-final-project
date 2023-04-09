import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "./ProductItem.module.scss";

const ProductItem = ({ product, grid, id, name, price, description, vegetarian, spicy, imageURL, discount }) => {
	const shortenText = (text, n) => {
		if (text.length > n) {
			const shortenedText = text.substring(0, n).concat("...");
			return shortenedText;
		}
		return text;
	};

	return (
		<Card cardclass={grid ? `${styles.grid}` : ` ${styles.list}`}>
			<Link to={`/product-details/${id}`}>
				<div className={styles.img}></div>
				<img src={imageURL} alt={name} />
			</Link>
			<div className={styles.content}>
				<div className={styles.details}>
					<p>{`$${price}`}</p>
					<h4>{shortenText(name, 18)}</h4>
				</div>
        {!grid && <p className={styles.desc}>{shortenText(description, 200)}</p>}
        <Button >Add to Card</Button>
			</div>
		</Card>
	);
  
};

export default ProductItem;
