import TableHead from '../../ui/TableHead';
import OrderRow from './OrderRow';
import classes from './OrderTable.module.css';

// Dummy data
const HEADERS = [
	{
		label: 'User ID',
		className: 'col-id',
	},
	{
		label: 'Name',
		className: 'col-name',
	},
	{
		label: 'Phone',
		className: 'col-phone',
	},
	{
		label: 'Address',
		className: 'col-address',
	},
	{
		label: 'Total',
		className: 'col-price',
	},
	{
		label: 'Delivery',
		className: 'col-delivery',
	},
	{
		label: 'Status',
		className: 'col-status',
	},
	{
		label: 'Detail',
		className: 'col-detail',
	},
];

const OrderTable = ({ isLoading, orders }) => {
	let tableContents = <p>No orders</p>;
	if (isLoading) {
		tableContents = <p>Loading...</p>;
	} else if (orders.length > 0) {
		tableContents = (
			<table className={classes['order-table']}>
				<TableHead classes={classes} headers={HEADERS} />
				<tbody>
					{orders.map(order => (
						<OrderRow
							key={order._id}
							order={order}
							classes={classes}
						/>
					))}
				</tbody>
			</table>
		);
	}
	return tableContents;
};

export default OrderTable;
