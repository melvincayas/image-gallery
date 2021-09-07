import { useState } from "react";
import PropTypes from "prop-types";

import ImagesContainer from "../components/ImagesContainer";

import styles from "../styles/Home.module.css";

export default function Home(props) {
	const [images, setImages] = useState([...props.images]);

	const getMorePosts = async () => {};

	return (
		<main className={styles.container} data-test="component-home">
			<ImagesContainer images={images} />
		</main>
	);
}

Home.propTypes = {
	images: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export async function getStaticProps(context) {
	// gets initial batch of 10 images
	const response = await fetch(
		`https://api.unsplash.com/photos?client_id=${process.env.CLIENT_ID}&per_page=10`
	);
	const result = await response.json();

	return {
		props: { images: result },
	};
}
