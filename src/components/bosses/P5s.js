// !IMPORT ZONE
import { Link } from "react-router-dom";
import { useState } from "react";

const P5s = () => {
	// !STATE ZONE
	const [earring, setEarring] = useState(0);
	const [necklace, setNecklace] = useState(0);
	const [bracelet, setBracelet] = useState(0);
	const [ring, setRing] = useState(0);

	// !FUNCTION ZONE
	// *Increment/Decrements
	const incrementEarring = () => {
		setEarring(earring + 1);
	};
	const decrementEarring = () => {
		if (earring === 0) {
			console.log("no negatives silly");
		} else {
			setEarring(earring - 1);
		}
	};

	const incrementNecklace = () => {
		setNecklace(necklace + 1);
	};
	const decrementNecklace = () => {
		if (necklace === 0) {
			console.log("no negatives silly");
		} else {
			setNecklace(necklace - 1);
		}
	};

	const incrementBracelet = () => {
		setBracelet(bracelet + 1);
	};
	const decrementBracelet = () => {
		if (bracelet === 0) {
			console.log("no negatives silly");
		} else {
			setBracelet(bracelet - 1);
		}
	};

	const incrementRing = () => {
		setRing(ring + 1);
	};
	const decrementRing = () => {
		if (ring === 0) {
			console.log("no negatives silly");
		} else {
			setRing(ring - 1);
		}
	};

	// !RETURN
	return (
		<>
			<header>
				<Link to="/" className="homeButton">
					home
				</Link>

				<h1>ff14 gear planner</h1>

				<h2>what dropped?</h2>
			</header>

			<main>
				<div className="drops">
					<div className="drop">
						<h3>earring</h3>
						<button className="button" onClick={incrementEarring}>
							+
						</button>
						<p>x{earring}</p>
						<button className="button" onClick={decrementEarring}>
							-
						</button>
					</div>

					<div className="drop">
						<h3>necklace</h3>
						<button className="button" onClick={incrementNecklace}>
							+
						</button>
						<p>x{necklace}</p>
						<button className="button" onClick={decrementNecklace}>
							-
						</button>
					</div>

					<div className="drop">
						<h3>bracelet</h3>
						<button className="button" onClick={incrementBracelet}>
							+
						</button>
						<p>x{bracelet}</p>
						<button className="button" onClick={decrementBracelet}>
							-
						</button>
					</div>

					<div className="drop">
						<h3>ring</h3>
						<button className="button" onClick={incrementRing}>
							+
						</button>
						<p>x{ring}</p>
						<button className="button" onClick={decrementRing}>
							-
						</button>
					</div>
				</div>

				<div>
					<button className="button">rack em up!</button>
				</div>

				{/* PSEUDO CODE: WHO WANTS WHAT
                - look at the states of what dropped
                - access the firebase db of characters

                - for each drop, .map to see:
                    - print an h3 of the gearpiece's name
                    - if a character wants it:
                        - print radio options for that character
                         
                - on submit button:
                    - update each selected character's value for that gearpiece to "got"
                    - do it all locally? download data and do an onchange on the radio buttons?
                        - would mean downloading the entire firebase in batch and then setting it to update with the new values but that's probably fine?
                         */}
			</main>
		</>
	);
};

export default P5s;
