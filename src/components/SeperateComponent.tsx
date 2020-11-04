import React, { FC } from "react";
import { Button } from "./Button";
import { resetCount, useStateValue } from "../state";

export const SeperateComponent: FC = () => {
    const [{ count }, dispatch] = useStateValue();

    const handleFetchAgain = (): void => dispatch(resetCount());

    return (
        <div>
            <h1>Shared Count: {count}</h1>
            <Button handleOnClick={handleFetchAgain}>
                Reset Count
            </Button>
        </div>
    );
}