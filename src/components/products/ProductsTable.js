import TableHead from '../../ui/TableHead';
import ProductRow from './ProductRow';
import classes from './ProductsTable.module.css';

// Dummy data
const HEADERS = [
	{
		label: 'ID',
		className: 'col-id',
	},
	{
		label: 'Name',
		className: 'col-name',
	},
	{
		label: 'Price',
		className: 'col-price',
	},
	{
		label: 'Image',
		className: 'col-img',
	},
	{
		label: 'Category',
		className: 'col-category',
	},
	{
		label: 'Edit',
		className: 'col-edit',
	},
];

const ProductsTable = ({ isLoading, products }) => {
	let tableContents = <p>No products</p>;
	if (isLoading) {
		tableContents = <p>Loading...</p>;
	} else if (products.length > 0) {
		tableContents = (
			<table className={classes['products-table']}>
				<TableHead classes={classes} headers={HEADERS} />
				<tbody>
					{products.map(product => (
						<ProductRow
							key={product._id}
							product={product}
							classes={classes}
						/>
					))}
				</tbody>
			</table>
		);
	}
	return tableContents;
};

export default ProductsTable;
