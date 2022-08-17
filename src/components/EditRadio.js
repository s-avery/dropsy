const EditRadio = ({ gearPieces, setGearPieces, nonsenseGearPieces }) => {
	// !Component
	return (
		<div className="charCreate__gearChoices">
			{nonsenseGearPieces.map((gearPiece) => {
				return (
					<>
						<div className="charCreate__option">
							<p>
								{gearPiece.pieceName}:{" "}
								<span
									className={
										gearPiece.wanted === "don't need it"
											? "neutral"
											: gearPiece.wanted === "want it"
											? "red"
											: "green"
									}
								>
									{gearPiece.wanted}
								</span>
							</p>

							{/* //*No Need */}
							<div className="charCreate__radioContainer">
								<div className="charCreate__radio">
									<input
										type="radio"
										name={gearPiece.pieceName}
										id={`noNeed${gearPiece.pieceName}`}
										value={false}
										onChange={() => {
											// *update the label
											gearPiece.wanted = (
												<span className="neutral">
													don't need it
												</span>
											);

											// *updates the actual value
											let newGearArray = [...gearPieces];
											newGearArray.forEach((thingy) => {
												if (
													thingy.pieceName ===
													gearPiece.pieceName
												) {
													thingy.wanted =
														"don't need it";
													setGearPieces(newGearArray);
												}
											});
										}}
										required
									/>
									<label
										htmlFor={`noNeed${gearPiece.pieceName}`}
										className="charCreate__noNeed"
									>
										don't need it
									</label>
								</div>

								{/* //*Want It */}
								<div className="charCreate__radio">
									<input
										type="radio"
										name={gearPiece.pieceName}
										id={`want${gearPiece.pieceName}`}
										value={true}
										// defaultChecked={gearPiece.wanted}
										onChange={() => {
											// *update the label
											gearPiece.wanted = (
												<span className="red">
													want it
												</span>
											);

											// *updates the actual value
											let newGearArray = [...gearPieces];
											newGearArray.forEach((thingy) => {
												if (
													thingy.pieceName ===
													gearPiece.pieceName
												) {
													thingy.wanted = "want it";
													setGearPieces(newGearArray);
												}
											});
										}}
										required
									/>
									<label
										htmlFor={`want${gearPiece.pieceName}`}
										className="charCreate__want"
									>
										want it
									</label>
								</div>

								{/* //*Got It */}
								<div className="charCreate__radio">
									<input
										type="radio"
										name={gearPiece.pieceName}
										id={`got${gearPiece.pieceName}`}
										value={false}
										onChange={() => {
											// *update the label
											gearPiece.wanted = (
												<span className="green">
													got it
												</span>
											);

											// *updates the actual value
											let newGearArray = [...gearPieces];
											newGearArray.forEach((thingy) => {
												if (
													thingy.pieceName ===
													gearPiece.pieceName
												) {
													thingy.wanted = "got it";
													setGearPieces(newGearArray);
												}
											});
										}}
										required
									/>
									<label
										htmlFor={`got${gearPiece.pieceName}`}
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

export default EditRadio;
