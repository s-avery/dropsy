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
import ErrorPage from "./components/ErrorPage";

// !APP

function App() {
	// !STATE ZONE

	// *charName
	const [charName, setCharName] = useState("");

	// *Radio Value
	const [radioValue, setRadioValue] = useState([false]);

	// *Gear Pieces
	const [gearPieces, setGearPieces] = useState([]);

	// *Character List
	const [characterList, setCharacterList] = useState([]);

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

					characterName: data[key].characterName,
				});
			}

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
			alert("you must select a value for each option. silly.");
			console.log(gearPieces);
		} else {
			// Create references to the database
			const database = getDatabase(firebase);
			const dbRef = ref(database, `${charName}/`);

			// Update ObjectToPush With Data
			let statelessObjectToPush = {
				key: charName,
				characterName: charName,
				gearPiecesObject: { gearPieces },
			};

			// push to firebase
			alert("character created!");
			set(dbRef, statelessObjectToPush);

			// clear user input
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
							handleSubmit={handleSubmit}
							handleNameChange={handleNameChange}
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
							gearPieces={gearPieces}
							setGearPieces={setGearPieces}
							setRadioValue={setRadioValue}
							radioValue={radioValue}
							characterList={characterList}
							setCharacterList={setCharacterList}
							populateDropdown={populateDropdown}
						/>
					}
				/>
				<Route
					path="/charCreate"
					element={
						<CharacterCreate
							handleSubmit={handleSubmit}
							handleNameChange={handleNameChange}
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
			</Routes>
		</div>
	);
}
export default App;
