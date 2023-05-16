import Radio from "./Radio";
import { Link } from "react-router-dom";

const CharacterCreate = ({
    handleSubmit,
    handleNameChange,
    gearPieces,
    setGearPieces,
}) => {
    // *Letting useRadio work

    return (
        <>
            <header>
                <Link to="/" className="homeButton">
                    home
                </Link>

                <h1>dropsy</h1>

                <h2>character creator</h2>
            </header>

            <main>
                <form className="charCreate">
                    {/* //*left container */}
                    <div className="charCreate__leftContainer">
                        <div className="charCreate__charName">
                            <label htmlFor="charName">character name: </label>
                            <input
                                type="text"
                                name="charName"
                                id="charName"
                                className="button"
                                placeholder="paisley pudge?"
                                required="required"
                                onChange={handleNameChange}
                            />
                        </div>
                        <div className="charCreate__instructions">
                            <ol>
                                <li>put in your character name.</li>
                                <li>
                                    for each piece of raid gear, choose if you
                                    don’t need it, want it but don't have it
                                    yet, or got it.
                                </li>
                            </ol>
                        </div>
                        <div className="charCreate__submit">
                            <button
                                type="submit"
                                className="button"
                                onClick={handleSubmit}
                            >
                                submit!
                            </button>
                        </div>
                    </div>

                    {/* //* right container */}
                    <div className="charCreate__rightContainer">
                        {/* Radio receives gearPieces, setGearPieces */}
                        <Radio
                            gearPieces={gearPieces}
                            setGearPieces={setGearPieces}
                        />
                    </div>
                </form>
            </main>
        </>
    );
};

export default CharacterCreate;
