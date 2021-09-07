import React from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
	return (
		<nav className={styles.navbar} data-test="component-navbar">
			<h3 className={styles.logo} data-test="navbar-logo">
				Image Gallery
			</h3>
		</nav>
	);
};

export default Navbar;
