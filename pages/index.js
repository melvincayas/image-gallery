import Navbar from "../components/Navbar";

export default function Home() {
	return (
		<div data-test="component-home">
			<Navbar />
			<p data-test="string">Hello</p>
		</div>
	);
}
