// !IMPORT ZONE
import { useState } from "react";
import { Link } from "react-router-dom";

// !APP
const Home = () => {
    // *State Zone
    // state that tracks whether info popup is shown
    const [showInfo, setShowInfo] = useState(false);

    // *Function Zone
    const toggleShowInfo = () => {
        setShowInfo(!showInfo);
    };
    return (
        <div className="home">
            <header>
                <button className="homeButton" onClick={toggleShowInfo}>
                    {showInfo ? <>hide</> : <>info</>}
                </button>

                {showInfo ? (
                    <div className="aboutContainer">
                        <p className="about">
                            this is a tool to track which members of a group
                            need a given piece of dropped raid gear.
                        </p>
                        <p className="about">
                            after you create a profile for each character,
                            dropsy will track who needs drops week to week.
                            spreadsheets begone!
                        </p>
                    </div>
                ) : (
                    ""
                )}

                <h1>dropsy</h1>

                <h2>a loot distribution tool for ff14</h2>
            </header>

            <main>
                <Link to="/charSelect" className="button">
                    view characters
                </Link>
                <Link to="/bossKilled" className="button">
                    we killed a boss!
                </Link>
                <p className="about">
                    this is a tool to track which members of a group need a
                    given piece of dropped raid gear.
                </p>
                <p className="about">
                    after you create a profile for each character, dropsy will
                    track who needs drops week to week. spreadsheets begone!
                </p>
            </main>
        </div>
    );
};

export default Home;
