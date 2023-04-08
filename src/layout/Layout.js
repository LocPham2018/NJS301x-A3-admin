import { useContext, useEffect } from 'react';

import { AuthContext } from '../context/user-context-provider';
import classes from './Layout.module.css';
import Navbar from './Navbar';
import { useHttp } from '../hooks/use-http';
import { SERVER_URL } from '../others/request';

const Layout = props => {
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
		<>
			<Navbar />
			<section className={classes.main}>{props.children}</section>
		</>
	);
};

export default Layout;