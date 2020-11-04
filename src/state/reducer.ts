import { State, Action } from "../types";

export const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case "INCREAMENT":
            return {
                ...state,
                count: state.count + 1
            }
        case "DECREAMENT":
            return {
                ...state,
                count: state.count - 1
            }
        case "RESET":
            return {
                ...state,
                count: 0
            }
        default:
            return state
    }
};

export const increaseCount = (): Action => {
    return {type: "INCREAMENT"};
};

export const decreaseCount = (): Action => {
    return {type: "DECREAMENT"};
};

export const resetCount = (): Action => {
    return {type: "RESET"};
};