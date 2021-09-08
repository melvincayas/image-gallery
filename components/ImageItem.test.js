import { shallow } from "enzyme";
import ImageItem from "./ImageItem";

/**
 * Function setup for ShallowWrapper for ImageItem component
 * @function setup
 * @returns {ShallowWrapper} - Top level of ImageItem
 */

const props = {
	image: {
		id: 1,
		author: "test author",
		urls: { small: "https://testurl.com" },
		width: 100,
		height: 100,
		alt_description: "test alt description",
	},
};

const setup = () => {
	return shallow(<ImageItem {...props} />);
};

describe("<ImageItem /> Component", () => {
	test("renders image", () => {
		const wrapper = setup();
		const imageComponent = wrapper.find('[data-test="component-image"]');
		expect(imageComponent.exists()).toBe(true);
	});
});
