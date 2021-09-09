import { shallow } from "enzyme";
import ImageDetail from "../../pages/images/[id]";
import * as nextRouter from "next/router";
import { tsParenthesizedType } from "@babel/types";

// mocking useRouter
nextRouter.useRouter = jest.fn();
nextRouter.useRouter.mockImplementation(() => ({ route: "/" }));

/**
 * Function setup for ShallowWrapper for ImageDetail component
 * @function setup
 * @returns {ShallowWrapper} - Top level of ImageDetail
 */

const defaultProps = {
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
		created_at: new Date("09 September 2021 14:48 UTC").toISOString(),
	},
};

const setup = props => {
	const allProps = { ...defaultProps, ...props };
	return shallow(<ImageDetail {...allProps} />);
};

describe("<ImageDetail /> renders when image is fetched correctly", () => {
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

describe("<Image /> fails during fetch", () => {
	test("error messages are displayed", () => {
		const wrapper = setup({
			error: true,
			errorMessages: ["Cannot find that photo."],
		});
		const errorMessages = wrapper.find('[data-test="component-error"]');
		expect(errorMessages.exists()).toBe(true);
	});
});
