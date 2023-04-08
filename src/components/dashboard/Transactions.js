import OrderTable from './OrderTable';
import classes from './Transactions.module.css';

const Transactions = ({ isLoading, orders }) => {
	return (
		<div className={classes.transactions}>
			<h2>History</h2>
			<OrderTable isLoading={isLoading} orders={orders} />
		</div>
	);
};

export default Transactions;
