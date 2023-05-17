// !IMPORT ZONE
import "./App.css";
// *firebase
import firebase from "./firebase";
import { getDatabase, ref, onValue, set } from "firebase/database";

// *hooks
import { useState, useEffect } from "react";

// *routes
import { Routes, Route } from "react-router-dom";

// *Components
import Home from "./components/Home";
import CharacterSelect from "./components/characterSelect/CharacterSelect";
import CharacterEdit from "./components/characterSelect/characterEdit/CharacterEdit";
import CharacterCreate from "./components/characterSelect/characterCreate/CharacterCreate";
import ErrorPage from "./components/ErrorPage";
import BossKilled from "./components/bossKilled/BossKilled";

//*raid bosses - may need to be hardcoded to track specific drops, etc
// TODO see if these could be data objects
import P9s from "./components/bossKilled/bosses/P9s";
import P10s from "./components/bossKilled/bosses/P10s";
import P11s from "./components/bossKilled/bosses/P11s";
import P12s from "./components/bossKilled/bosses/P12s";

// !APP

function App() {
    // !STATE ZONE

    // all state managed at App.js
    // *charName - expects string
    // see handleNameChange below
    // pull all of this to a Name context hook
    const [charName, setCharName] = useState("");

    // *Gear Pieces
    const [gearPieces, setGearPieces] = useState([]);

    // *Character List
    const [characterList, setCharacterList] = useState([]);

    // *Dropped Gear
    const [earring, setEarring] = useState(0);
    const [necklace, setNecklace] = useState(0);
    const [bracelet, setBracelet] = useState(0);
    const [ring, setRing] = useState(0);
    const [weapon, setWeapon] = useState(0);
    const [head, setHead] = useState(0);
    const [body, setBody] = useState(0);
    const [hands, setHands] = useState(0);
    const [legs, setLegs] = useState(0);
    const [feet, setFeet] = useState(0);

    const [droppedGear, setDroppedGear] = useState({
        earring: 0,
        necklace: 0,
        bracelet: 0,
        ring: 0,
        weapon: 0,
        head: 0,
        body: 0,
        hands: 0,
        legs: 0,
        feet: 0,
    });

    const incrementDrops = (droppedGearPiece) =>
        setDroppedGear((currentDroppedGear) => ({
            ...currentDroppedGear,
            [droppedGearPiece]: currentDroppedGear[droppedGearPiece] + 1,
        }));

    const decrementDrops = (droppedGearPiece) =>
        setDroppedGear((currentDroppedGear) => ({
            ...currentDroppedGear,
            [droppedGearPiece]:
                currentDroppedGear[droppedGearPiece] <= 0
                    ? currentDroppedGear[droppedGearPiece]
                    : currentDroppedGear[droppedGearPiece] - 1,
        }));

    // !COMPONENT MOUNT
    // *define gearlist
    useEffect(() => {
        setGearPieces([
            { pieceName: "weapon", wanted: "" },
            { pieceName: "head", wanted: "" },
            { pieceName: "body", wanted: "" },
            { pieceName: "hands", wanted: "" },
            { pieceName: "legs", wanted: "" },
            { pieceName: "feet", wanted: "" },
            { pieceName: "earring", wanted: "" },
            { pieceName: "necklace", wanted: "" },
            { pieceName: "bracelet", wanted: "" },
            { pieceName: "ring", wanted: "" },
        ]);
    }, []);

    //*Getting data from database
    useEffect(() => {
        // holding the database details from firebase
        const database = getDatabase(firebase);

        // a variable that references a specific location of our database
        const dbRef = ref(database);

        // when db value changes, make storage state
        onValue(dbRef, (response) => {
            const newState = [];
            const data = response.val();

            // loop over the data object and push each character into the newState empty array
            // we've given it multiple info as an object so we can get the key prop (so we can tell firebase how to remove items)
            for (let key in data) {
                newState.push({
                    key: key,
                    gearListItems: data[key],
                    characterName: data[key].characterName,
                });
            }

            // !Doing it immutably with Alexandra
            // Object.keys to make an array be able to .map
            const keysArray = Object.keys(data);
            // map it
            const immutableState = keysArray.map((key) => {
                return {
                    key: key,
                    gearListItems: data[key],
                    characterName: data[key].characterName,
                };
            });

            // update characterList state to hold our character names stored in newState
            setCharacterList(immutableState);
        });
    }, []);

    // !FUNCTION ZONE
    // *Handle Name Change
    const handleNameChange = (e) => {
        setCharName(e.target.value);
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
                <Route path="/" element={<Home />} />
                <Route path="/charSelect" element={<CharacterSelect />} />
                <Route
                    path="/charEdit"
                    element={
                        <CharacterEdit
                            gearPieces={gearPieces}
                            setGearPieces={setGearPieces}
                            characterList={characterList}
                        />
                    }
                />
                <Route
                    path="/charCreate"
                    element={
                        <CharacterCreate
                            handleSubmit={handleSubmit}
                            handleNameChange={handleNameChange}
                            gearPieces={gearPieces}
                            setGearPieces={setGearPieces}
                        />
                    }
                />

                <Route
                    path="bossKilled"
                    element={<BossKilled setCharacterList={setCharacterList} />}
                />

                <Route
                    path="p9s"
                    element={
                        <P9s
                            droppedGear={droppedGear}
                            setDroppedGear={setDroppedGear}
                            incrementDrops={incrementDrops}
                            decrementDrops={decrementDrops}
                            earring={earring}
                            setEarring={setEarring}
                            necklace={necklace}
                            setNecklace={setNecklace}
                            bracelet={bracelet}
                            setBracelet={setBracelet}
                            ring={ring}
                            setRing={setRing}
                            weapon={weapon}
                            setWeapon={setWeapon}
                            head={head}
                            setHead={setHead}
                            body={body}
                            setBody={setBody}
                            hands={hands}
                            setHands={setHands}
                            legs={legs}
                            setLegs={setLegs}
                            feet={feet}
                            setFeet={setFeet}
                            characterList={characterList}
                        />
                    }
                />

                <Route
                    path="p10s"
                    element={
                        <P10s
                            earring={earring}
                            setEarring={setEarring}
                            necklace={necklace}
                            setNecklace={setNecklace}
                            bracelet={bracelet}
                            setBracelet={setBracelet}
                            ring={ring}
                            setRing={setRing}
                            weapon={weapon}
                            setWeapon={setWeapon}
                            head={head}
                            setHead={setHead}
                            body={body}
                            setBody={setBody}
                            hands={hands}
                            setHands={setHands}
                            legs={legs}
                            setLegs={setLegs}
                            feet={feet}
                            setFeet={setFeet}
                            characterList={characterList}
                        />
                    }
                />

                <Route
                    path="p11s"
                    element={
                        <P11s
                            earring={earring}
                            setEarring={setEarring}
                            necklace={necklace}
                            setNecklace={setNecklace}
                            bracelet={bracelet}
                            setBracelet={setBracelet}
                            ring={ring}
                            setRing={setRing}
                            weapon={weapon}
                            setWeapon={setWeapon}
                            head={head}
                            setHead={setHead}
                            body={body}
                            setBody={setBody}
                            hands={hands}
                            setHands={setHands}
                            legs={legs}
                            setLegs={setLegs}
                            feet={feet}
                            setFeet={setFeet}
                            characterList={characterList}
                        />
                    }
                />

                <Route
                    path="p12s"
                    element={
                        <P12s
                            earring={earring}
                            setEarring={setEarring}
                            necklace={necklace}
                            setNecklace={setNecklace}
                            bracelet={bracelet}
                            setBracelet={setBracelet}
                            ring={ring}
                            setRing={setRing}
                            weapon={weapon}
                            setWeapon={setWeapon}
                            head={head}
                            setHead={setHead}
                            body={body}
                            setBody={setBody}
                            hands={hands}
                            setHands={setHands}
                            legs={legs}
                            setLegs={setLegs}
                            feet={feet}
                            setFeet={setFeet}
                            characterList={characterList}
                        />
                    }
                />

                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </div>
    );
}
export default App;
