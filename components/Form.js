import React, { useState } from "react";

const Form = () => {
	const [userInput, setUserInput] = useState("");
	// useState for user input search

	// create onSubmit for fetch call which will give state to Home

	const onChangeHandler = event => {
		setUserInput(event.target.value);
	};

	return (
		<form data-test="component-form">
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

export default Form;
