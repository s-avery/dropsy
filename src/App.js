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

import Boss from "./components/bossKilled/bosses/Boss";
import { bossArray } from "./singleSourceOfBosses";

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

                {bossArray.map(({ bossName, lootTableArray }) => (
                    <Route
                        key={bossName}
                        path={bossName}
                        element={
                            <Boss
                                characterList={characterList}
                                bossName={bossName}
                                bossLootTableArray={lootTableArray}
                            />
                        }
                    />
                ))}

                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </div>
    );
}
export default App;
