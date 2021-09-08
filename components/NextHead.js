import PropTypes from "prop-types";
import Head from "next/head";

const NextHead = props => {
	return (
		<Head>
			<meta name="twitter:title" content={props.contentTitle} />
			<meta name="twitter:description" content={props.contentDescription} />
			<meta property="og:url" content={props.contentUrl} />
			<meta property="og:title" content={props.contentTitle} />
			<meta property="og:description" content={props.contentDescription} />
			<meta property="og:image" content={props.contentImageURL} />
			<meta property="og:image:alt" content={props.contentImageAlt} />
			<title>{props.pageTitle}</title>
		</Head>
	);
};

NextHead.propTypes = {
	contentUrl: PropTypes.string.isRequired,
	contentTitle: PropTypes.string.isRequired,
	contentDescription: PropTypes.string.isRequired,
	contentImageURL: PropTypes.string.isRequired,
	contentImageAlt: PropTypes.string.isRequired,
	pageTitle: PropTypes.string.isRequired,
};

export default NextHead;
