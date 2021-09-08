import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "@wojtekmaj/enzyme-adapter-react-17";

import LoadingScreen from "./LoadingScreen";

Enzyme.configure({ adapter: new EnzymeAdapter() });

/**
 * Function setup for ShallowWrapper for LoadingScreen component
 * @function setup
 * @returns {ShallowWrapper} - Top level of LoadingScreen
 */

const setup = () => {
	return shallow(<LoadingScreen />);
};

describe("<LoadingScreen /> Component", () => {
	test("renders loading icon without error", () => {
		const wrapper = setup();
		const loadingComponent = wrapper.find('[data-test="component-loading"]');
		expect(loadingComponent.exists()).toBe(true);
	});
});
