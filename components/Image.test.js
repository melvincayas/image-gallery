import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "@wojtekmaj/enzyme-adapter-react-17";

import Image from "./Image";

Enzyme.configure({ adapter: new EnzymeAdapter() });

const props = { image: { id: 1, author: "test author" } };

/**
 * Function setup for ShallowWrapper for Image component
 * @function setup
 * @returns {ShallowWrapper} - Top level of Image
 */

const setup = () => {
	return shallow(<Image {...props} />);
};

describe("<Image /> Component", () => {
	test("renders without error", () => {
		const wrapper = setup();
		const imageComponent = wrapper.find('[data-test="component-image"]');
		expect(imageComponent.exists()).toBe(true);
	});
});
