import { Fragment } from "react";
import PropTypes from "prop-types";

import Head from "next/head";
import Navbar from "./Navbar";
import styles from "./Layout.module.css";

const Layout = props => {
	return (
		<Fragment>
			<Head>
				<title>Image Gallery</title>
			</Head>
			<Navbar />
			<main className={styles.container}>{props.children}</main>
		</Fragment>
	);
};

Layout.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Layout;
