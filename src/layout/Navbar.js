import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { AuthContext, UserContext } from '../context/user-context-provider';
import { useSubmitRequest } from '../hooks/use-fetch';
import NavItem from '../ui/NavItem';
import classes from './Navbar.module.css';
import { ENDPOINTS } from '../others/request';

const Navbar = () => {
	const navigate = useNavigate();
	const user = useContext(UserContext);
	const setUser = useContext(AuthContext);
	const {submitRequest} = useSubmitRequest();

	const logoutHandler = () => {
		const options = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			credentials: 'include',
		};

		const applyData = responseData => {
			if (responseData.err) {
				console.log(responseData.err);
			}
			setUser(null);
			navigate('/');
		};

		submitRequest(ENDPOINTS.logout, options, applyData);
	};

	return (
		<section className={classes.nav}>
			<h2>Admin Page</h2>
			<div className={classes['nav-list']}>
				<p>Main</p>
				<ul>
					<NavItem
						classes={classes}
						path="/dashboard"
						label="Dashboard"
					/>
					<NavItem classes={classes} path="/chat" label="Live chat" />
					{user && user.role === 'Admin' && (
						<NavItem
							classes={classes}
							path="/products"
							label="Products"
						/>
					)}
				</ul>
				<p>User</p>
				<ul>
					<li>
						<a href onClick={logoutHandler}>
							Logout
						</a>
					</li>
				</ul>
			</div>
		</section>
	);
};

export default Navbar;
