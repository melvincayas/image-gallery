import React from "react";
import Image from "next/image";
import PropTypes from "prop-types";

import styles from "./ImageItem.module.css";

const ImageItem = props => {
	return (
		<figure className={styles.image} data-test="component-image">
			<Image
				src={props.image.urls.small}
				alt={props.alt_description}
				width={+props.image.width}
				height={+props.image.height}
				layout="responsive"
			/>
		</figure>
	);
};

ImageItem.propTypes = {
	image: PropTypes.object.isRequired,
};

export default ImageItem;
