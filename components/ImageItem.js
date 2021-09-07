import React from "react";
import PropTypes from "prop-types";

import Image from "next/image";
import Link from "next/link";

import styles from "./ImageItem.module.css";

const ImageItem = props => {
	return (
		<figure className={styles.image} data-test="component-image">
			<Link href={`/images/${props.image.id}`}>
				<Image
					src={props.image.urls.small}
					alt={props.alt_description}
					width={+props.image.width}
					height={+props.image.height}
					layout="responsive"
				/>
			</Link>
		</figure>
	);
};

ImageItem.propTypes = {
	image: PropTypes.object.isRequired,
};

export default ImageItem;
