// !IMPORT ZONE
import "./App.css";
import firebase from "./firebase";
import { getDatabase, ref, onValue, set } from "firebase/database";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

// *Components
import Home from "./components/Home";
import CharacterSelect from "./components/CharacterSelect";
import CharacterEdit from "./components/CharacterEdit";
import CharacterCreate from "./components/CharacterCreate";
import ErrorPage from "./components/ErrorPage.Js";

// !APP

function App() {
	// !ARRAY ZONE
	// const gearPieces = [
	// 	// { characterName: "", isCharacterName: true },
	// 	{ pieceName: "head", wanted: "" },
	// 	{ pieceName: "body", wanted: "" },
	// 	{ pieceName: "legs", wanted: "" },
	// 	{ pieceName: "feet", wanted: "" },
	// 	{ pieceName: "earring", wanted: "" },
	// 	{ pieceName: "necklace", wanted: "" },
	// 	{ pieceName: "bracelet", wanted: "" },
	// 	{ pieceName: "ring", wanted: "" },
	// ];

	// !STATE ZONE

	// *charName
	const [charName, setCharName] = useState("");

	// *Radio Value
	const [radioValue, setRadioValue] = useState([false]);

	// *Gear Pieces
	const [gearPieces, setGearPieces] = useState([]);

	// *Character List
	const [characterList, setCharacterList] = useState([]);

	// *Object To Push
	// const [objectToPush, setObjectToPush] = useState({});

	// !USE EFFECT ZONE
	useEffect(() => {
		setGearPieces([
			{ pieceName: "head", wanted: "" },
			{ pieceName: "body", wanted: "" },
			{ pieceName: "legs", wanted: "" },
			{ pieceName: "feet", wanted: "" },
			{ pieceName: "earring", wanted: "" },
			{ pieceName: "necklace", wanted: "" },
			{ pieceName: "bracelet", wanted: "" },
			{ pieceName: "ring", wanted: "" },
		]);
	}, []);

	useEffect(() => {
		//*Getting data from database
		// holding the database details from firebase
		const database = getDatabase(firebase);

		// a variable that references a specific location of our database
		const dbRef = ref(database);
		// console.log(dbRef);

		// when db value changes, clg it
		onValue(dbRef, (response) => {
			const newState = [];
			const data = response.val();

			// loop over the data object and push each book title into the newState empty array
			// we've given it multiple info as an object so we can get the key prop (so we can tell firebase how to remove items)
			for (let key in data) {
				newState.push({
					key: key,
					gearListItems: data[key],
					// head: data[key][0],
					// headWanted: data[key][0].wanted,
					// body: data[key][1],
					// legs: data[key][2],
					// feet: data[key][3],
					// earring: data[key][4],
					// necklace: data[key][5],
					// bracelet: data[key][6],
					// ring: data[key][7],
					characterName: data[key].characterName,
				});
			}
			// console.log(newState);

			// update characterList state to hold our character names stored in newState
			setCharacterList(newState);
		});
	}, []);

	// !FUNCTION ZONE
	// *Handle Name Change
	const handleNameChange = (e) => {
		setCharName(e.target.value);
	};

	// *Handle Radio Change
	const handleRadioChange = (gearPiece, e) => {
		setGearPieces((gearPiece.wanted = e.target.value));
	};

	// *Populate Dropdown
	const populateDropdown = () => {
		characterList.map((character) => {
			return (
				<option value={character.characterName}>
					{character.characterName}
				</option>
			);
		});
	};

	// *Handle Form Submit
	const handleSubmit = (e) => {
		e.preventDefault();

		// *if form is valid...
		if (
			!charName ||
			!gearPieces[0].wanted ||
			!gearPieces[1].wanted ||
			!gearPieces[2].wanted ||
			!gearPieces[3].wanted ||
			!gearPieces[4].wanted ||
			!gearPieces[5].wanted ||
			!gearPieces[6].wanted ||
			!gearPieces[7].wanted
		) {
			alert("you gotta click all da boxes");
			console.log(gearPieces);
		} else {
			// *Create references to the database
			const database = getDatabase(firebase);
			const dbRef = ref(database, `${charName}/`);

			// let statelessObjectToPush = { ...objectToPush };

			// *Update ObjectToPush With Data
			let statelessObjectToPush = {
				key: charName,
				characterName: charName,
				gearPiecesObject: { gearPieces },
			};

			// *push to firebase
			console.log("yippee!");
			alert(
				"you did it! i'm so proud of you and your coding skills are sexually hot!"
			);
			set(dbRef, statelessObjectToPush);

			// *clear user input
			setCharName("");
		}
	};

	// !PRINT TO PAGE ZONE
	return (
		<div>
			<Routes>
				<Route
					path="/"
					element={
						<Home
							characterList={characterList}
							setCharacterList={setCharacterList}
						/>
					}
				/>
				<Route
					path="/charSelect"
					element={
						<CharacterSelect
							// characterNamesList={characterNamesList}
							// handleDropdownChange={handleDropdownChange}
							handleSubmit={handleSubmit}
							handleNameChange={handleNameChange}
							// handleRadioChange={handleRadioChange}
							gearPieces={gearPieces}
							setGearPieces={setGearPieces}
							setRadioValue={setRadioValue}
							radioValue={radioValue}
							handleRadioChange={handleRadioChange}
							characterList={characterList}
							setCharacterList={setCharacterList}
							populateDropdown={populateDropdown}
						/>
					}
				/>
				<Route
					path="/charEdit"
					element={
						<CharacterEdit
							handleSubmit={handleSubmit}
							handleNameChange={handleNameChange}
							// handleRadioChange={handleRadioChange}
							gearPieces={gearPieces}
							setGearPieces={setGearPieces}
							setRadioValue={setRadioValue}
							radioValue={radioValue}
							characterList={characterList}
							setCharacterList={setCharacterList}
							populateDropdown={populateDropdown}

							// populateDropdown={populateDropdown}
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
							setRadioValue={setRadioValue}
							radioValue={radioValue}
							gearPieces={gearPieces}
							setGearPieces={setGearPieces}
							handleRadioChange={handleRadioChange}
							characterList={characterList}
							setCharacterList={setCharacterList}
						/>
					}
				/>

				<Route path="*" element={<ErrorPage />} />

				{/* <Route path="*" element={<Error />} /> */}
			</Routes>
		</div>
	);
}
export default App;

