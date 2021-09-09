/**
 * @jest-environment jsdom
 */

import { mount } from "enzyme";
import Home from "../pages/index";
import * as nextRouter from "next/router";

// mocking useRouter
nextRouter.useRouter = jest.fn();
nextRouter.useRouter.mockImplementation(() => ({ route: "/" }));

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

		test("renders List icon in button", () => {
			const icon = wrapper.find('[data-test="icon-list"]');
			expect(icon.exists()).toBe(true);
		});

		test("does not render the Grid icon in button", () => {
			const icon = wrapper.find('[data-test="icon-grid"]');
			expect(icon.exists()).toBe(false);
		});

		test("renders 1 image", () => {
			const imageComponent = wrapper.find('[data-test="component-image"]');
			expect(imageComponent.length).toEqual(1);
		});
	});

	describe("layout view", () => {
		test("layout changes on button click", () => {
			const layoutButton = wrapper.find('[data-test="layout-button"]');
			layoutButton.simulate("click");

			const icon = wrapper.find('[data-test="icon-grid"]');
			expect(icon.exists()).toBe(true);
		});

		test("does not render List icon when button clicked", () => {
			const layoutButton = wrapper.find('[data-test="layout-button"]');
			layoutButton.simulate("click");

			const icon = wrapper.find('[data-test="icon-list"]');
			expect(icon.exists()).toBe(false);
		});
	});
});
