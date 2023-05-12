// !IMPORT ZONE
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import WhoWantsIt from "../WhoWantsIt";

const P12s = ({
    //#region props
    characterList,
    earring,
    setEarring,
    necklace,
    setNecklace,
    bracelet,
    setBracelet,
    ring,
    setRing,
    weapon,
    setWeapon,
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
    //#endregion
}) => {
    // !COMPONENT MOUNT
    // *reset drop value states
    useEffect(() => {
        //*reset states
        setEarring(0);
        setNecklace(0);
        setBracelet(0);
        setRing(0);
        setWeapon(0);
        setHead(0);
        setBody(0);
        setHands(0);
        setLegs(0);
        setFeet(0);
        setShowWhoWantsIt(false);
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    // !STATE ZONE
    const [showWhoWantsIt, setShowWhoWantsIt] = useState(false);

    // !FUNCTION ZONE
    // *Increment/Decrements
    //#region
    const incrementWeapon = () => {
        setWeapon(weapon + 1);
    };
    const decrementWeapon = () => {
        if (weapon === 0) {
            console.log("no negatives silly");
        } else {
            setWeapon(weapon - 1);
        }
    };

    const incrementBody = () => {
        setBody(body + 1);
    };
    const decrementBody = () => {
        if (body === 0) {
            console.log("no negatives silly");
        } else {
            setBody(body - 1);
        }
    };
    //#endregion

    const rackEmUp = () => {
        setShowWhoWantsIt(true);
    };
    return (
        <>
            <header>
                <Link to="/" className="homeButton">
                    home
                </Link>

                <h1>ff14 gear planner</h1>
            </header>

            <main>
                {showWhoWantsIt ? (
                    ""
                ) : (
                    <>
                        <div className="drops">
                            <div className="drop">
                                <h3>weapon</h3>
                                <button
                                    className="button"
                                    onClick={incrementWeapon}
                                >
                                    +
                                </button>
                                <p>x{weapon}</p>
                                <button
                                    className="button"
                                    onClick={decrementWeapon}
                                >
                                    -
                                </button>
                            </div>
                            <div className="drop">
                                <h3>body</h3>
                                <button
                                    className="button"
                                    onClick={incrementBody}
                                >
                                    +
                                </button>
                                <p>x{body}</p>
                                <button
                                    className="button"
                                    onClick={decrementBody}
                                >
                                    -
                                </button>
                            </div>
                        </div>
                        <div>
                            <button className="button" onClick={rackEmUp}>
                                rack em up!
                            </button>
                        </div>
                    </>
                )}

                {showWhoWantsIt ? (
                    <WhoWantsIt
                        characterList={characterList}
                        earring={earring}
                        necklace={necklace}
                        bracelet={bracelet}
                        ring={ring}
                        head={head}
                        weapon={weapon}
                        body={body}
                        hands={hands}
                        legs={legs}
                        feet={feet}
                        setShowWhoWantsIt={setShowWhoWantsIt}
                    />
                ) : (
                    ""
                )}
            </main>
        </>
    );
};

export default P12s;
