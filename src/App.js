import { useContext, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import LiveChat from './pages/LiveChat';
import Login from './pages/Login';
import ProductPage from './pages/ProductPage';
import UserProvider, { AuthContext } from './context/user-context-provider';
import { SERVER_URL } from './others/request';
import { useHttp } from './hooks/use-http';

const App = () => {
	const setUser = useContext(AuthContext);
	const { sendRequest: getUserInfo } = useHttp();

	useEffect(() => {
		const requestInput = {
			url: `${SERVER_URL}/auth/session`,
		};

		getUserInfo(requestInput, responseData => {
			if (responseData.user) {
				setUser(responseData.user);
			}
		});
	}, [getUserInfo, setUser]);

	return (
		<UserProvider>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Login />} />
					<Route path="/dashboard" element={<Dashboard />} />
					<Route path="/chat" element={<LiveChat />} />
					<Route path="/products" element={<ProductPage />} />
				</Routes>
			</BrowserRouter>
		</UserProvider>
	);
};

export default App;
