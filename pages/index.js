import { useState } from "react";
import PropTypes from "prop-types";

import ImagesContainer from "../components/ImagesContainer";

import styles from "../styles/Home.module.css";

export default function Home(props) {
	const [images, setImages] = useState([...props.images]);

	const getMoreImages = async () => {
		const response = await fetch(
			`https://api.unsplash.com/photos?client_id=${
				process.env.NEXT_PUBLIC_CLIENT_ID
			}&per_page=10&page=${images.length / 10 + 1}`
		);

		const newImages = await response.json();

		setImages(prevImages => [...prevImages, ...newImages]);
	};

	return (
		<main className={styles.container} data-test="component-home">
			<ImagesContainer images={images} getMoreImages={getMoreImages} />
		</main>
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
