// !IMPORT ZONE
import { Link } from "react-router-dom";
import { useEffect } from "react";
import firebase from "../../firebase";
import { getDatabase, ref, onValue } from "firebase/database";
import { bossArray } from "../../singleSourceOfBosses";

const BossKilled = ({ setCharacterList }) => {
    // !COMPONENT MOUNT
    useEffect(() => {
        //*Getting data from database
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

            // update characterList state to hold our character names stored in newState
            setCharacterList(newState);
        });
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <>
            <header>
                <Link to="/" className="homeButton">
                    home
                </Link>

                <h1>dropsy</h1>

                <h2>which boss died?</h2>
            </header>

            <main className="bossKilled">
                <div className="whichBoss">
                    {bossArray.map(({ bossName }) => (
                        <Link className="button" to={`/${bossName}`}>
                            {bossName}
                        </Link>
                    ))}
                </div>
            </main>
        </>
    );
};

export default BossKilled;
