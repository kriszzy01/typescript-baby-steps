import React, { FC } from "react";
import { Button } from "./Button";
import { 
    useStateValue, 
    increaseCount, 
    decreaseCount 
} from "../state";

export const Counter: FC = () => {
    const [{ count }, dispatch] = useStateValue();

    const handleIncreament = () => dispatch(increaseCount());

    const handleDecreament = () => dispatch(decreaseCount());

    return (
        <div>
            <h5>Count: {count}</h5>

            <div>
                <Button handleOnClick={handleIncreament}>+</Button>
                <Button handleOnClick={handleDecreament}>-</Button>
            </div>
        </div>
    );
};