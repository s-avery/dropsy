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
	const giveDrop = (e, drop) => {
		// loop thru character list to find matching character name (key)
		statelessCharacterList.forEach((character) => {
			// if character's name matches selected radio value:
			if (character.key === e.target.value) {
				// find matching drop and update its value to "got it"
				// loop thru that character's gearPieces in gearPiecesObject
				character.gearListItems.gearPiecesObject.gearPieces.forEach(
					(gearPiece) => {
						// if its pieceName is the same as e.target.name (this fn can't see dropName but they're equated below):
						if (gearPiece.pieceName === e.target.name) {
							// edit that char to update the drop's value for that char to "got it"
							gearPiece.wanted = "got it";
							console.log(character.key);
							console.log(
								character.gearListItems.gearPiecesObject
									.gearPieces
								// TODO this may need to be done on submit: as is if they click on 2 ppl it will change both. hmmm. is there a "do if checked"? use state? idk
							);
						}
					}
				);
			}
		});
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
				<button className="button" type="submit">
					submit!
				</button>
			</div>
		</form>
	);
};

export default WhoWantsIt;
