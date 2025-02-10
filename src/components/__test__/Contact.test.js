import { render, screen } from "@testing-library/react"
import Contact from "../Contact"
import "@testing-library/jest-dom"


test("Should Contact us page render", () => {

    render(<Contact />);

    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
});

test("Should load Button inside Contact us Component", () => {

    render(<Contact />);

    const button = screen.getByRole('button');

    expect(button).toBeInTheDocument();
});

test("Should load Input inside Contact us Component", () => {

    render(<Contact />);

    const input = screen.getAllByRole('textbox');


    expect(input.length).toBe(2)


});