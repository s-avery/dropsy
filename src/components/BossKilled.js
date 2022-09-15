// !IMPORT ZONE
import { Link } from "react-router-dom";
import { useState } from "react";
import firebase from "../firebase";
import { getDatabase, ref, onValue, set } from "firebase/database";

const BossKilled = ({
	earring,
	setEarring,
	necklace,
	setNecklace,
	bracelet,
	setBracelet,
	ring,
	setRing,
	head,
	setHead,
	body,
	setBody,
	hands,
	setHands,
	legs,
	setLegs,
	feet,
	setFeet,
}) => {
	// !STATE ZONE

	return (
		<>
			<header>
				<Link to="/">home</Link>

				<h1>ff14 gear planner</h1>

				<h2>which boss died?</h2>
			</header>

			<main className="bossKilled">
				<div className="whichBoss">
					<Link className="button" to="/p5s">
						p5s
					</Link>

					<Link className="button" to="/p6s">
						p6s
					</Link>
					<Link className="button" to="/p7s">
						p7s
					</Link>
					<button className="button">p8s</button>
				</div>

				<div className="drops">
					<div className="dropButton">
						<button className="button">option 1</button>
						<p>x1</p>
					</div>
					<div className="dropButton">
						<button className="button">option 2</button>
						<p>x1</p>
					</div>
					<div className="dropButton">
						<button className="button">option 3</button>
						<p>x1</p>
					</div>
					<div className="dropButton">
						<button className="button">option 4</button>
						<p>x1</p>
					</div>
				</div>

				<button className="button">who wants it?</button>

				<h3>the following characters want this loot:</h3>
			</main>
		</>
	);
};

export default BossKilled;
