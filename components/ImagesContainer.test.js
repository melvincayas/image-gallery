import { shallow } from "enzyme";
import ImagesContainer from "./ImagesContainer";

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
	view: "List",
};

/**
 * Function setup for ShallowWrapper for ImagesContainer component
 * @function setup
 * @returns {ShallowWrapper} - Top level of ImagesContainer
 */

const setup = () => {
	return shallow(<ImagesContainer {...props} />);
};

describe("<ImagesContainer /> Component", () => {
	test("renders without error", () => {
		const wrapper = setup();
		const containerComponent = wrapper.find(
			'[data-test="component-images-container"]'
		);
		expect(containerComponent.exists()).toBe(true);
	});
});
