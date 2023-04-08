import { useState } from 'react';

import ProductsTable from './ProductsTable';
import classes from './Products.module.css';

const Products = ({ isLoading, products }) => {
	const [query, setQuery] = useState('');

	const filterProducts = products.filter(product =>
		product.name.includes(query)
	);

	return (
		<div className={classes.products}>
			<h2>Products</h2>
			<input
				type="text"
				value={query}
				onChange={evt => setQuery(evt.target.value)}
			/>
			<ProductsTable isLoading={isLoading} products={filterProducts} />
		</div>
	);
};

export default Products;
