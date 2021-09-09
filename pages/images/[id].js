import { Fragment } from "react";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import { format, parseISO } from "date-fns";

import LoadingScreen from "../../components/LoadingScreen";
import NextHead from "../../components/NextHead";
import Link from "next/link";
import Image from "next/image";

import styles from "../../styles/ImageDetail.module.css";

const ImageDetail = props => {
	const router = useRouter();

	// display error messages if error with image fetch
	if (props.error) {
		const errorMessages = props.errorMessages.map((message, id) => (
			<div key={id} data-test="component-error">
				<p>{message}</p>
			</div>
		));
		return errorMessages;
	}

	// Loading if page was not pre-rendered (fallback)
	if (router.isFallback) {
		return <LoadingScreen />;
	}

	const imageDescription =
		props.image.description || props.image.alt_description;

	// Unsplash API docs recommend against Full size for performance issues
	// next biggest is Regular size

	const header = (
		<header data-test="header-block">
			<section className={styles["header-first-row"]}>
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
									alt="User profile picture"
								/>
							</a>
						</Link>
					</div>
					<div>
						<Link href={`https://unsplash.com/@${props.image.user.username}`}>
							<a>{props.image.user.name}</a>
						</Link>
						<p className={styles["header-text"]}>{props.image.user.location}</p>
						<p className={styles["header-text"]}>
							{Number(props.image.user.total_photos).toLocaleString()} photos
						</p>
					</div>
				</div>
				<Link href="/">
					<a>Back</a>
				</Link>
			</section>
			<section className={styles["header-second-row"]}>
				<div className={styles["date-description-column"]}>
					<p className={styles["header-text"]}>
						<time>
							{format(parseISO(props.image.created_at), "MMMM d, yyyy ")}
						</time>
					</p>
					<p className={styles["header-text"]}>{imageDescription}</p>
				</div>
				<div className={styles["photo-views-column"]}>
					<p className={styles["header-text"]}>
						{Number(props.image.views).toLocaleString()} Views
					</p>
					<p className={styles["header-text"]}>
						{Number(props.image.downloads).toLocaleString()} Downloads
					</p>
				</div>
			</section>
		</header>
	);

	return (
		<Fragment>
			<NextHead
				contentTitle={`${imageDescription} | ${props.image.user.name} | Image Gallery`}
				contentDescription={imageDescription}
				contentUrl={`https://image-gallery-melvin.vercel.app/images/${props.image.id}`}
				contentImageURL={props.image.urls.small}
				contentImageAlt={imageDescription}
				pageTitle={`${imageDescription} | ${props.image.user.name} | Image Gallery`}
			/>
			<section className={styles.container} data-test="component-image-detail">
				{header}
				<div className={styles["image-container"]} data-test="image-container">
					<Image
						src={props.image.urls.regular}
						width={+props.image.width}
						height={+props.image.height}
						layout="responsive"
						alt={props.image.alt_description}
					/>
				</div>
			</section>
		</Fragment>
	);
};

ImageDetail.propTypes = {
	image: PropTypes.object.isRequired,
};

export const getStaticPaths = async () => {
	try {
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
	} catch (err) {
		console.log(err);
	}
};

export const getStaticProps = async context => {
	const id = context.params.id;

	const response = await fetch(
		`https://api.unsplash.com/photos/${id}?client_id=${process.env.NEXT_PUBLIC_CLIENT_ID}`
	);
	const image = await response.json();

	// return error if image is not found
	if (image.errors) {
		return {
			props: {
				error: true,
				errorMessages: image.errors,
			},
		};
	}

	// return image if successful
	return {
		props: { image },
	};
};

export default ImageDetail;
