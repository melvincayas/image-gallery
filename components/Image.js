import React from "react";
import PropTypes from "prop-types";

const Image = props => {
	return <figure data-test="component-image"></figure>;
};

Image.propTypes = {
	image: PropTypes.object.isRequired,
};

export default Image;
