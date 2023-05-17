// TODO calling the "incrementDrops" fn as an onclick on this buttons crashes & returns the following error:
// Warning: Cannot update a component (`App`) while rendering a different component (`P9s`). To locate the bad setState() call inside `P9s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render
// P9s@http://localhost:3000/main.947304dc3a4c20ffd5c0.hot-update.js:63:7
// Routes@http://localhost:3000/static/js/bundle.js:62099:7
// div
// App@http://localhost:3000/static/js/bundle.js:71:82
// Router@http://localhost:3000/static/js/bundle.js:62036:7
// BrowserRouter@http://localhost:3000/static/js/bundle.js:60842:7
// TODO I assume that this is where we need to use context hook? I'm going to leave this for us to investigate together

// !IMPORT ZONE
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import WhoWantsIt from "../WhoWantsIt";

const P9s = ({
    //#region props
    droppedGear,
    setDroppedGear,
    incrementDrops,
    decrementDrops,
    characterList,
    earring,
    setEarring,
    necklace,
    setNecklace,
    bracelet,
    setBracelet,
    ring,
    setRing,
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
    const incrementEarring = () => {
        setEarring(earring + 1);
    };
    const decrementEarring = () => {
        if (earring === 0) {
            console.log("no negatives silly");
        } else {
            setEarring(earring - 1);
        }
    };

    const incrementNecklace = () => {
        setNecklace(necklace + 1);
    };
    const decrementNecklace = () => {
        if (necklace === 0) {
            console.log("no negatives silly");
        } else {
            setNecklace(necklace - 1);
        }
    };

    const incrementBracelet = () => {
        setBracelet(bracelet + 1);
    };
    const decrementBracelet = () => {
        if (bracelet === 0) {
            console.log("no negatives silly");
        } else {
            setBracelet(bracelet - 1);
        }
    };

    const incrementRing = () => {
        setRing(ring + 1);
    };
    const decrementRing = () => {
        if (ring === 0) {
            console.log("no negatives silly");
        } else {
            setRing(ring - 1);
        }
    };
    //#endregion

    const rackEmUp = () => {
        setShowWhoWantsIt(true);
    };

    // !RETURN
    return (
        <>
            <header>
                <Link to="/" className="homeButton">
                    home
                </Link>

                <h1>dropsy</h1>

                <h2>what dropped?</h2>
            </header>

            <main>
                {showWhoWantsIt ? (
                    ""
                ) : (
                    <>
                        <div className="drops">
                            <div className="drop">
                                <h3>earring</h3>
                                <button
                                    className="button"
                                    onClick={incrementEarring}
                                >
                                    +
                                </button>
                                <p>x{earring}</p>
                                <button
                                    className="button"
                                    onClick={decrementEarring}
                                >
                                    -
                                </button>
                            </div>

                            <div className="drop">
                                <h3>necklace</h3>
                                <button
                                    className="button"
                                    onClick={incrementNecklace}
                                >
                                    +
                                </button>
                                <p>x{necklace}</p>
                                <button
                                    className="button"
                                    onClick={decrementNecklace}
                                >
                                    -
                                </button>
                            </div>

                            <div className="drop">
                                <h3>bracelet</h3>
                                <button
                                    className="button"
                                    onClick={incrementBracelet}
                                >
                                    +
                                </button>
                                <p>x{bracelet}</p>
                                <button
                                    className="button"
                                    onClick={decrementBracelet}
                                >
                                    -
                                </button>
                            </div>

                            <div className="drop">
                                <h3>ring</h3>
                                <button
                                    className="button"
                                    onClick={incrementRing}
                                >
                                    +
                                </button>
                                <p>x{ring}</p>
                                <button
                                    className="button"
                                    onClick={decrementRing}
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

export default P9s;
