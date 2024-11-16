import { BrowserRouter } from "react-router-dom";
import Header from "../Header";
import { fireEvent, render } from "@testing-library/react";
import { Provider } from "react-redux";
import appStore from '../../utils/appStore'
import "@testing-library/jest-dom"
import { screen } from "@testing-library/react";

it("Should load Header Compomnent with a login button", () => {
    render(
    <BrowserRouter>
    <Provider store={appStore}>
    <Header/>
    </Provider>
    </BrowserRouter>
    )
    //Querying

    const loginButton = screen.getByRole("button", {name : "Login"});

    //Assertion
    expect(loginButton).toBeInTheDocument();

})

it("Should load Header Compomnent with a Cart items 0 ", () => {
    render(
    <BrowserRouter>
    <Provider store={appStore}>
    <Header/>
    </Provider>
    </BrowserRouter>
    )
    //Querying

    const cartItem = screen.getByText("Cart : (0)");

    //Assertion
    expect(cartItem).toBeInTheDocument();

})

//rejex
it("Should load Header Compomnent with a Cart ", () => {
    render(
    <BrowserRouter>
    <Provider store={appStore}>
    <Header/>
    </Provider>
    </BrowserRouter>
    )
    //Querying

    const cartItem = screen.getByText(/Cart/);

    //Assertion
    expect(cartItem).toBeInTheDocument();

})

it("Should change Login button to logout on click ", () => {
    render(
    <BrowserRouter>
    <Provider store={appStore}>
    <Header/>
    </Provider>
    </BrowserRouter>
    )
    //Querying

    const loginButton = screen.getByRole("button", {name : "Login"});

    fireEvent.click(loginButton);

    const logoutButton = screen.getByRole("button", {name: "Logout"});

    //Assertion
    expect(logoutButton).toBeInTheDocument();

})