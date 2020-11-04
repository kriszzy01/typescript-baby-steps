import React, { FC, ReactElement } from "react";

interface ButtonProps {
    children: ReactElement;
    handleOnClick: () => void;
}

export const Button: FC<ButtonProps> = ({ children, handleOnClick }) => {
    const handleButtonClick = (): void => handleOnClick();

    return (
        <button onClick={handleButtonClick}>
            {children}
        </button>
    );
};