const ProductRow = ({ product, classes }) => {
	return (
		<tr>
			<td className={classes['col-id']}>{product._id}</td>
			<td className={classes['col-name']}>{product.name}</td>
			<td className={classes['col-price']}>{product.price}</td>
			<td className={classes['col-img']}>
				<img src={product.img1} alt={product.name} />
			</td>
			<td className={classes['col-category']}>{product.category}</td>
			<td className={classes['col-actions']}>
				<button className={classes['btn-edit']}>
					Edit
				</button>
				<button className={classes['btn-delete']}>
					Delete
				</button>
			</td>
		</tr>
	);
};

export default ProductRow;
