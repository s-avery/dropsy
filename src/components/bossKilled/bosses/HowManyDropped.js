import React, { useContext } from "react";
import { BossDropsContext } from "../../../providers/BossDropsProvider";

const HowManyDropped = ({ gearName }) => {
    const { droppedGear, incrementDrops, decrementDrops } =
        useContext(BossDropsContext);
    return (
        <div className="drop">
            <h3>{gearName}</h3>
            <button className="button" onClick={() => incrementDrops(gearName)}>
                +
            </button>
            <p>x{droppedGear[gearName]}</p>
            <button className="button" onClick={() => decrementDrops(gearName)}>
                -
            </button>
        </div>
    );
};

export default HowManyDropped;
