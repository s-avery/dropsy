// !IMPORT ZONE
import Radio from "./Radio";

const CharacterEdit = ({
	handleSubmit,
	handleNameChange,
	gearPieces,
	setRadioValue,
	radioValue,
	dropdownValue,
	characterNamesList,
}) => {
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
								>
									<option value="placeholder" disabled>
										who's it gonna be
									</option>

									{characterNamesList.map((character) => {
										return (
											<option value={character}>
												{character}
											</option>
										);
									})}
								</select>
							</div>{" "}
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
						<Radio
							handleNameChange={handleNameChange}
							setRadioValue={setRadioValue}
							gearPieces={gearPieces}
							radioValue={radioValue}
						/>
					</fieldset>
				</form>
			</main>
		</div>
	);
};

export default CharacterEdit;
