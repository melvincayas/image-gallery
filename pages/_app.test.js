import Enzyme, { mount } from "enzyme";
import EnzymeAdapter from "@wojtekmaj/enzyme-adapter-react-17";

import App from "./_app";

Enzyme.configure({ adapter: new EnzymeAdapter() });

/**
 * Function setup for entire App
 * @function setup
 * @returns {MountWrapper} - Full contents of App component
 */

const setup = () => {
	return mount(<App />);
};

describe("App renders with no error", () => {
	test("Navbar renders with no error", () => {
		const wrapper = setup();
		const navbarComponent = wrapper.find('[data-test="component-navbar"]');
		expect(navbarComponent.exists()).toBe(true);
	});
});
