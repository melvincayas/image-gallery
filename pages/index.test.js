import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "@wojtekmaj/enzyme-adapter-react-17";

import Home from "./index";

Enzyme.configure({ adapter: new EnzymeAdapter() });

/**
 * Function setup for shallow method on Home component
 * @function setup
 * @returns {ShallowWrapper} - Top level of component
 */

const setup = () => {
	return shallow(<Home />);
};

describe("<Home /> Component renders properly", () => {
	test("renders component with no error", () => {
		const wrapper = setup();
		const homeComponent = wrapper.find('[data-test="component-home"]');
		expect(homeComponent.exists()).toBe(true);
	});

	test("renders Navbar with no error", () => {});

	test("renders Form with no error", () => {});

	test('displays "Please enter something to search" text', () => {});
});
