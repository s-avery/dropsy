// !IMPORT ZONE
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import firebase from "../firebase";
import { getDatabase, ref, onValue } from "firebase/database";

const BossKilled = ({
	//#region props
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
	//#endregion
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
					<Link className="button" to="/p5s">
						p5s
					</Link>

					<Link className="button" to="/p6s">
						p6s
					</Link>
					<Link className="button" to="/p7s">
						p7s
					</Link>
					<Link className="button" to="/p8s">
						p8s
					</Link>
				</div>
			</main>
		</>
	);
};

export default BossKilled;
