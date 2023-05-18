import React from "react";

const HowManyDropped = ({
    droppedGear,
    incrementDrops,
    decrementDrops,
    gearName,
}) => {
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
