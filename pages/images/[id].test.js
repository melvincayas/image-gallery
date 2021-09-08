import { shallow } from "enzyme";
import ImageDetail from "./[id]";

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
	let wrapper;

	beforeEach(() => {
		wrapper = setup();
	});

	test("renders component without error", () => {
		const imageComponent = wrapper.find('[data-test="component-image-detail"]');
		expect(imageComponent.exists()).toBe(true);
	});

	test("renders header block", () => {
		const headerBlock = wrapper.find('[data-test="header-block"]');
		expect(headerBlock.exists()).toBe(true);
	});

	test("renders 1 image", () => {
		const imageContainer = wrapper.find('[data-test="image-container"]');
		expect(imageContainer.length).toEqual(1);
	});
});
