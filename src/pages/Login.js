import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import AuthForm from '../components/auth/AuthForm';
import { useHttp } from '../hooks/use-http';
import { useForm } from '../hooks/use-form';
import { SERVER_URL } from '../others/request';
import { UserContext } from '../context/user-context-provider';

const Login = () => {
	const navigate = useNavigate();
	const user = useContext(UserContext);
	if (user) {
		navigate('/dashboard');
	}

	const { sendRequest: loginRequest } = useHttp();
	const { formState, inputHandler } = useForm({
		email: '',
		password: '',
	});

	const loginHandler = evt => {
		evt.preventDefault();
		const requestInput = {
			url: `${SERVER_URL}/auth/login?admin=true`,
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(formState),
		};

		loginRequest(requestInput, responseData => {
			if (responseData.err) {
				return alert(responseData.err);
			}
			if (!responseData.success) {
				return alert(responseData.message);
			}
			// sessionStorage.setItem('ADMIN', JSON.stringify(responseData.user));
			navigate('/dashboard');
		});
	};

	return (
		<AuthForm
			formState={formState}
			onChange={inputHandler}
			onSubmit={loginHandler}
		/>
	);
};

export default Login;
