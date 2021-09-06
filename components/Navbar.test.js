import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "@wojtekmaj/enzyme-adapter-react-17";

import Navbar from "../components/Navbar";

Enzyme.configure({ adapter: new EnzymeAdapter() });

/**
 * Function setup for shallow method on Navbar component
 * @function setup
 * @returns {ShallowWrapper} - Top level of component
 */

const setup = () => {
	return shallow(<Navbar />);
};

describe("<Navbar component renders", () => {
	test("renders navbar", () => {
		const wrapper = setup();
		const navbarComponent = wrapper.find('[data-test="component-navbar"]');
		expect(navbarComponent.exists()).toBe(true);
	});

	test("renders navbar logo", () => {
		const wrapper = setup();
		const navbarLogo = wrapper.find('[data-test="navbar-logo"]');
		expect(navbarLogo.exists()).toBe(true);
	});
});
