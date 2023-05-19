// !IMPORT ZONE
import { Link } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { BossDropsContext } from "../../../providers/BossDropsProvider";
import WhoWantsIt from "../WhoWantsIt";
import HowManyDropped from "./HowManyDropped";

const P9s = ({ characterList }) => {
    const { droppedGear, resetAllDrops } = useContext(BossDropsContext);
    // !COMPONENT MOUNT
    // *reset drop value states
    useEffect(() => {
        //*reset states
        // reset all values to zero
        resetAllDrops();
        setShowWhoWantsIt(false);
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    // !STATE/CONTEXT ZONE
    const [showWhoWantsIt, setShowWhoWantsIt] = useState(false);

    // !FUNCTION ZONE
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
                            {["earring", "necklace", "bracelet", "ring"].map(
                                (gearString) => (
                                    <HowManyDropped
                                        key={gearString}
                                        gearName={gearString}
                                    />
                                )
                            )}
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
                        earring={droppedGear.earring}
                        necklace={droppedGear.necklace}
                        bracelet={droppedGear.bracelet}
                        ring={droppedGear.ring}
                        head={droppedGear.head}
                        body={droppedGear.body}
                        hands={droppedGear.hands}
                        legs={droppedGear.legs}
                        feet={droppedGear.feet}
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
