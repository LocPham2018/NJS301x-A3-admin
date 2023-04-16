import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { useForm } from '../hooks/use-form';
import { UserContext } from '../context/user-context-provider';
import { useSubmitRequest } from '../hooks/use-fetch';
import AuthForm from '../components/auth/AuthForm';
import { ENDPOINTS } from '../others/request';

const Login = () => {
	const navigate = useNavigate();
	const user = useContext(UserContext);
	if (user) {
		navigate('/dashboard');
	}

	const { formState, inputHandler } = useForm({
		email: '',
		password: '',
	});
	const { isLoading, submitRequest } = useSubmitRequest();

	const loginHandler = evt => {
		evt.preventDefault();
		const options = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(formState),
		};

		const applyData = responseData => {
			if (responseData.err) {
				return alert(responseData.err);
			}
			if (!responseData.success) {
				return alert(responseData.message);
			}
			// sessionStorage.setItem('ADMIN', JSON.stringify(responseData.user));
			navigate('/dashboard');
		};
		submitRequest(ENDPOINTS.login, options, applyData);
	};

	return (
		<AuthForm
			isLoading={isLoading}
			formState={formState}
			onChange={inputHandler}
			onSubmit={loginHandler}
		/>
	);
};

export default Login;
