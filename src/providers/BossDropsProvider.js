import { useState, createContext } from "react";

export const BossDropsContext = createContext({});

// defining the actual data object & fns i want to pass down
const BossDropsProvider = ({ children }) => {
    const [droppedGear, setDroppedGear] = useState({
        earring: 0,
        necklace: 0,
        bracelet: 0,
        ring: 0,
        weapon: 0,
        head: 0,
        body: 0,
        hands: 0,
        legs: 0,
        feet: 0,
    });

    const incrementDrops = (droppedGearPiece) =>
        setDroppedGear((currentDroppedGear) => ({
            ...currentDroppedGear,
            [droppedGearPiece]: currentDroppedGear[droppedGearPiece] + 1,
        }));

    const decrementDrops = (droppedGearPiece) =>
        setDroppedGear((currentDroppedGear) => ({
            ...currentDroppedGear,
            [droppedGearPiece]:
                currentDroppedGear[droppedGearPiece] <= 0
                    ? currentDroppedGear[droppedGearPiece]
                    : currentDroppedGear[droppedGearPiece] - 1,
        }));

    // storing those data/fns in an object to be passed to value below
    const currentDropsContext = {
        droppedGear,
        incrementDrops,
        decrementDrops,
    };

    return (
        <BossDropsContext.Provider value={currentDropsContext}>
            {children}
        </BossDropsContext.Provider>
    );
};

export default BossDropsProvider;