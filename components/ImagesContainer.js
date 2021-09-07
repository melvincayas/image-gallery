import React from "react";
import PropTypes from "prop-types";

const ImagesContainer = props => {
	return <section data-test="component-images-container"></section>;
};

ImagesContainer.propTypes = {
	images: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ImagesContainer;
