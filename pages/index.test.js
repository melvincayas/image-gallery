/**
 * @jest-environment jsdom
 */

import React from "react";
import Enzyme, { mount } from "enzyme";
import EnzymeAdapter from "@wojtekmaj/enzyme-adapter-react-17";

import Home from "./index";

Enzyme.configure({ adapter: new EnzymeAdapter() });

const mockSetUserInput = jest.fn();
jest.mock("react", () => ({
	...jest.requireActual("react"),
	useState: initialState => [initialState, mockSetUserInput],
}));

/**
 * Function setup for mount method on Home component
 * @function setup
 * @returns {MountWrapper} - Mount entire app
 */

const setup = () => {
	return mount(<Home />);
};

describe("<Home /> Component renders properly", () => {
	let wrapper;

	beforeEach(() => {
		wrapper = setup();
	});

	test("renders component with no error", () => {
		const homeComponent = wrapper.find('[data-test="component-home"]');
		expect(homeComponent.exists()).toBe(true);
	});

	test("renders Navbar with no error", () => {
		const navbarComponent = wrapper.find('[data-test="component-navbar"]');
		expect(navbarComponent.exists()).toBe(true);
	});

	test("renders Form with no error", () => {
		const formComponent = wrapper.find('[data-test="component-form"]');
		expect(formComponent.exists()).toBe(true);
	});

	test('displays "Please enter something to search" text', () => {});
});
