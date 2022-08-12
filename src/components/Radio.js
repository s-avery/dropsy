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
		<div className="charCreate__gearChoices">
			{gearPieces.map((gearPiece) => {
				return (
					<>
						<div className="charCreate__option">
							<p>{gearPiece}</p>
							{/* //*No Need */}
							<div className="charCreate__radioContainer">
								<div className="charCreate__radio">
									<input
										type="radio"
										name={gearPiece}
										id={`noNeed${gearPiece}`}
										value={false}
									/>
									<label
										htmlFor={`noNeed${gearPiece}`}
										className="charCreate__noNeed"
									>
										don't need it
									</label>
								</div>

								{/* //*Want It */}
								<div className="charCreate__radio">
									<input
										type="radio"
										name={gearPiece}
										id={`want${gearPiece}`}
										value={true}
									/>
									<label
										htmlFor={`want${gearPiece}`}
										className="charCreate__want"
									>
										want it
									</label>
								</div>

								{/* //*Got It */}
								<div className="charCreate__radio">
									<input
										type="radio"
										name={gearPiece}
										id={`got${gearPiece}`}
										value={false}
									/>
									<label
										htmlFor={`got${gearPiece}`}
										className="charCreate__got"
									>
										got it
									</label>
								</div>
							</div>
						</div>
					</>
				);
			})}
		</div>
	);
};

export default Radio;
