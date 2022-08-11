const Radio = (props) => {
	const { gearPiece } = props;
	const gearPieces = [
		"head",
		"body",
		"legs",
		"feet",
		"earring",
		"necklace",
		"bracelet",
		"ring",
	];

	return (
		<div>
			{gearPieces.map((gearPiece) => {
				return (
					<div className="charCreate__option">
						<p>{gearPiece}</p>
						<input
							type="radio"
							name={gearPiece}
							id={`noNeed${gearPiece}`}
							value="false"
						/>
						<label htmlFor={`noNeed${gearPiece}`}>
							don't need it
						</label>
						<input
							type="radio"
							name={gearPiece}
							id={`want${gearPiece}`}
							value="true"
						/>
						<label htmlFor={`want${gearPiece}`}>want it</label>
						<input
							type="radio"
							name="{gearPiece}"
							id={`got${gearPiece}`}
							value="false"
						/>
						<label htmlFor={`got${gearPiece}`}>got it</label>
					</div>
				);
			})}
		</div>
	);
};

export default Radio;
