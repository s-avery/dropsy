// !IMPORT ZONE
import firebase from "../firebase";
import { getDatabase, ref, onValue, set } from "firebase/database";
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
	// !STATE ZONE
	const [droppedGearState, setDroppedGearState] = useState([]);
	const [receiver, setReceiver] = useState({
		earring: "",
		necklace: "",
		bracelet: "",
		ring: "",
	});

	// !COMPONENT MOUNT
	useEffect(() => {}, []);

	// !LOGIC ZONE
	// *array of objects tracking which gear dropped
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

	// *statless charlist to work with
	let statelessCharacterList = [...characterList];

	// *onChange for selecting a player to give a drop to
	const giveDrop = (e) => {
		let charName = e.target.value;
		let dropName = e.target.name;

		let statelessReceiver = { ...receiver };
		statelessReceiver[dropName] = charName;
		setReceiver(statelessReceiver);
	};

	//* handle Submit to give the chosen player their drop
	const handleSubmitGiveDrop = (e) => {
		e.preventDefault();
		// get firebase data
		//#region getting data from firebase
		// holding the database details from firebase
		const database = getDatabase(firebase);

		// a variable that references a specific location of our database
		const dbRef = ref(database);

		// when db value changes, make storage state
		onValue(dbRef, (response) => {
			const statelessCharacterList = [];
			const data = response.val();

			// loop over the data object and push each character into the newState empty array
			// we've given it multiple info as an object so we can get the key prop (so we can tell firebase how to remove items)
			for (let key in data) {
				statelessCharacterList.push({
					key: key,
					gearListItems: data[key],

					characterName: data[key].characterName,
				});
			}

			// update characterList state to hold our character names stored in newState
			setCharacterList(statelessCharacterList);
		});
		//#endregion

		// get array of entries of stateless receiver object
		let statelessReceiver = { ...receiver };
		let entries = Object.entries(receiver);
		// loop thru that array
		entries.forEach((entry) => {
			// make vars for ease of use
			let dropToGive = entry[0];
			let dropReceiver = entry[1];
			if (dropReceiver) {
				// loop thru character list
				statelessCharacterList.forEach((character) => {
					// if the character's name matches the entry's 2nd value (who it goes to:)
					if (character.key === dropReceiver) {
						// mark that gearPiece.wanted in the characterList as "got it"
						// making var for the (very) nested array for ease
						let gearPieces =
							character.gearListItems.gearPiecesObject.gearPieces;
						// loop thru that array
						gearPieces.forEach((gearPiece) => {
							// console.log(gearPiece);
							// if the piece matches the dropToGive:
							if (gearPiece.pieceName === dropToGive) {
								// say they've got it
								gearPiece.wanted = "got it";
							}
						});
					}
				});
			}
		});

		// set firebase db to be equal to new, modified characterList
		// console.log(statelessCharacterList);
		// setCharacterList(statelessCharacterList);
		// set(dbRef, statelessCharacterList);
		// alert("drops distributed!");
	};

	return (
		<form className="drops__choices">
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
								<div className="drops__option">
									<h3>{dropName}</h3>

									{statelessCharacterList.map((character) => {
										return (
											<div className="drops__radio radio">
												<input
													type="radio"
													key={`${character.key}_${dropName}`}
													name={dropName}
													value={character.key}
													id={`${character.key}_${dropName}`}
													onChange={giveDrop}
													required
												/>
												<label
													htmlFor={`${character.key}_${dropName}`}
													key={`${character.key}Label`}
													className="drops__checked green"
												>
													{character.key}
												</label>
											</div>
										);
									})}
								</div>
							</>
						);
					}
				})
			}
			<div className="drops__submit">
				<button
					className="button"
					type="submit"
					onClick={handleSubmitGiveDrop}
				>
					submit!
				</button>
			</div>
		</form>
	);
};

export default WhoWantsIt;
