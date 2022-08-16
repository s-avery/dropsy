// !IMPORT ZONE
import { Link } from "react-router-dom";

// !APP
const Home = () => {
	return (
		<div className="home">
			<header>
				<h1>ff14 gear planner</h1>

				<h2>proprietary pudgy puk performance provisioning page</h2>
			</header>

			<main>
				<Link to="/charSelect" className="button">
					edit characters
				</Link>

				<button className="button">we killed a boss!</button>
			</main>

			<footer>created at juno college</footer>
		</div>
	);
};

export default Home;
