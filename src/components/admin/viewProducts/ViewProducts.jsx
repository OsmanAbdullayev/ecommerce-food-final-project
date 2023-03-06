import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import React, { useState } from "react";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { db } from "../../../firebase/config";

const ViewProducts = () => {
	const [products, setProducts] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		getProducts();
	}, []);

	const getProducts = () => {
		setIsLoading(true);

		try {
			const productsRef = collection(db, "products");
			const q = query(productsRef, orderBy("createdAt"));

			onSnapshot(q, (snapshot) => {
				console.log(snapshot);
			});
		} catch (error) {
			setIsLoading(false);
			toast.error(error.mesage);
		}
	};

	return <div>ViewProducts</div>;
};

export default ViewProducts;
