import { useCallback, useContext } from 'react';

import { AuthContext } from '../context/user-context-provider';
import { useGetRequest } from '../hooks/use-fetch';
import classes from './Layout.module.css';
import Navbar from './Navbar';
import { ENDPOINTS } from '../others/request';

const Layout = ({ children }) => {
	const setUser = useContext(AuthContext);
	useGetRequest(ENDPOINTS.session, useCallback(responseData => {
		if (responseData.user) {
			setUser(responseData.user);
		}
	}, [setUser]));

	return (
		<>
			<Navbar />
			<section className={classes.main}>{children}</section>
		</>
	);
};

export default Layout;
