import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import Chat from "../components/chat/Chat";
import Layout from "../layout/Layout";
import { UserContext } from '../context/user-context-provider';

const LiveChat = () => {
	const navigate = useNavigate();
	const user = useContext(UserContext);
	if (!user) {
		navigate('/');
	}

	return (
		<Layout>
			<Chat />
		</Layout>
	);
};

export default LiveChat;