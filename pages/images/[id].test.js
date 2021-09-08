import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "@wojtekmaj/enzyme-adapter-react-17";

import ImageDetail from "./[id]";
import image from "next/image";

Enzyme.configure({ adapter: new EnzymeAdapter() });

/**
 * Function setup for ShallowWrapper for ImageDetail component
 * @function setup
 * @returns {ShallowWrapper} - Top level of ImageDetail
 */

const props = {
	image: {
		id: 1,
		author: "test author",
		urls: { small: "https://testurl.com" },
		width: 100,
		height: 100,
		alt_description: "test alt description",
		user: {
			username: "test name",
			profile_image: "https://testurl.com",
			name: "Blank",
			total_photos: 100,
		},
	},
};

const setup = () => {
	return shallow(<ImageDetail {...props} />);
};

describe("<ImageDetail /> in pages/images", () => {
	test("renders component without error", () => {
		const wrapper = setup();
		const imageComponent = wrapper.find('[data-test="component-image-detail"]');
		expect(imageComponent.exists()).toBe(true);
	});

	test("renders header block", () => {
		const wrapper = setup();
		const headerBlock = wrapper.find('[data-test="header-block"]');
		expect(headerBlock.exists()).toBe(true);
	});

	test("renders image", () => {
		const wrapper = setup();
		const imageContainer = wrapper.find('[data-test="image-container"]');
		expect(imageContainer.exists()).toBe(true);
	});
});
