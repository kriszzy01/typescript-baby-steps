import React from "react";
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button, ButtonProps } from "../../components/Button";

const buttonProps: ButtonProps = {
    children: "Test Button",
    handleOnClick: jest.fn()
};

describe("Button", () => {
    test("renders button and calls handler", () => {
        render(<Button {...buttonProps} />);

        const button = screen.getByRole("button", { name: /test button/i });

        expect(button).toBeInTheDocument();

        userEvent.click(button);

        expect(buttonProps.handleOnClick).toHaveBeenCalledTimes(1);
    });
});