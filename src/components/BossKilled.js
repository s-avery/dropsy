// !IMPORT ZONE
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import firebase from "../firebase";
import { getDatabase, ref, onValue } from "firebase/database";

const BossKilled = ({
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
	characterList,
	setCharacterList,
}) => {
	
	// !COMPONENT MOUNT
	useEffect(() => {
		//*Getting data from database
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
	}, []);

	// !STATE ZONE

	return (
		<>
			<header>
				<Link to="/">home</Link>

				<h1>ff14 gear planner</h1>

				<h2>which boss died?</h2>
			</header>

			<main className="bossKilled">
				<div className="whichBoss">
					<Link className="button" to="/p5s">
						p5s
					</Link>

					<Link className="button" to="/p6s">
						p6s
					</Link>
					<Link className="button" to="/p7s">
						p7s
					</Link>
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
