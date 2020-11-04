import { reducer, increaseCount, decreaseCount, resetCount } from "../../state";
import { State, Action } from "../../types"; 
import { cleanup } from "@testing-library/react";

const initialState: State = {
    count: 0
}

afterAll(() => {
    cleanup();
});

describe("Reducer", () => {
    test("should returns initial state on first run", () => {
        const expectedState = initialState;
        const action = {} as Action

        const newState: State = reducer(initialState, action);

        expect(newState).toEqual(expectedState);
    });

    test("should increase count by 1", () => {
        const expectedState = {
            count: 1
        };

        const action = increaseCount();

        const newState: State = reducer(initialState, action);

        expect(newState).toEqual(expectedState);
    });

    test("should decrease count by 1", () => {
        const expectedState = {
            count: -1
        };

        const action = decreaseCount();

        const newState: State = reducer(initialState, action);

        expect(newState).toEqual(expectedState);
    });

    test("should reset count to 0", () => {
        const expectedState = initialState;

        const previousState = {
            count: 3
        };

        const action = resetCount();

        const newState: State = reducer(previousState, action);

        expect(newState).toEqual(expectedState);
    });
});