// !IMPORT ZONE
import Radio from "./Radio";

const CharacterEdit = () => {
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
							<h3>paisley pudge</h3>
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
						<Radio />
					</fieldset>
				</form>
			</main>
		</div>
	);
};

export default CharacterEdit;
