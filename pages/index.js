import { Fragment, useState } from "react";
import PropTypes from "prop-types";
import useWindowDimensions from "../components/hooks/useWindowDimensions";

import NextHead from "../components/NextHead";
import ImagesContainer from "../components/ImagesContainer";

import styles from "../styles/Home.module.css";

export default function Home(props) {
	const [images, setImages] = useState([...props.images]);
	const [layoutView, setLayoutView] = useState("List");

	// for hiding list-to-grid button on mobile size
	const windowDimensions = useWindowDimensions();

	// to fetch more images for infinite scroll
	const getMoreImages = async () => {
		const response = await fetch(
			`https://api.unsplash.com/photos?client_id=${
				process.env.NEXT_PUBLIC_CLIENT_ID
			}&per_page=10&page=${images.length / 10 + 1}`
		);

		const newImages = await response.json();

		setImages(prevImages => [...prevImages, ...newImages]);
	};

	// button click handler for list-to-grid view
	const onClickHandler = () => {
		setLayoutView(layoutView === "List" ? "Grid" : "List");
	};

	// will conditionally render based on window size
	const layoutContainer = (
		<div className={styles["settings-container"]}>
			<h3>Change Layout</h3>
			<button
				className={styles.button}
				onClick={onClickHandler}
				data-test="layout-button"
			>
				{layoutView}
			</button>
		</div>
	);

	return (
		<Fragment>
			<NextHead
				contentTitle="Image Gallery with Next.js"
				contentDescription="Image Gallery with Unsplash API and Next.js"
				contentUrl="/"
				contentImageURL="https://images.unsplash.com/photo-1518707598572-8cf7dabd8f66?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
				contentImageAlt="Screen with multiple images"
				pageTitle="Image Gallery"
			/>
			<section className={styles.container} data-test="component-home">
				{windowDimensions.width > 957 && layoutContainer}
				<ImagesContainer
					images={images}
					getMoreImages={getMoreImages}
					layout={layoutView}
				/>
			</section>
		</Fragment>
	);
}

Home.propTypes = {
	images: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export const getStaticProps = async () => {
	// gets initial batch of 10 images
	const response = await fetch(
		`https://api.unsplash.com/photos?client_id=${process.env.NEXT_PUBLIC_CLIENT_ID}&per_page=10&page=1`
	);
	const result = await response.json();

	return {
		props: { images: result },
	};
};
