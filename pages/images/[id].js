import PropTypes from "prop-types";
import styles from "../../styles/ImageDetail.module.css";

const ImageDetail = ({ image }) => {
	return (
		<div className={styles.container}>Image Detail Page for {image.id}</div>
	);
};

ImageDetail.propTypes = {
	image: PropTypes.object.isRequired,
};

export const getStaticPaths = async () => {
	const response = await fetch(
		`https://api.unsplash.com/photos?client_id=${process.env.NEXT_PUBLIC_CLIENT_ID}&per_page=10&page=1`
	);

	const result = await response.json();

	const paths = result.map(image => {
		return { params: { id: image.id.toString() } };
	});

	return {
		paths,
		fallback: true,
	};
};

export const getStaticProps = async context => {
	const id = context.params.id;
	const response = await fetch(
		`https://api.unsplash.com/photos/${id}?client_id=${process.env.NEXT_PUBLIC_CLIENT_ID}`
	);
	const image = await response.json();

	return {
		props: { image },
	};
};

export default ImageDetail;
