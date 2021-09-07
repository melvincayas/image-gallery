import React from "react";
import Image from "next/image";
import PropTypes from "prop-types";

import styles from "./ImageItem.module.css";

const ImageItem = props => {
	return (
		<figure className={styles.image} data-test="component-image">
			<img src={props.image.urls.small} alt={props.alt_description} />
		</figure>
	);
};

ImageItem.propTypes = {
	image: PropTypes.object.isRequired,
};

export default ImageItem;
