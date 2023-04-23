import { deleteDoc, doc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { db, storage } from "../../../firebase/config";
import styles from "./ViewProducts.module.scss";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import Loader from "../../loader/Loader";
import { deleteObject, ref } from "firebase/storage";
import Notiflix from "notiflix";
import { useDispatch, useSelector } from "react-redux";
import { selectProducts, STORE_PRODUCTS } from "../../../redux/slice/productsSlice";
import useFetchCollection from "../../../customHooks/useFetchCollection";
import { FILTER, SET_CATEGORY, SET_PRICE, SET_SEARCH, SET_SORT, SET_SPICY, SET_VEGETARIAN, selectFilteredProducts, selectSearch } from "../../../redux/slice/filterSlice";
import Search from "../../search/Search";
import { Col, Row } from "react-bootstrap";
import PaginationComponent from "../../PaginationComponent";

const ViewProducts = () => {
	const dispatch = useDispatch();

	const { data, isLoading } = useFetchCollection("products");
	const search = useSelector(selectSearch);

	const products = useSelector(selectProducts);
	const filteredProducts = useSelector(selectFilteredProducts);

	const productsCount = filteredProducts.length;
	const [currentPage, setCurrentPage] = useState(1);
	const productsPerPage = 8;

	const lastProductNumber = currentPage * productsPerPage;
	const firstProductIndex = lastProductNumber - productsPerPage;
	const currentProducts = filteredProducts.slice(firstProductIndex, lastProductNumber);

	// Pagination states
	// const [currentPage, setCurrentPage] = useState(1);
	// const [productsPerPage, setProductsPerPage] = useState(10);
	// Get Current Products
	// const indexOfLastProduct = currentPage * productsPerPage;
	// const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
	// const currentProducts = filteredProducts.slice(
	//   indexOfFirstProduct,
	//   indexOfLastProduct
	// );

	useEffect(() => {
		dispatch(FILTER({ products }));
	}, [dispatch, products, search]);

	useEffect(() => {
		dispatch(SET_SORT("latest"));
		dispatch(SET_CATEGORY("All"));
		dispatch(SET_SEARCH(""));
		dispatch(SET_VEGETARIAN(false));
		dispatch(SET_SPICY(false));
		dispatch(SET_PRICE(10000));
	}, [dispatch]);

	useEffect(() => {
		dispatch(
			STORE_PRODUCTS({
				products: data,
			})
		);
	}, [dispatch, data]);

	const confirmDelete = (id, imageURL) => {
		Notiflix.Confirm.show(
			"Delete Product!!!",
			"You are about to delete this product",
			"Delete",
			"Cancel",
			function okCb() {
				deleteProduct(id, imageURL);
			},
			function cancelCb() {},
			{
				width: "320px",
				borderRadius: "3px",
				titleColor: "orangered",
				okButtonBackground: "orangered",
				cssAnimationStyle: "zoom",
			}
		);
	};

	const deleteProduct = async (id, imageURL) => {
		try {
			await deleteDoc(doc(db, "products", id));

			const storageRef = ref(storage, imageURL);
			await deleteObject(storageRef);
			toast.success("Product deleted successfully.");
		} catch (error) {
			toast.error(error.message);
		}
	};

	return (
		<>
			{isLoading && <Loader />}
			<div className={styles.table}>
				<h1 className="text-center w-100 my-3">All Products</h1>

				<Row className="g-2 my-2">
					<Col lg={6} sm={12}>
						<Search
							value={search}
							onChange={(e) => {
								dispatch(SET_SEARCH(e.target.value));
							}}
						/>
					</Col>
					<Col lg={6} sm={12} className="text-center">
						<p>
							<b>{filteredProducts.length}</b> products found
						</p>
					</Col>
				</Row>

				{currentProducts.length === 0 ? (
					<p>No product found.</p>
				) : (
					<table>
						<thead>
							<tr>
								<th>s/n</th>
								<th>Image</th>
								<th>Name</th>
								<th>Category</th>
								<th>Price</th>
								<th>Actions</th>
							</tr>
						</thead>
						<tbody>
							{currentProducts.map((product, index) => {
								const { id, name, price, imageURL, category } = product;
								return (
									<tr key={id}>
										<td>{index + 1}</td>
										<td>
											<img src={imageURL} alt={name} style={{ width: "100px" }} />
										</td>
										<td>{name}</td>
										<td>{category}</td>
										<td>{`$${price}`}</td>
										<td className={styles.icons}>
											<Link to={`/admin/add-product/${id}`}>
												<FaEdit size={20} color="green" />
											</Link>
											&nbsp;
											<FaTrashAlt size={18} color="red" onClick={() => confirmDelete(id, imageURL)} />
										</td>
									</tr>
								);
							})}
						</tbody>
					</table>
				)}
				<PaginationComponent itemsCount={productsCount} itemsPerPage={productsPerPage} currentPage={currentPage} setCurrentPage={setCurrentPage} alwaysShown={false} />

				{/* <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          productsPerPage={productsPerPage}
          totalProducts={filteredProducts.length}
        /> */}
			</div>
		</>
	);
};

export default ViewProducts;
