import Radio from "./Radio";
import { Link } from "react-router-dom";

const CharacterCreate = ({
	handleSubmit,
	handleNameChange,
	gearPieces,
	setGearPieces,
	setRadioValue,
	radioValue,
}) => {
	// *Letting useRadio work

	return (
		<>
			<header>
				<Link to="/" className="homeButton">
					home
				</Link>

				<h1>ff14 gear planner</h1>

				<h2>character editor</h2>
			</header>

			<main>
				<form className="charCreate">
					{/* //*left container */}
					<div className="charCreate__leftContainer">
						<div className="charCreate__charName">
							<label htmlFor="charName">character name: </label>
							<input
								type="text"
								name="charName"
								id="charName"
								className="button"
								placeholder="paisley pudge?"
								required="required"
								onChange={handleNameChange}
							/>
						</div>
						<div className="charCreate__instructions">
							<ol>
								<li>put in your character name.</li>
								<li>
									for each piece of raid gear, choose if you
									don’t need it, want it but don't have it
									yet, or got it.
								</li>
							</ol>
							<p>
								note: this assumes everyone wants the weapon &
								chestpiece by default.
							</p>
						</div>
						<div className="charCreate__submit">
							<button
								type="submit"
								className="button"
								onClick={handleSubmit}
							>
								submit!
							</button>
						</div>
					</div>

					{/* //* right container */}
					<div className="charCreate__rightContainer">
						<Radio
							handleNameChange={handleNameChange}
							setRadioValue={setRadioValue}
							gearPieces={gearPieces}
							setGearPieces={setGearPieces}
							radioValue={radioValue}
						/>
					</div>
				</form>
			</main>
		</>
	);
};

export default CharacterCreate;
