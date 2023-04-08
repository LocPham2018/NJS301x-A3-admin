const OrderRow = ({ order, classes }) => {
	return (
		<tr>
			<td className={classes['col-id']}>{order.user._id}</td>
			<td className={classes['col-name']}>{order.user.fullName}</td>
			<td className={classes['col-price']}>{order.user.phoneNumber}</td>
			<td className={classes['col-address']}>{order.address}</td>
			<td className={classes['col-price']}>{order.total}</td>
			<td className={classes['col-delivery']}>Not delivered yet</td>
			<td className={classes['col-status']}>Not paid yet</td>
			<td className={classes['col-detail']}>
				<button className={classes['btn-view']}>View</button>
			</td>
		</tr>
	);
};

export default OrderRow;
