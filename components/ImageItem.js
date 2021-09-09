import React from "react";
import PropTypes from "prop-types";
import useWindowDimensions from "./hooks/useWindowDimensions";

import Image from "next/image";
import Link from "next/link";

import styles from "./ImageItem.module.css";

const ImageItem = props => {
	const windowDimensions = useWindowDimensions();

	const isGridViewInMobile =
		windowDimensions.width < 957 && props.view === "Grid";

	const imageClass = isGridViewInMobile
		? styles["image-mobile-grid"]
		: styles.image;

	return (
		<figure className={imageClass} data-test="component-image">
			<Link href={`/images/${props.image.id}`}>
				<a>
					<Image
						src={props.image.urls.small}
						alt={props.alt_description}
						width={+props.image.width}
						height={+props.image.height}
						layout="responsive"
					/>
				</a>
			</Link>
		</figure>
	);
};

ImageItem.propTypes = {
	image: PropTypes.object.isRequired,
	view: PropTypes.string.isRequired,
};

export default ImageItem;
