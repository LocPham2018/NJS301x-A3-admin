import classes from './Input.module.css';

const Input = props => {
	const { id, value, control, multiple, required, type, onInput } = props;

	const updateHandler = evt => {
		if (type === 'checkbox') {
			return onInput(id, !value);
		}
		if (multiple) {
			const options = [...evt.target.selectedOptions];
			const values = options.map(option => option.value);
			return onInput(id, values);
		}
		onInput(id, evt.target.value);
	};

	let inputElement = (
		<input id={id} type={type} value={value} onChange={updateHandler} />
	);
	if (type === 'checkbox') {
		inputElement = (
			<input
				id={id}
				type={type}
				checked={value}
				onChange={updateHandler}
			/>
		);
	}
	if (control === 'textarea') {
		inputElement = (
			<textarea
				id={id}
				value={value}
				onChange={updateHandler}
				placeholder="Use , to separate input"
			/>
		);
	}
	if (control === 'select') {
		const { options } = props;
		inputElement = (
			<select
				id={id}
				multiple={multiple}
				value={value}
				onChange={updateHandler}
			>
				{options.map(option => (
					<option key={option} value={option} disabled={option === ''}>
						{option}
					</option>
				))}
			</select>
		);
	}

	return (
		<div
			className={`${
				type === 'checkbox' ? classes['input-checkbox'] : classes.input
			}`}
		>
			<label className={`${required ? classes.required : ''}`}>
				{props.label}
			</label>
			{inputElement}
		</div>
	);
};

export default Input;
