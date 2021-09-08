import React from "react";
import ReactLoading from "react-loading";

import styles from "./LoadingScreen.module.css";

const LoadingScreen = () => {
	return (
		<aside className={styles.icon} data-test="component-loading">
			<ReactLoading type="bubbles" color="#000000" />
		</aside>
	);
};

export default LoadingScreen;
