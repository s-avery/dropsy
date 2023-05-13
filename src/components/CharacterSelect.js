// !IMPORT ZONE
import { Link } from "react-router-dom";

// *Components

const CharacterSelect = () => {
    return (
        <div>
            <header>
                <Link to="/" className="homeButton">
                    home
                </Link>

                <h1>dropsy</h1>

                <h2>a loot distribution tool for ff14</h2>
            </header>

            <main className="charSelect">
                <div className="charSelect__edit">
                    <p>edit an existing character:</p>
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
