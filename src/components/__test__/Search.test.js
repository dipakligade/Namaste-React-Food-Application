import { fireEvent, render, screen } from "@testing-library/react"
import Body from "../Body"
import MOC_DATA from "../mocs/RestaurantListMocData.json"
import { act } from "react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOC_DATA)
        },
    });
});

test("should reande search with Body Component", async () => {

    await act(async () => {

        render(
            <BrowserRouter>
                <Body />
            </BrowserRouter>
        );

    });

    const beforeSearch = screen.getAllByTestId("resaturantCard");

    expect(beforeSearch.length).toBe(20);

    const searchBtn = screen.getByRole("button", { name: "Search" });

    const searchInput = screen.getByTestId("searchInput");

    fireEvent.change(searchInput, { target: { value: "burger" } });

    fireEvent.click(searchBtn);
    const resCard = screen.getAllByTestId("resaturantCard");


    expect(resCard.length).toBe(4);

})

test("should reande search with Body Component", async () => {

    await act(async () => {

        render(
            <BrowserRouter>
                <Body />
            </BrowserRouter>
        );

    });

    const beforeSearch = screen.getAllByTestId("resaturantCard");

    expect(beforeSearch.length).toBe(20);

    const TopRated = screen.getByRole("button", { name: "Top Rated Restaurants" });

    fireEvent.click(TopRated);

    const resCards = screen.getAllByTestId("resaturantCard");



    expect(resCards.length).toBe(3);




});