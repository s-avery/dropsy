const NameInstructionsCreator = () => {
	return (
		<div>
			<div className="charCreate__charName">
				<label htmlFor="charName">character name: </label>
				<input
					type="text"
					name="charName"
					id="charName"
					placeholder="paisley pudge?"
				/>
			</div>
			<div className="charCreate__instructions">
				<ol>
					<li>put in your character name.</li>
					<li>
						for each piece of raid gear, choose if you don’t need
						it, want it but don't have it yet, or got it.
					</li>
				</ol>
			</div>
			<div className="charCreate__submit">
				<button>submit!</button>
			</div>
		</div>
	);
};

export default NameInstructionsCreator;
