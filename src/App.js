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

// !APP
function App() {
	// !STATE ZONE
	// *character
	const [character, setCharacter] = useState({
		name: "",
		head: "",
		body: "",
		legs: "",
		feet: "",
		earring: "",
		necklace: "",
		bracelet: "",
		ring: "",
	});

	// *charName
	const [charName, setCharName] = useState([]);

	// *Radio Value
	const [radioValue, setRadioValue] = useState([]);

	// !FUNCTION ZONE
	// *Handle Name Change
	const handleNameChange = (e) => {
		setCharName(e.target.value);
	};

	// *Handle Radio Change
	const handleRadioChange = (e) => {
		setRadioValue(e.target.value);
		// console.log(e.target.value);
	};

	// *Handle Form Submit
	const handleSubmit = (e) => {
		e.preventDefault();
		// create references to the database
		const database = getDatabase(firebase);
		const dbRef = ref(database);

		setCharacter({
			name: charName,
			head: "y",
			body: "y",
			legs: "y",
			feet: "y",
			earring: "y",
			necklace: "y",
			bracelet: "y",
			ring: "123",
		});

		// only push it if it's not an empty string
		if (charName) {
			// add charName to our firebase database. takes two variables: ref to the database, what's being pushed
			push(dbRef, charName);
			push(dbRef, character);

			// clear user input
			setCharName("");

			// alert user
			alert("user info updated!");
		}
	};

	return (
		<div>
			{/* <LandingPage /> */}

			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/charSelect" element={<CharacterSelect />} />
				<Route path="/charEdit" element={<CharacterEdit />} />
				<Route
					path="/charCreate"
					element={
						<CharacterCreate
							handleSubmit={handleSubmit}
							handleNameChange={handleNameChange}
							handleRadioChange={handleRadioChange}
						/>
					}
				/>
			</Routes>
		</div>
	);
}
export default App;

