import { Fragment } from "react";
import PropTypes from "prop-types";

import Navbar from "./Navbar";

const Layout = props => {
	return (
		<Fragment>
			<Navbar />
			{props.children}
		</Fragment>
	);
};

Layout.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Layout;
