import React from 'react'; // Make sure React is imported

import { render, screen } from "@testing-library/react";
import Contact from "../funcs/Contact";
import "@testing-library/jest-dom"

test("should load contact us component", () => {
    render(<Contact/>)

    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument()
})