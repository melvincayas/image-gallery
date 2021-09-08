import PropTypes from "prop-types";
import moment from "moment";

import Link from "next/link";
import Image from "next/image";

import styles from "../../styles/ImageDetail.module.css";

const ImageDetail = props => {
	// Unsplash API docs recommend against Full size for performance issues
	// next biggest is Regular size

	return (
		<section className={styles.container} data-test="component-image-detail">
			<header data-test="header-block">
				<section className={styles["header-row"]}>
					<div className={styles["user-information"]}>
						<div className={styles["profile-picture-container"]}>
							<Link href={`https://unsplash.com/@${props.image.user.username}`}>
								<a>
									<Image
										className={styles["profile-picture"]}
										src={props.image.user.profile_image.medium}
										width={64}
										height={64}
										layout="fixed"
									/>
								</a>
							</Link>
						</div>
						<div>
							<Link href={`https://unsplash.com/@${props.image.user.username}`}>
								<a>{props.image.user.name}</a>
							</Link>
							<p className={styles["header-text"]}>
								{props.image.user.total_photos} photos
							</p>
						</div>
					</div>
					<Link href="/">
						<a>Back</a>
					</Link>
				</section>
				<section className={styles["header-row"]}>
					<div>
						<p className={styles["header-text"]}>
							<time>
								{moment(props.image.created_at).format("MMMM D, YYYY")}
							</time>
						</p>
						<p className={styles["header-text"]}>
							{props.image.description || props.image.alt_description}
						</p>
					</div>
					<div className={styles["photo-views"]}>
						<p className={styles["header-text"]}>
							{Number(props.image.views).toLocaleString()} Views
						</p>
						<p className={styles["header-text"]}>
							{Number(props.image.downloads).toLocaleString()} Downloads
						</p>
					</div>
				</section>
			</header>
			<div className={styles["image-container"]} data-test="image-container">
				<Image
					src={props.image.urls.regular}
					width={+props.image.width}
					height={+props.image.height}
					layout="responsive"
				/>
			</div>
		</section>
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
