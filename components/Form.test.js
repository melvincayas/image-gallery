import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "@wojtekmaj/enzyme-adapter-react-17";

import Form from "./Form";

Enzyme.configure({ adapter: new EnzymeAdapter() });

const mockSetUserInput = jest.fn();
jest.mock("react", () => ({
	...jest.requireActual("react"),
	useState: initialState => [initialState, mockSetUserInput],
}));

/**
 * Function setup for Form component
 * @function setup
 * @returns {ShallowWrapper} - Top level for Form component
 */

const setup = () => {
	return shallow(<Form />);
};

describe("<Form /> Component", () => {
	test("renders without error", () => {
		const wrapper = setup();
		const formComponent = wrapper.find('[data-test="component-form"]');
		expect(formComponent.exists()).toBe(true);
	});
});

describe("state controlled input field", () => {
	test("state updates with value of input box on change", () => {
		const wrapper = setup();
		const inputBox = wrapper.find('[data-test="input-box"]');
		expect(inputBox.exists()).toBe(true);

		const mockEvent = { target: { value: "test" } };
		inputBox.simulate("change", mockEvent);

		expect(mockSetUserInput).toHaveBeenCalledWith(mockEvent.target.value);
	});
});
