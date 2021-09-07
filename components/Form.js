import { useState } from "react";
import PropTypes from "prop-types";

const Form = props => {
	const [userInput, setUserInput] = useState("");

	const onChangeHandler = event => {
		props.onChange(event.target.value);
	};

	const onSubmitHandler = userInput => {
		props.onSubmit(userInput);
	};

	return (
		<form data-test="component-form" onSubmit={onSubmitHandler}>
			<input
				data-test="input-box"
				value={userInput}
				onChange={onChangeHandler}
				type="text"
			/>
			<button>Search</button>
		</form>
	);
};

Form.propTypes = {
	value: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	onSubmit: PropTypes.func.isRequired,
};

export default Form;
