// !IMPORT ZONE
import { Link } from "react-router-dom";

// !APP
const Home = () => {
    return (
        <div className="home">
            <header>
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
            </main>
        </div>
    );
};

export default Home;
