// !IMPORT ZONE
import "./App.css";
import firebase from "./firebase";
import { getDatabase, ref, onValue, push, remove } from "firebase/database";
import { useState, useEffect } from "react";
import { BrowserRouter, Link, Routes, Route, Outlet } from "react-router-dom";

// *Components
import Home from "./components/Home";
import CharacterSelect from "./components/CharacterSelect";
import CharacterEdit from "./components/CharacterEdit";
import CharacterCreate from "./components/CharacterCreate";

// *Create references to the database
const database = getDatabase(firebase);
const dbRef = ref(database);

// !APP
function App() {
	// !ARRAY ZONE
	const gearPieces = [
		// { characterName: "", isCharacterName: true },
		{ pieceName: "head", wanted: "" },
		{ pieceName: "body", wanted: "" },
		{ pieceName: "legs", wanted: "" },
		{ pieceName: "feet", wanted: "" },
		{ pieceName: "earring", wanted: "" },
		{ pieceName: "necklace", wanted: "" },
		{ pieceName: "bracelet", wanted: "" },
		{ pieceName: "ring", wanted: "" },
	];

	// !STATE ZONE
	// *character
	const [character, setCharacter] = useState([]);

	// *charName
	const [charName, setCharName] = useState([]);

	// *Radio Value
	const [radioValue, setRadioValue] = useState([false]);

	// *Dropdown Value
	const [dropdownValue, setDropdownValue] = useState([]);

	// *Name Valid
	const [nameValid, setNameValid] = useState(false);

	// !FUNCTION ZONE
	// *Handle Name Change
	const handleNameChange = (e) => {
		setCharName(e.target.value);
	};

	// *Populate Dropdown
	const characterNamesList = ["zat", "pp", "blibby"];
	// database.forEach((item) => {
	// 	return item.characterName;
	// });

	// *Handle Dropdown Change
	const handleDropdownChange = (e) => {
		setDropdownValue(e.target.value);
	};

	// *Validate Name
	const validateName = () => {
		if (charName.trim) {
			console.log("name exists!");
			setNameValid(true);
		}
	};

	// *Handle Form Submit
	const handleSubmit = (e) => {
		e.preventDefault();

		// *update gearPieces with user name input (radio input updating the array was delegated to within the Radio component cuz it was the best way I found to make it not change the state of EVERY radio button value when one was clicked)
		gearPieces.characterName = charName;

		validateName();

		// *submit it!
		// if (radioValue == true && charName == true) {
		// console.log("valid!");
		// ! add charName to our firebase database. takes two variables: ref to the database, what's being pushed
		// push(dbRef, gearPieces);

		// clear user input
		// setCharName("");

		// alert user
		// console.log(gearPieces);
		// alert("user info updated!");
		// }
		// *if not, alert user
		// else {
		// console.log(gearPieces);
		// console.log("form invalid");
		// alert("please fill out all the boxes!");
		// }
	};

	// !PRINT TO PAGE ZONE
	return (
		<div>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route
					path="/charSelect"
					element={
						<CharacterSelect
							characterNamesList={characterNamesList}
							dropdownValue={dropdownValue}
							handleDropdownChange={handleDropdownChange}
							handleSubmit={handleSubmit}
							handleNameChange={handleNameChange}
							// handleRadioChange={handleRadioChange}
							gearPieces={gearPieces}
							setRadioValue={setRadioValue}
							radioValue={radioValue}
						/>
					}
				/>
				<Route
					path="/charEdit"
					element={
						<CharacterEdit
							dropdownValue={dropdownValue}
							handleSubmit={handleSubmit}
							handleNameChange={handleNameChange}
							// handleRadioChange={handleRadioChange}
							gearPieces={gearPieces}
							setRadioValue={setRadioValue}
							radioValue={radioValue}
							characterNamesList={characterNamesList}
						/>
					}
				/>
				<Route
					path="/charCreate"
					element={
						<CharacterCreate
							handleSubmit={handleSubmit}
							handleNameChange={handleNameChange}
							// handleRadioChange={handleRadioChange}
							gearPieces={gearPieces}
							setRadioValue={setRadioValue}
							radioValue={radioValue}
						/>
					}
				/>
			</Routes>
		</div>
	);
}
export default App;

// !THE DEPRECATION ZONE
// *Handle Radio Change
// const handleRadioChange = (e) => {
// 	setRadioValue(e.target.value);
// 	console.log(e.target.value);
// };

// *updating gearPieces object with radioValue state
// gearPieces.forEach((gearPiece) => {
// 	gearPiece.wanted = radioValue;
// });

// *Turn GearPieces Array Into Object
// sourced from: https://stackoverflow.com/questions/54789406/convert-array-to-object-keys
// let gearPiecesObject = gearPieces.reduce(
// 	(acc, curr) => ((acc[curr] = ""), acc),
// 	{}
// );

// adding charName to it
// gearPiecesObject.push({ charName });
// console.log(gearPiecesObject);

// *Declare variable for radio select's value
// const { radioSelected, render } = useRadio();
// <Radio {...{ radioSelected }} />;

// *Feed gearPiecesObject values equal to each gearPiece's radio selected value
// for (const gearPiece in gearPiecesObject) {
// 	gearPiecesObject[gearPiece] = { radioValue };
// 	console.log(gearPiecesObject);
// }

// *only push to database if all slots have been filled
// *formatting it as: if the condititions aren't met, setFormValid to false
// gearPieces.forEach((item) => {
// 	if (
// 		// *if gearPieces item has wanted value, it must not be empty (aka be either true or false)
// item.wanted !== (true || false) &&
// 		// *if it's the characterName item, it's allowed to not have a wanted value
// 		item !== "characterName"
// 	) {
// 		setFormValid(false);
// 	}
// 	// *if conditions are met, make form valid
// 	else {
// 		setFormValid(true);
// 	}
// });

// *if form is valid...
// if (
// 	// gearPieces.characterName &&
// 	gearPieces[0].wanted === (true || false) &&
// 	gearPieces[1].wanted === (true || false) &&
// 	gearPieces[2].wanted === (true || false) &&
// 	gearPieces[3].wanted === (true || false) &&
// 	gearPieces[4].wanted === (true || false) &&
// 	gearPieces[5].wanted === (true || false) &&
// 	gearPieces[6].wanted === (true || false) &&
// 	gearPieces[7].wanted === (true || false)

// ) {

