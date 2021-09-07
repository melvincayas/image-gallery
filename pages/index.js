import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import Form from "../components/Form";
import ImagesContainer from "../components/ImagesContainer";

import styles from "../styles/Home.module.css";

export default function Home(props) {
	const [images, setImages] = useState([props.images]);
	const [searchTerm, setSearchTerm] = useState("");
	// for images, to be set on fetch with onSearchSubmit

	const onSearchSubmit = userInput => {
		setSearchTerm(userInput);
		// write fetch request here
		// use setImages to set images
	};

	// create state for display text
	const displayText =
		searchTerm.trim() === ""
			? "Please enter something to search."
			: `Results for '${searchTerm}'`;

	return (
		<main data-test="component-home">
			<Navbar />
			<section className={styles.container}>
				<Form onSubmit={onSearchSubmit} />
				<aside className={styles["display-text"]} data-test="text-display">
					{displayText}
				</aside>
			</section>
			<ImagesContainer images={images} />
		</main>
	);
}

export async function getStaticProps(context) {
	// gets initial batch of 10 images
	const response = await fetch(
		`https://api.unsplash.com/photos?client_id=${process.env.CLIENT_ID}&per_page=9`
	);
	const result = await response.json();

	return {
		props: { images: result },
	};
}
