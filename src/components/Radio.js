// !IMPORT ZONE
import { useState } from "react";

const Radio = ({ gearPieces, handleInputChange, handleRadioChange }) => {
	// !STATE ZONE
	const [radioValue, setRadioValue] = useState([]);

	// !Component
	return (
		<div className="charCreate__gearChoices">
			{gearPieces.map((gearPiece) => {
				let testObect = {
					test: "it worked",
				};

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
										onChange={handleRadioChange}
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
										onChange={handleRadioChange}
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
										onChange={handleRadioChange}
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
