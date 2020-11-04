import React, { useReducer, createContext, useContext } from "react";
import { State, Action } from "../types";

const initialState: State = {
    count: 0
};

export const StateContext = createContext<[State, React.Dispatch<Action>]>([
    initialState,
    () => initialState
]);

interface StateProviderProps {
    reducer: React.Reducer<State, Action>;
    children: React.ReactElement;
}

export const StateProvider: React.FC<StateProviderProps> = ({
    reducer,
    children
}) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <StateContext.Provider value={[state, dispatch]}>
            {children}
        </StateContext.Provider>
    );
};

export const useStateValue = useContext(StateContext);