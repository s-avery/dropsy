// !IMPORT ZONE
import { useEffect, useState } from "react";
import firebase from "../firebase";
import { getDatabase, ref, set } from "firebase/database";
import EditRadio from "./EditRadio";
import { Link } from "react-router-dom";

const CharacterEdit = ({
	gearPieces,
	setGearPieces,
	characterList,
	setCharacterList,
}) => {
	// !STATE ZONE
	// *Selected Character
	const [selectedCharacterName, setSelectedCharacterName] = useState([]);

	// *Object to Update
	// const [objectToUpdate, setObjectToUpdate] = useState({});

	// *nonsense
	const [nonsenseGearPieces, setNonsenseGearPieces] = useState([]);

	// !USE EFFECT ZONE
	useEffect(() => {
		characterList.forEach((character) => {
			if (character.characterName === selectedCharacterName) {
				// *set gearList state
				setNonsenseGearPieces(
					character.gearListItems.gearPiecesObject.gearPieces
				);
			}
		});
	}, [selectedCharacterName]);

	// !FUNCTION ZONE
	// *Handle Dropdown Change
	const handleDropdownChange = (e) => {
		setSelectedCharacterName(e.target.value);
	};

	// *Handle Edit Submit
	const handleEditSubmit = (e) => {
		e.preventDefault();
		// *if form is valid...
		if (
			!selectedCharacterName ||
			!gearPieces[0].wanted ||
			!gearPieces[1].wanted ||
			!gearPieces[2].wanted ||
			!gearPieces[3].wanted ||
			!gearPieces[4].wanted ||
			!gearPieces[5].wanted ||
			!gearPieces[6].wanted ||
			!gearPieces[7].wanted
		) {
			//* then...
			alert(
				"you must select a value for each option. (sorry i couldn't make it select a radio option by default without breaking it lol)"
			);
		} else {
			// *Create references to the database
			const database = getDatabase(firebase);
			const dbRef = ref(database, `${selectedCharacterName}/`);

			// *setObjectToUpdate to include our new data
			let statelessObjectToUpdate = {
				key: selectedCharacterName,
				characterName: selectedCharacterName,
				gearPiecesObject: { gearPieces },
			};

			// *update it
			set(dbRef, statelessObjectToUpdate);
			alert("character updated!");
		}
	};

	// !RETURN
	return (
		<div>
			<header>
				<h1>ff14 gear planner</h1>

				<h2>character editor</h2>

				<Link to="/" className="homeButton">
					home
				</Link>
			</header>

			<main>
				<form className="charCreate">
					{/* //*left container */}
					<fieldset className="charCreate__leftContainer">
						<div className="charCreate__charName">
							<div className="charSelect__dropdown">
								<label htmlFor="charSelectDropdown">
									choose a character:
								</label>

								<select
									name="charSelectDropdown"
									id="charSelectDropdown"
									placeholder="paisley pudge"
									defaultValue={"placeholder"}
									onChange={handleDropdownChange}
								>
									<option value="placeholder" disabled>
										who's it gonna be
									</option>

									{/* //* Populate Dropdown */}
									{characterList.map((character) => {
										return (
											<option
												key={character.key}
												value={character.characterName}
											>
												{character.characterName}
											</option>
										);
									})}
								</select>

								<p>character name:</p>

								<h2>{selectedCharacterName}</h2>
							</div>
						</div>
						<div className="charCreate__instructions">
							<p>
								for each piece of raid gear, choose if you don’t
								need it, want it but don't have it yet, or got
								it.
							</p>
						</div>
						<div className="charCreate__submit">
							<button
								className="button"
								onClick={handleEditSubmit}
							>
								submit!
							</button>
						</div>{" "}
					</fieldset>

					{/* //* right container */}
					<fieldset className="charCreate__rightContainer">
						<EditRadio
							characterList={characterList}
							setCharacterList={setCharacterList}
							selectedCharacterName={selectedCharacterName}
							setSelectedCharacterName={setSelectedCharacterName}
							gearPieces={gearPieces}
							setGearPieces={setGearPieces}
							nonsenseGearPieces={nonsenseGearPieces}
							// newGearArray={newGearArray}
						/>
					</fieldset>
				</form>
			</main>
		</div>
	);
};

export default CharacterEdit;
