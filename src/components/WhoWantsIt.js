// !IMPORT ZONE
import firebase from "../firebase";
import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";
/* PSEUDO CODE: WHO WANTS WHAT
                - look at the states of what dropped
                - access the firebase db of characters

                         
                - on submit button:
                    - update each selected character's value for that gearpiece to "got"
                    - do it all locally? download data and do an onchange on the radio buttons?
                        - would mean downloading the entire firebase in batch and then setting it to update with the new values but that's probably fine?
                         */
const WhoWantsIt = ({
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
}) => {
	// !STATE ZONE
	const [droppedGearState, setDroppedGearState] = useState([]);

	// !COMPONENT MOUNT
	useEffect(() => {
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
	}, []);

	// for each drop, .map to see:
	// droppedGearArray.map((drop) => {
	// 	// if it DID drop:
	// 	return drop > 0 ? "test" : "";
	// });
	// print an h3 of the gearpiece's name
	// if a character wants it:
	// print radio options for that character

	let droppedGearArray = [
		{ earring },
		{ necklace },
		{ bracelet },
		{ ring },
		{ head },
		{ body },
		{ hands },
		{ legs },
		{ feet },
	];
	return (
		<>
			{
				// for each drop...
				droppedGearArray.map((drop) => {
					// get the keys & values as string/int
					let dropName = Object.keys(drop).toString();
					// console.log(dropName);
					let dropValue = Object.values(drop).toString();
					// console.log(dropValue);

					// print it if it has dropped
					if (dropValue > 0) {
						return (
							<>
								<h3>{dropName}</h3>
							</>
						);
					}
				})
			}
		</>
	);
};

export default WhoWantsIt;
