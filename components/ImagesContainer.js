import React from "react";
import PropTypes from "prop-types";

import ImageItem from "./ImageItem";

const ImagesContainer = props => {
	console.log(props.images);
	return (
		<section data-test="component-images-container">
			{props.images.map(image => (
				<ImageItem key={image.id} image={image} />
			))}
		</section>
	);
};

ImagesContainer.propTypes = {
	images: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ImagesContainer;
