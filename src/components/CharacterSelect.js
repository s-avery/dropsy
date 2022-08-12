// !IMPORT ZONE
import { useState, useEffect } from "react";
import { Link, Routes, Route, Outlet } from "react-router-dom";

// *Components

const CharacterSelect = () => {
	return (
		<div>
			<header>
				<h1>ff14 gear planner</h1>

				<h2>choose a guy or make a guy</h2>
			</header>

			<main className="charSelect">
				<div className="charSelect__dropdown">
					<label htmlFor="charSelectDropdown">
						choose an existing character:
					</label>

					<select
						name="charSelectDropdown"
						id="charSelectDropdown"
						placeholder="paisley pudge"
						defaultValue={"placeholder"}
					>
						<option value="placeholder" disabled>
							paisley pudge?
						</option>
					</select>
				</div>

				<div className="charSelect__edit">
					<Link to="/charEdit" className="button">
						edit character
					</Link>
				</div>

				<div className="charSelect__newChar">
					<p>or make a new one:</p>
					<Link to="/charCreate" className="button">
						create character
					</Link>
				</div>
			</main>
		</div>
	);
};

export default CharacterSelect;
