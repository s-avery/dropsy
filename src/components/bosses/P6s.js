// !IMPORT ZONE
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import WhoWantsIt from "../WhoWantsIt";

const P6s = ({
	//#region props
	characterList,
	setCharacterList,
	earring,
	setEarring,
	necklace,
	setNecklace,
	bracelet,
	setBracelet,
	ring,
	setRing,
	setWeapon,
	head,
	setHead,
	body,
	setBody,
	hands,
	setHands,
	legs,
	setLegs,
	feet,
	setFeet,
	//#endregion
}) => {
	// !COMPONENT MOUNT
	// *reset drop value states
	useEffect(() => {
		//*reset states
		setEarring(0);
		setNecklace(0);
		setBracelet(0);
		setRing(0);
		setWeapon(0);
		setHead(0);
		setBody(0);
		setHands(0);
		setLegs(0);
		setFeet(0);
		setShowWhoWantsIt(false);
	}, []); // eslint-disable-line react-hooks/exhaustive-deps

	// !STATE ZONE
	const [showWhoWantsIt, setShowWhoWantsIt] = useState(false);

	// !FUNCTION ZONE
	// *Increment/Decrements
	//#region
	const incrementHead = () => {
		setHead(head + 1);
	};
	const decrementHead = () => {
		if (head === 0) {
			console.log("no negatives silly");
		} else {
			setHead(head - 1);
		}
	};

	const incrementHands = () => {
		setHands(hands + 1);
	};
	const decrementHands = () => {
		if (hands === 0) {
			console.log("no negatives silly");
		} else {
			setHands(hands - 1);
		}
	};

	const incrementFeet = () => {
		setFeet(feet + 1);
	};
	const decrementFeet = () => {
		if (feet === 0) {
			console.log("no negatives silly");
		} else {
			setFeet(feet - 1);
		}
	};
	//#endregion

	const rackEmUp = () => {
		setShowWhoWantsIt(true);
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
				{showWhoWantsIt ? (
					""
				) : (
					<>
						<div className="drops">
							<div className="drop">
								<h3>head</h3>
								<button
									className="button"
									onClick={incrementHead}
								>
									+
								</button>
								<p>x{head}</p>
								<button
									className="button"
									onClick={decrementHead}
								>
									-
								</button>
							</div>
							<div className="drop">
								<h3>hands</h3>
								<button
									className="button"
									onClick={incrementHands}
								>
									+
								</button>
								<p>x{hands}</p>
								<button
									className="button"
									onClick={decrementHands}
								>
									-
								</button>
							</div>
							<div className="drop">
								<h3>feet</h3>
								<button
									className="button"
									onClick={incrementFeet}
								>
									+
								</button>
								<p>x{feet}</p>
								<button
									className="button"
									onClick={decrementFeet}
								>
									-
								</button>
							</div>
						</div>
						<div>
							<button className="button" onClick={rackEmUp}>
								rack em up!
							</button>
						</div>
					</>
				)}

				{showWhoWantsIt ? (
					<WhoWantsIt
						earring={earring}
						setEarring={setEarring}
						necklace={necklace}
						setNecklace={setNecklace}
						bracelet={bracelet}
						setBracelet={setBracelet}
						ring={ring}
						setRing={setRing}
						head={head}
						setHead={setHead}
						body={body}
						setBody={setBody}
						hands={hands}
						setHands={setHands}
						legs={legs}
						setLegs={setLegs}
						feet={feet}
						setFeet={setFeet}
						characterList={characterList}
						setCharacterList={setCharacterList}
						setShowWhoWantsIt={setShowWhoWantsIt}
					/>
				) : (
					""
				)}
			</main>
		</>
	);
};

export default P6s;
