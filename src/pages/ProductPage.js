import { useState, useContext, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { UserContext } from '../context/user-context-provider';
import { useGetRequest } from '../hooks/use-fetch';
import Products from '../components/products/Products';
import Layout from '../layout/Layout';
import { ENDPOINTS } from '../others/request';

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
	const applyData = useCallback(responseData => {
		if (responseData.success) {
			setProducts(responseData.results);
		}
	}, []);
	const { isLoading } = useGetRequest(ENDPOINTS.getProducts, applyData);

	return (
		<Layout>
			<Products isLoading={isLoading} products={products} />
		</Layout>
	);
};

export default ProductPage;
