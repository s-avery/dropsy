// !IMPORT ZONE
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import firebase from "../../firebase";
import { getDatabase, ref, onValue } from "firebase/database";

const P6s = ({
	setCharacterList,
	head,
	setHead,
	hands,
	setHands,
	feet,
	setFeet,
}) => {
	// !COMPONENT MOUNT

	// !FUNCTION ZONE
	// *Increment/Decrements
	const incrementHead = () => {
		setHead(head + 1);
	};
	const decrementHead = () => {
		if (head === 0) {
			console.log("no negatives silly");
		} else {
			setHead(head - 1);
		}
	};

	const incrementHands = () => {
		setHands(hands + 1);
	};
	const decrementHands = () => {
		if (hands === 0) {
			console.log("no negatives silly");
		} else {
			setHands(hands - 1);
		}
	};

	const incrementFeet = () => {
		setFeet(feet + 1);
	};
	const decrementFeet = () => {
		if (feet === 0) {
			console.log("no negatives silly");
		} else {
			setFeet(feet - 1);
		}
	};

	// !RETURN
	return (
		<>
			<header>
				<Link to="/" className="homeButton">
					home
				</Link>

				<h1>ff14 gear planner</h1>

				<h2>what dropped?</h2>
			</header>

			<main>
				<div className="drops">
					<div className="drop">
						<h3>head</h3>
						<button className="button" onClick={incrementHead}>
							+
						</button>
						<p>x{head}</p>
						<button className="button" onClick={decrementHead}>
							-
						</button>
					</div>

					<div className="drop">
						<h3>hands</h3>
						<button className="button" onClick={incrementHands}>
							+
						</button>
						<p>x{hands}</p>
						<button className="button" onClick={decrementHands}>
							-
						</button>
					</div>

					<div className="drop">
						<h3>feet</h3>
						<button className="button" onClick={incrementFeet}>
							+
						</button>
						<p>x{feet}</p>
						<button className="button" onClick={decrementFeet}>
							-
						</button>
					</div>
				</div>

				<div>
					<button className="button">rack em up!</button>
				</div>
			</main>
		</>
	);
};

export default P6s;
