// !IMPORT ZONE
import { useEffect, useState } from "react";
import Radio from "./Radio";
import EditRadio from "./EditRadio";

const CharacterEdit = ({
	handleSubmit,
	handleNameChange,
	gearPieces,
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

	useEffect(() => {}, []);

	// *Handle Dropdown Change
	const handleDropdownChange = (e) => {
		setSelectedCharacterName(e.target.value);
		let statelessCharacterList = [...characterList];

		console.log(statelessCharacterList);
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
									onChange={handleDropdownChange()}
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

					{/* //* mid container */}
					<fieldset className="charCreate__rightContainer">
						{}
					</fieldset>
				</form>
			</main>
		</div>
	);
};

export default CharacterEdit;
