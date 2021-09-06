/**
 * @jest-environment jsdom
 */

import Enzyme, { mount } from "enzyme";
import EnzymeAdapter from "@wojtekmaj/enzyme-adapter-react-17";

import Home from "./index";

Enzyme.configure({ adapter: new EnzymeAdapter() });

/**
 * Function setup for mount method on Home component
 * @function setup
 * @returns {MountWrapper} - Mount entire app
 */

const setup = () => {
	return mount(<Home />);
};

describe("<Home /> Component renders properly", () => {
	test("renders component with no error", () => {
		const wrapper = setup();
		const homeComponent = wrapper.find('[data-test="component-home"]');
		expect(homeComponent.exists()).toBe(true);
	});

	test("renders Navbar with no error", () => {
		const wrapper = setup();
		const navbarComponent = wrapper.find('[data-test="component-navbar"]');
		expect(navbarComponent.exists()).toBe(true);
	});

	test("renders Form with no error", () => {});

	test('displays "Please enter something to search" text', () => {});
});
