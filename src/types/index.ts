export interface State {
    count: number
}

export type Action =
    | { type: "INCREAMENT" }
    | { type: "DECREAMENT" }
    | { type: "RESET" }