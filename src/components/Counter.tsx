import React, { FC } from "react";
import { Button } from "./Button";
import { 
    useStateValue, 
    increaseCount, 
    decreaseCount 
} from "../state";

export const Counter: FC = () => {
    const [{ count }, dispatch] = useStateValue();

    const handleIncreament = (): void => dispatch(increaseCount());

    const handleDecreament = (): void => dispatch(decreaseCount());

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