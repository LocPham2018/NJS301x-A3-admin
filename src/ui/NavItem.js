import { NavLink } from 'react-router-dom';

const NavItem = ({ path, label, classes }) => {
	return (
		<li>
			<NavLink
				to={path}
				className={({ isActive }) => isActive ? classes.active : undefined}
			>
				{label}
			</NavLink>
		</li>
	);
};

export default NavItem;
