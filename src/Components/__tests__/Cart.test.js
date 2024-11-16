import { fireEvent, render } from "@testing-library/react"
import { act } from "react"
import RestaurantMenu from "../RestaurantMenu"
import MOCK_DATA_NAME from '../mocks/mockResMenu.json'
import { screen } from "@testing-library/react"
import { Provider } from "react-redux"
import appStore from "../../utils/appStore"
import "@testing-library/jest-dom"
import Header from "../Header"
import { BrowserRouter } from "react-router-dom"
import Cart from '../Cart'

global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json : () => {
            return Promise.resolve(MOCK_DATA_NAME);
        }
    })
})

it("Should load restaurant menu component", async()=> {
    await act(async()=> 
    render(
        <BrowserRouter>
    <Provider store={appStore}>
    <Header/>
    <RestaurantMenu/>
    <Cart/>
    </Provider>
    </BrowserRouter>
    ));
    const accordianHeader = screen.getByText("Drinks (9)");

    fireEvent.click(accordianHeader);

    const foodItems = screen.getAllByTestId("foodItems");

    expect(foodItems.length).toBe(9);

    expect(screen.getByText("Cart : (0)")).toBeInTheDocument();

    const addBtns = screen.getAllByRole("button", {name : "Add +"});

    fireEvent.click(addBtns[0]);

    expect(screen.getByText("Cart : (1)")).toBeInTheDocument();

    expect(screen.getAllByTestId("foodItems").length).toBe(10);

    fireEvent.click(screen.getByRole("button", {name : "Clear Cart"}));

    expect(screen.getAllByTestId("foodItems").length).toBe(9);


})