// !THE DEPRECATION ZONE

// * old if statement
// ((gearPieces[0].wanted === "noNeed" ||
// 	gearPieces[0].wanted === "want" ||
// 	gearPieces[0].wanted === "got") &&
// 	(gearPieces[1].wanted === "noNeed" ||
// 		gearPieces[1].wanted === "want" ||
// 		gearPieces[1].wanted === "got") &&
// 	(gearPieces[2].wanted === "noNeed" ||
// 		gearPieces[2].wanted === "want" ||
// 		gearPieces[2].wanted === "got") &&
// 	(gearPieces[3].wanted === "noNeed" ||
// 		gearPieces[3].wanted === "want" ||
// 		gearPieces[3].wanted === "got") &&
// 	(gearPieces[4].wanted === "noNeed" ||
// 		gearPieces[4].wanted === "want" ||
// 		gearPieces[4].wanted === "got") &&
// 	(gearPieces[5].wanted === "noNeed" ||
// 		gearPieces[5].wanted === "want" ||
// 		gearPieces[5].wanted === "got") &&
// 	(gearPieces[6].wanted === "noNeed" ||
// 		gearPieces[6].wanted === "want" ||
// 		gearPieces[6].wanted === "got") &&
// 	(gearPieces[7].wanted === "noNeed" ||
// 		gearPieces[7].wanted === "want" ||
// 		gearPieces[7].wanted === "got"))
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

// *Validate Name
// const validateName = () => {
// 	if (charName.trim) {
// 		console.log("name exists!");
// 		setNameValid(true);
// 	}
// };

