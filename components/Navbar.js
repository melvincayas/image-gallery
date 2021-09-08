import Link from "next/link";
import styles from "./Navbar.module.css";

const Navbar = () => {
	return (
		<nav className={styles.navbar} data-test="component-navbar">
			<h3 className={styles.logo} data-test="navbar-logo">
				<Link href="/">
					<a>Image Gallery</a>
				</Link>
			</h3>
		</nav>
	);
};

export default Navbar;
