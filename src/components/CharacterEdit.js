// !IMPORT ZONE
import { useEffect, useState } from "react";
import Radio from "./Radio";
import EditRadio from "./EditRadio";

const CharacterEdit = ({
	handleSubmit,
	handleNameChange,
	gearPieces,
	setGearPieces,
	setRadioValue,
	radioValue,
	characterList,
	setCharacterList,
	populateDropdown,
}) => {
	// !STATE ZONE
	// *Selected Character
	const [selectedCharacterName, setSelectedCharacterName] = useState([]);
	const [selectedCharacterGearlist, setselectedCharacterGearlist] = useState(
		{}
	);

	useEffect(() => {
		setSelectedCharacterName([]);
	}, []);

	let newGearArray = [...gearPieces];

	// *Handle Dropdown Change
	const handleDropdownChange = (e) => {
		setSelectedCharacterName(e.target.value);
		characterList.forEach((character) => {
			if (character.characterName === selectedCharacterName) {
				// console.log(character.characterName);
				// *set gearList state
				setGearPieces(
					character.gearListItems.gearPiecesObject.gearPieces
				);
				// newGearArray = [...gearPieces];
				newGearArray = [...gearPieces];
				console.log(newGearArray);

				// *make stateless gearPieces array...
				// const newGearPieces = [
				// 	...character.gearListItems.gearPiecesObject.gearPieces,
				// ];
				// *so we can map over it...
			}
		});
	};

	// !RETURN
	return (
		<div>
			<header>
				<h1>ff14 gear planner</h1>

				<h2>character editor</h2>
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
									//* Populate Dropdown
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
							<button className="button">submit!</button>
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
							newGearArray={newGearArray}
						/>
					</fieldset>
				</form>
			</main>
		</div>
	);
};

export default CharacterEdit;
