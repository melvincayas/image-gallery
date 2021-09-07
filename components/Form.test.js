import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "@wojtekmaj/enzyme-adapter-react-17";

import Form from "./Form";

Enzyme.configure({ adapter: new EnzymeAdapter() });

/**
 * Function setup for Form component
 * @function setup
 * @returns {ShallowWrapper} - Top level for Form component
 */

const props = { value: "test", onChange: jest.fn(), onSubmit: jest.fn() };

const setup = () => {
	return shallow(<Form {...props} />);
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

		const mockEvent = { target: { value: "another search" } };
		inputBox.simulate("change", mockEvent);

		expect(props.onChange).toHaveBeenCalledWith(mockEvent.target.value);
	});
});

describe("when form is submitted", () => {
	test("onSubmit is called with state", () => {
		const wrapper = setup();
		const formComponent = wrapper.find('[data-test="component-form"]');

		const mockState = "submitted another search";
		formComponent.simulate("submit", mockState);

		expect(props.onSubmit).toHaveBeenCalledWith(mockState);
	});
});
