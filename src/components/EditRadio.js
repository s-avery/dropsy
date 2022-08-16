import { useEffect, useState } from "react";

const EditRadio = ({
	characterList,
	selectedCharacterName,
	setSelectedCharacterName,
	gearPieces,
}) => {
	useEffect(() => {
		// setSelectedCharacterName("");
	}, []);

	// *run thru that array to do things...
	return (
		<div>
			{gearPieces.map((gearPiece) => {
				return <div>test</div>;
			})}
		</div>
	);
};
export default EditRadio;
