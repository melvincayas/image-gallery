import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Layout from "../components/Layout";
import LoadingScreen from "../components/LoadingScreen";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
	const [isPageLoading, setIsPageLoading] = useState(false);
	const router = useRouter();

	useEffect(() => {
		const onStartPageLoad = () => setIsPageLoading(true);
		const onEndPageLoad = () => setIsPageLoading(false);

		router.events.on("routeChangeStart", onStartPageLoad);
		router.events.on("routeChangeComplete", onEndPageLoad);
		router.events.on("routeChangeError", onEndPageLoad);

		return () => {
			router.events.off("routeChangeStart", onStartPageLoad);
			router.events.off("routeChangeComplete", onEndPageLoad);
			router.events.off("routeChangeError", onEndPageLoad);
		};
	}, [router.events]);

	return (
		<Layout>
			{isPageLoading ? <LoadingScreen /> : <Component {...pageProps} />}
		</Layout>
	);
}

export default MyApp;
