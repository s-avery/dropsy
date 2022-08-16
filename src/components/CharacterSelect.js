// !IMPORT ZONE
import { Link } from "react-router-dom";

// *Components

const CharacterSelect = () => {
	return (
		<div>
			<header>
				<h1>ff14 gear planner</h1>

				<h2>character editor</h2>

				<Link to="/" className="homeButton">
					home
				</Link>
			</header>

			<main className="charSelect">
				<div className="charSelect__edit">
					<p>edit an existing character:</p>
					<Link to="/charEdit" className="button">
						edit character
					</Link>
				</div>

				<div className="charSelect__newChar">
					<p>or make a new one:</p>
					<Link to="/charCreate" className="button">
						create character
					</Link>
				</div>
			</main>
		</div>
	);
};

export default CharacterSelect;
