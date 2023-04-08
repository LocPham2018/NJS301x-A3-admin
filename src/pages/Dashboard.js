import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useHttp } from '../hooks/use-http';
import Transactions from '../components/dashboard/Transactions';
import Layout from '../layout/Layout';
import { SERVER_URL } from '../others/request';
import { UserContext } from '../context/user-context-provider';

const Dashboard = () => {
	const navigate = useNavigate();
	const user = useContext(UserContext);
	if (!user) {
		navigate('/');
	}

	const [orders, setOrders] = useState([]);
	const { isLoading, sendRequest: getOrders } = useHttp();

	useEffect(() => {
		const requestInput = {
			url: `${SERVER_URL}/admin/orders`,
		};

		getOrders(requestInput, responseData => {
			// console.log(responseData);
			if (responseData.success) {
				setOrders(responseData.orders);
			}
		});
	}, [getOrders]);

	return (
		<Layout>
			<Transactions isLoading={isLoading} orders={orders} />
		</Layout>
	);
};

export default Dashboard;
