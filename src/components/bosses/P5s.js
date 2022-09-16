// !IMPORT ZONE
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import WhoWantsIt from "../WhoWantsIt";
import firebase from "../../firebase";
import { getDatabase, ref, onValue } from "firebase/database";

const P5s = ({
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
		// *reset states
		setEarring(0);
		setNecklace(0);
		setBracelet(0);
		setRing(0);
		setHead(0);
		setBody(0);
		setHands(0);
		setLegs(0);
		setFeet(0);
		setShowWhoWantsIt(false);

		//*Getting data from database
		//#region getting data from firebase
		// holding the database details from firebase
		const database = getDatabase(firebase);

		// a variable that references a specific location of our database
		const dbRef = ref(database);

		// when db value changes, make storage state
		onValue(dbRef, (response) => {
			const newState = [];
			const data = response.val();

			// loop over the data object and push each character into the newState empty array
			// we've given it multiple info as an object so we can get the key prop (so we can tell firebase how to remove items)
			for (let key in data) {
				newState.push({
					key: key,
					gearListItems: data[key],

					characterName: data[key].characterName,
				});
			}

			// update characterList state to hold our character names stored in newState
			setCharacterList(newState);
		});
		//#endregion
	}, []);

	// !STATE ZONE
	const [printEarring, setPrintEarring] = useState(false);
	const [printNecklace, setPrintNecklace] = useState(false);
	const [printBracelet, setPrintBracelet] = useState(false);
	const [printRing, setPrintRing] = useState(false);
	const [printHead, setPrintHead] = useState(false);
	const [printHands, setPrintHands] = useState(false);
	const [printLegs, setPrintLegs] = useState(false);
	const [printFeet, setPrintFeet] = useState(false);

	const [showWhoWantsIt, setShowWhoWantsIt] = useState(false);

	// !FUNCTION ZONE
	// *Increment/Decrements
	//#region
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
	//#endregion

	const rackEmUp = () => {
		setShowWhoWantsIt(true);

		//Getting data from database
		//#region getting data from firebase
		// holding the database details from firebase
		const database = getDatabase(firebase);

		// a variable that references a specific location of our database
		const dbRef = ref(database);

		// when db value changes, make storage state
		onValue(dbRef, (response) => {
			const newState = [];
			const data = response.val();

			// loop over the data object and push each character into the newState empty array
			// we've given it multiple info as an object so we can get the key prop (so we can tell firebase how to remove items)
			for (let key in data) {
				newState.push({
					key: key,
					gearListItems: data[key],

					characterName: data[key].characterName,
				});
			}

			// update characterList state to hold our character names stored in newState
			setCharacterList(newState);
		});
		//#endregion
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
					<div className="drops">
						<div className="drop">
							<h3>earring</h3>
							<button
								className="button"
								onClick={incrementEarring}
							>
								+
							</button>
							<p>x{earring}</p>
							<button
								className="button"
								onClick={decrementEarring}
							>
								-
							</button>
						</div>

						<div className="drop">
							<h3>necklace</h3>
							<button
								className="button"
								onClick={incrementNecklace}
							>
								+
							</button>
							<p>x{necklace}</p>
							<button
								className="button"
								onClick={decrementNecklace}
							>
								-
							</button>
						</div>

						<div className="drop">
							<h3>bracelet</h3>
							<button
								className="button"
								onClick={incrementBracelet}
							>
								+
							</button>
							<p>x{bracelet}</p>
							<button
								className="button"
								onClick={decrementBracelet}
							>
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
				)}

				<div>
					<button className="button" onClick={rackEmUp}>
						rack em up!
					</button>
				</div>

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
					/>
				) : (
					""
				)}
			</main>
		</>
	);
};

export default P5s;
