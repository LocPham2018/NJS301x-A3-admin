import { createContext, useState } from 'react';

export const UserContext = createContext();

export const AuthContext = createContext();

const UserProvider = ({ children }) => {
	const [user, setUser] = useState(null);

	return (
		<UserContext.Provider value={user}>
			<AuthContext.Provider value={setUser}>
				{children}
			</AuthContext.Provider>
		</UserContext.Provider>
	);
};

export default UserProvider;
