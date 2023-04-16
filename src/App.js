import { useCallback, useContext } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import UserProvider, { AuthContext } from './context/user-context-provider';
import { useGetRequest } from './hooks/use-fetch';
import Dashboard from './pages/Dashboard';
import LiveChat from './pages/LiveChat';
import Login from './pages/Login';
import ProductPage from './pages/ProductPage';
import { ENDPOINTS } from './others/request';

const App = () => {
	const setUser = useContext(AuthContext);
	const applyData = useCallback(
		responseData => {
			if (responseData.user) {
				setUser(responseData.user);
			}
		},
		[setUser]
	);
	useGetRequest(ENDPOINTS.session, applyData);

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
