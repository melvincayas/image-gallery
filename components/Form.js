import { useState } from "react";
import PropTypes from "prop-types";

const Form = props => {
	const [userInput, setUserInput] = useState("");

	const onChangeHandler = event => {
		setUserInput(event.target.value);
	};

	const onSubmitHandler = event => {
		event.preventDefault();
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
	onSubmit: PropTypes.func.isRequired,
};

export default Form;
