import { useState } from "react";

import Navbar from "../components/Navbar";
import Form from "../components/Form";

import styles from "../styles/Home.module.css";

export default function Home() {
	const [images, setImages] = useState([]);
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
		</main>
	);
}
