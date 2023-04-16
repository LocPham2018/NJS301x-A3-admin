import { useCallback, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { UserContext } from '../context/user-context-provider';
import { useGetRequest } from '../hooks/use-fetch';
import Transactions from '../components/dashboard/Transactions';
import Layout from '../layout/Layout';
import { ENDPOINTS } from '../others/request';

const Dashboard = () => {
	const navigate = useNavigate();
	const user = useContext(UserContext);
	if (!user) {
		navigate('/');
	}

	const [orders, setOrders] = useState([]);
	const { isLoading } = useGetRequest(
		ENDPOINTS.getOrders,
		useCallback(responseData => {
			if (responseData.success) {
				setOrders(responseData.orders);
			}
		}, [])
	);

	return (
		<Layout>
			<Transactions isLoading={isLoading} orders={orders} />
		</Layout>
	);
};

export default Dashboard;
