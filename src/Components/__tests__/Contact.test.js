import { render } from "@testing-library/react"
import Contact from "../Contact"
import "@testing-library/jest-dom";
import { screen } from "@testing-library/react";


describe("Contact US Page Test Cases", ()=> { 

    // beforeAll(()=> {
    //     console.log("Before All");
    // })

    // beforeEach(()=> {
    //     console.log("Before Each")
    // })

    // afterEach(()=> {
    //     console.log("After Each");
    // })

    // afterAll(()=> {
    //     console.log("After All");
    // })

test("Should load contact us component", () => {
    render(<Contact/>);

    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
})

test("Should load button inside Contact component", () => {
    render(<Contact/>);

    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
})

test("Should load text inside Contact component", () => {
    render(<Contact/>);

    const button = screen.getByText("Submit");

    expect(button).toBeInTheDocument();
})

test("Should load input name inside Contact component", () => {
    render(<Contact/>);

    const inputName = screen.getByPlaceholderText("name");

    expect(inputName).toBeInTheDocument();
})

test("Should load 2 input boxes inside Contact component", () => {
    render(<Contact/>);

    //Querying
    const inputBoxes = screen.getAllByRole("textbox");

    //Assertion
    expect(inputBoxes.length).toBe(2);
})
})