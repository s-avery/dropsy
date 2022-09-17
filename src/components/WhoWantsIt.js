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
}) => {
	// !STATE ZONE
	const [droppedGearState, setDroppedGearState] = useState([]);

	// !COMPONENT MOUNT
	useEffect(() => {}, []);

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

	let statelessCharacterList = [...characterList];

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
							<form className="drops__choices">
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
							</form>
						);
					}
				})
			}
		</>
	);
};

export default WhoWantsIt;
