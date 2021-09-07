/**
 * @jest-environment jsdom
 */

import React from "react";
import Enzyme, { mount } from "enzyme";
import EnzymeAdapter from "@wojtekmaj/enzyme-adapter-react-17";

import Home from "./index";

Enzyme.configure({ adapter: new EnzymeAdapter() });

/**
 * Function setup for mount method on Home component
 * @function setup
 * @returns {MountWrapper} - Mount entire app
 */

const props = {
	images: [
		{
			id: 1,
			author: "test author",
			urls: { small: "https://testurl.com" },
			alt_description: "test alt description",
		},
	],
};

const setup = () => {
	return mount(<Home {...props} />);
};

describe("<Home /> Component renders properly", () => {
	let wrapper;

	beforeEach(() => {
		wrapper = setup();
	});

	describe("on initial load", () => {
		test("renders component with no error", () => {
			const homeComponent = wrapper.find('[data-test="component-home"]');
			expect(homeComponent.exists()).toBe(true);
		});

		test.skip("renders Navbar with no error", () => {
			const navbarComponent = wrapper.find('[data-test="component-navbar"]');
			expect(navbarComponent.exists()).toBe(true);
		});

		test.skip("renders Form with no error", () => {
			const formComponent = wrapper.find('[data-test="component-form"]');
			expect(formComponent.exists()).toBe(true);
		});

		test.skip('displays "Please enter something to search" text', () => {
			const textDisplay = wrapper.find('[data-test="text-display"]');
			expect(textDisplay.text()).toEqual("Please enter something to search.");
		});
	});

	describe("after new images are fetched", () => {
		test("displays 'Results for' text", () => {});
	});
});
