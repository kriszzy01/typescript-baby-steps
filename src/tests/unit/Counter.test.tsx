import React from "react";
import { render, screen } from "@testing-library/react";
import { Counter } from "../../components/Counter";

describe("Counter", () => {
    test("renders counter", () => {
        render(<Counter />);
        
        expect(screen.getByRole("heading", { name: /count: 0/i})).toBeInTheDocument();
        expect(screen.getAllByRole("button")).toHaveLength(2);
    });
});