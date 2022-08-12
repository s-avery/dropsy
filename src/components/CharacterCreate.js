import Radio from "./Radio";

const CharacterCreate = () => {
	return (
		<div>
			<header>
				<h1>ff14 gear planner</h1>

				<h2>character creator</h2>
			</header>

			<main>
				<form className="charCreate">
					{/* //*left container */}
					<fieldset className="charCreate__leftContainer">
						<div className="charCreate__charName">
							<label htmlFor="charName">character name: </label>
							<input
								type="text"
								name="charName"
								id="charName"
								className="button"
								placeholder="paisley pudge?"
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
						</div>
						<div className="charCreate__submit">
							<button className="button">submit!</button>
						</div>
					</fieldset>

					{/* //* right container */}
					<fieldset className="charCreate__rightContainer">
						<Radio />
					</fieldset>
				</form>
			</main>
		</div>
	);
};

export default CharacterCreate;
