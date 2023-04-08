import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { useHttp } from '../hooks/use-http';
import Products from '../components/products/Products';
import Layout from '../layout/Layout';
import { SERVER_URL } from '../others/request';
import { UserContext } from '../context/user-context-provider';

const ProductPage = () => {
	const navigate = useNavigate();
	const user = useContext(UserContext);
	if (!user) {
		navigate('/');
	}
	if (user.role !== 'Admin') {
		navigate('/dashboard');
	}

	const [products, setProducts] = useState([]);
	const { isLoading, sendRequest: getProducts } = useHttp();

	useEffect(() => {
		const requestInput = {
			url: `${SERVER_URL}/products/all`,
		};

		getProducts(requestInput, responseData => {
			console.log(responseData);
			if (responseData.success) {
				setProducts(responseData.results);
			}
		});
	}, [getProducts]);

	return (
		<Layout>
			<Products
				isLoading={isLoading}
				products={products}
			/>
		</Layout>
	);
};

export default ProductPage;
