import PropTypes from "prop-types";
import Head from "next/head";

import { useRouter } from "next/router";

const NextHead = props => {
	const router = useRouter();

	const isAtHomePage = router.pathname === "/";

	const fontAwesome = (
		<link
			rel="stylesheet"
			href="https://use.fontawesome.com/releases/v5.15.4/css/all.css"
			integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm"
			crossOrigin="anonymous"
		></link>
	);
	const cdn = isAtHomePage ? fontAwesome : "";

	return (
		<Head>
			<meta name="twitter:title" content={props.contentTitle} />
			<meta name="twitter:description" content={props.contentDescription} />
			<meta property="og:url" content={props.contentUrl} />
			<meta property="og:title" content={props.contentTitle} />
			<meta property="og:description" content={props.contentDescription} />
			<meta property="og:image" content={props.contentImageURL} />
			<meta property="og:image:alt" content={props.contentImageAlt} />
			{cdn}
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
