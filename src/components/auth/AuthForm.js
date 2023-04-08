import Input from '../../ui/Input';
import classes from './AuthForm.module.css';

const AuthForm = ({ formState, onChange, onSubmit }) => {
	return (
		<div className={classes.auth}>
			<h2>Login</h2>
			<form onSubmit={onSubmit}>
				<Input
					id="email"
					control="input"
					type="text"
					label="Email"
					required={true}
					value={formState.email}
					onInput={onChange}
				/>
				<Input
					id="password"
					control="input"
					type="password"
					label="Password"
					required={true}
					value={formState.password}
					onInput={onChange}
				/>
				<button>Login</button>
			</form>
		</div>
	);
};

export default AuthForm;
