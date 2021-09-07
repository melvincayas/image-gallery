import { useState } from "react";

import Navbar from "../components/Navbar";
import ImagesContainer from "../components/ImagesContainer";

export default function Home(props) {
	const [images, setImages] = useState([...props.images]);

	return (
		<main data-test="component-home">
			<Navbar />
			<ImagesContainer images={images} />
		</main>
	);
}

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
