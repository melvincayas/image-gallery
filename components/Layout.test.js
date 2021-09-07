import Enzyme, { mount } from "enzyme";
import EnzymeAdapter from "@wojtekmaj/enzyme-adapter-react-17";

import Layout from "./Layout";

Enzyme.configure({ adapter: new EnzymeAdapter() });

const props = { children: <div></div> };

/**
 * Function setup for Layout Component
 * @function setup
 * @returns {MountWrapper} - Layout Component
 */

const setup = () => {
	return mount(<Layout {...props} />);
};

describe("<Layout /> Component", () => {
	test("renders Navbar", () => {
		const wrapper = setup();
		const navbarComponent = wrapper.find('[data-test="component-navbar"]');
		expect(navbarComponent.exists()).toBe(true);
	});
});
