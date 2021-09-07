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
			width: 100,
			height: 100,
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

		test("renders List text in button", () => {
			const layoutButton = wrapper.find('[data-test="layout-button"]');
			expect(layoutButton.text()).toEqual("List");
		});
	});

	describe("layout view", () => {
		test("layout changes on button click", () => {
			const layoutButton = wrapper.find('[data-test="layout-button"]');
			layoutButton.simulate("click");
			expect(layoutButton.text()).toEqual("Grid");
		});
	});
});
