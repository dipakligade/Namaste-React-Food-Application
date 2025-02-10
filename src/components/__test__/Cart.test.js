import { fireEvent, getAllByTestId, render, screen } from "@testing-library/react";
import Cart from "../Cart";
import RestaurantMenu from "../RestaurantMenu";
import Header from "../Header";
import { act } from "react";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import MOC_DATA from "../mocs/mocResMenue.json";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";


global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOC_DATA);
        }
    })
}

)

test("should rendet cart Menu", async () => {
    await act(async () => {
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <RestaurantMenu />
                    <Header />
                    <Cart />
                </Provider>
            </BrowserRouter>

        );



    });

    const acordianHeader = screen.getByText("Strawberry Specials (7)");
    fireEvent.click(acordianHeader);


    expect(screen.getAllByTestId("foodItems").length).toBe(7);

    const addBtn = screen.getAllByRole("button", { name: "Add" });


    fireEvent.click(addBtn[0]);

    expect(screen.getByText("Cart (1 items)")).toBeInTheDocument();

    expect(screen.getAllByTestId("foodItems").length).toBe(8);

    fireEvent.click(screen.getByRole("button", { name: "clear cart" }));


    expect(screen.getByText("Your cart is empty.")).toBeInTheDocument();







})