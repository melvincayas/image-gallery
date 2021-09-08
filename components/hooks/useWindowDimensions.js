import { useState, useEffect } from "react";

/*global window*/

const getWindowDimensions = () => {
	const { innerWidth: width, innerHeight: height } = window;

	return { width, height };
};

const useWindowDimensions = () => {
	const [windowDimensions, setWindowDimensions] = useState({
		width: undefined,
		height: undefined,
	});

	const windowResizeHandler = () => {
		setWindowDimensions(getWindowDimensions());
	};

	useEffect(() => {
		windowResizeHandler();
		// initial grab of dimensions on mount

		window.addEventListener("resize", windowResizeHandler);
		// add event listener for window changes

		return () => {
			window.removeEventListener("resize", windowResizeHandler);
		};
	}, []);

	return windowDimensions;
};

export default useWindowDimensions;
