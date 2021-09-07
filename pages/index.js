import { useState } from "react";

import Navbar from "../components/Navbar";
import Form from "../components/Form";

export default function Home() {
	const [images, setImages] = useState([]);
	const [userInput, setUserInput] = useState("");
	// for images, to be set on fetch with onSearchSubmit

	const onSearchSubmit = userInput => {
		// write fetch request here
		// use setImages to set images
	};

	// create state for display text

	const textDisplay =
		images.length === 0
			? "Please enter something to search."
			: `Results for ${userInput}`;

	return (
		<div data-test="component-home">
			<Navbar />
			<Form
				value={userInput}
				onChange={setUserInput}
				onSubmit={onSearchSubmit}
			/>
			<aside>{textDisplay}</aside>
		</div>
	);
}
