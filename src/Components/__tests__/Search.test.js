import { fireEvent, render } from "@testing-library/react"
import Body from "../Body";
import MOCK_DATA from "../mocks/mockResListData.json"
import { act } from "react";
import { BrowserRouter } from "react-router-dom";
import { screen } from "@testing-library/react";
import "@testing-library/jest-dom"


global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json : () => {
            return Promise.resolve(MOCK_DATA);
        }
    })
})

it("should search res list for burger text input", async ()=> {
    
    await act(async()=> render(
    <BrowserRouter>
    <Body/>
    </BrowserRouter>
    ));

    const serachBtn = screen.getByRole("button", {name: "Search"});

    const searchInput = screen.getByTestId("searchInput");

    fireEvent.change(searchInput, {target : {value : "burger"}});

    fireEvent.click(serachBtn);

    const cards = screen.getAllByTestId("resCard");

    expect(cards.length).toBe(1);
    
})