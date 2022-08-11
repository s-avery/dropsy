// !IMPORT ZONE
import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter, Link, Routes, Route, Outlet } from "react-router-dom";

// *Components
import Home from "./components/Home";
import CharacterSelect from "./components/CharacterSelect";
import CharacterEdit from "./components/CharacterEdit";
import CharacterCreate from "./components/CharacterCreate";

// !STATE ZONE

// !APP
function App() {
	return (
		<div>
			{/* <LandingPage /> */}

			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/charSelect" element={<CharacterSelect />} />
				<Route path="/charEdit" element={<CharacterEdit />} />
				<Route path="/charCreate" element={<CharacterCreate />} />
			</Routes>
		</div>
	);
}

export default App;

