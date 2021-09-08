import { shallow } from "enzyme";
import Navbar from "../components/Navbar";

/**
 * Function setup for shallow method on Navbar component
 * @function setup
 * @returns {ShallowWrapper} - Top level of component
 */

const setup = () => {
	return shallow(<Navbar />);
};

describe("<Navbar component renders", () => {
	let wrapper;

	beforeEach(() => {
		wrapper = setup();
	});

	test("renders navbar", () => {
		const navbarComponent = wrapper.find('[data-test="component-navbar"]');
		expect(navbarComponent.exists()).toBe(true);
	});

	test("renders navbar logo", () => {
		const navbarLogo = wrapper.find('[data-test="navbar-logo"]');
		expect(navbarLogo.exists()).toBe(true);
	});
});
