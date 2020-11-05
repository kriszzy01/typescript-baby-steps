import React, { FC, ReactNode } from "react";

export interface ButtonProps {
    children: ReactNode;
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