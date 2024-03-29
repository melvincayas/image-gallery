import React from "react";
import PropTypes from "prop-types";
import useWindowDimensions from "./hooks/useWindowDimensions";

import ImageItem from "./ImageItem";
import InfiniteScroll from "react-infinite-scroll-component";

import styles from "./ImagesContainer.module.css";

const ImagesContainer = props => {
	const windowDimensions = useWindowDimensions();

	const numberOfColumns = windowDimensions.width <= 1200 ? 2 : 3;

	const gridStyle = {
		columnCount: numberOfColumns,
		columnGap: "1em",
	};

	return (
		<section
			className={styles.container}
			data-test="component-images-container"
		>
			<InfiniteScroll
				dataLength={props.images.length}
				next={props.getMoreImages}
				hasMore={true}
				loader={<h2>Loading...</h2>}
				endMessage={<h2>No more images!</h2>}
				style={props.layout === "Grid" ? gridStyle : ""}
			>
				{props.images.map(image => (
					<ImageItem view={props.view} key={image.id} image={image} />
				))}
			</InfiniteScroll>
		</section>
	);
};

ImagesContainer.propTypes = {
	images: PropTypes.arrayOf(PropTypes.object).isRequired,
	getMoreImages: PropTypes.func,
	view: PropTypes.string,
};

export default ImagesContainer;
