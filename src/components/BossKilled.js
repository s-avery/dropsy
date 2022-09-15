// !IMPORT ZONE
import { Link } from "react-router-dom";

const BossKilled = () => {
	// *drop tables
	const p5sDrops = ["earring", "necklace", "bracelet", "ring"];

	const p6sDrops = ["feet", "head", "hands"];

	const p7sDrops = ["feet", "hands", "head", "legs"];

	const p8sDrops = ["body"];

	return (
		<>
			<header>
				<Link to="/" className="homeButton">
					home
				</Link>

				<h1>ff14 gear planner</h1>

				<h2>which boss died?</h2>
			</header>

			<main className="bossKilled">
				<div className="whichBoss">
					<Link to="/p5s" className="button">
						p5s
					</Link>
					<button className="button">p6s</button>
					<button className="button">p7s</button>
					<button className="button">p8s</button>
				</div>

				<div className="drops">
					<div className="dropButton">
						<button className="button">option 1</button>
						<p>x1</p>
					</div>
					<div className="dropButton">
						<button className="button">option 2</button>
						<p>x1</p>
					</div>
					<div className="dropButton">
						<button className="button">option 3</button>
						<p>x1</p>
					</div>
					<div className="dropButton">
						<button className="button">option 4</button>
						<p>x1</p>
					</div>
				</div>

				<button className="button">who wants it?</button>

				<h3>the following characters want this loot:</h3>
			</main>
		</>
	);
};

export default BossKilled;
