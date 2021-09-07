import { useState } from "react";

import Navbar from "../components/Navbar";
import Form from "../components/Form";

export default function Home() {
	const [images, setImages] = useState([]);
	const [searchTerm, setSearchTerm] = useState("");
	// for images, to be set on fetch with onSearchSubmit

	const onSearchSubmit = userInput => {
		// write fetch request here
		// use setImages to set images
	};

	// create state for display text

	return (
		<div data-test="component-home">
			<Navbar />
			<Form onSubmit={onSearchSubmit} />
		</div>
	);
}
