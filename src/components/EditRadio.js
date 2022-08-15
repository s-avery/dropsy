import { useEffect, useState } from "react";

const EditRadio = ({
	characterList,
	selectedCharacterName,
	setSelectedCharacterName,
}) => {
	useEffect(() => {
		setSelectedCharacterName("");
	}, []);

	let statelessCharacterList = [...characterList];
	statelessCharacterList.forEach((character) => {
		if (character.characterName === selectedCharacterName) {
			const newGearPieces = [
				...character.gearListItems.gearPiecesObject.gearPieces,
			];
			newGearPieces.map((gearPieces) => {
				return gearPieces.pieceName;
			});
		}
	});
};
export default EditRadio;
