import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import { StateProvider, reducer } from "../../state";
import App from "../../App";

beforeEach(() => {
  render(
    <StateProvider reducer={reducer}>
      <App />
    </StateProvider>)
});

describe("App", () => {
  test('renders App', () => {
    expect(screen.getAllByText(/count: 0/i)).toHaveLength(2);
    expect(screen.getByRole("heading", { name: /shared count/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "+" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "-" })).toBeInTheDocument();
  });

  test("increases, decreases, and resets count", () => {

    const count = screen.getAllByRole("heading");

    expect(count[0]).toBeInTheDocument();
    expect(screen.getByText(/^shared/i)).toBeInTheDocument();

    userEvent.dblClick(screen.getByRole("button", { name: "+" }));

    expect(count[0]).toBeInTheDocument();
    expect(screen.getByText(/^shared/i)).toBeInTheDocument();

    userEvent.click(screen.getByRole("button", { name: "-" }));

    expect(count[0]).toBeInTheDocument();
    expect(screen.getByText(/^shared/i)).toBeInTheDocument();

    userEvent.click(screen.getByRole("button", { name: /reset count/i }));

    expect(count[0]).toBeInTheDocument();
    expect(screen.getByText(/^shared/i)).toBeInTheDocument();
  });
});
