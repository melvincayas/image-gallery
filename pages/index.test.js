import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "@wojtekmaj/enzyme-adapter-react-17";
import Home from "./index";
import { expect, test } from "@jest/globals";

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = () => {
	return shallow(<Home />);
};

describe("<Home /> Component", () => {
	test("renders with no error", () => {
		const wrapper = setup();
		const homeComponent = wrapper.find('[data-test="component-home"]');
		expect(homeComponent.exists()).toBe(true);
	});

	test("renders the string Hello", () => {
		const wrapper = setup();
		const textComponent = wrapper.find('[data-test="string"]');
		expect(textComponent.text()).toBe("Hello");
	});
});
