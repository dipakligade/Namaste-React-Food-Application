import { render, screen } from "@testing-library/react"
import RestaurantCard from "../RestaurantCard"
import Moc_Data from "../mocs/ResturantMocdata.json"
import "@testing-library/jest-dom"

test("Should render restaurant card", () => {
    render(<RestaurantCard resData={Moc_Data} />);

    const name = screen.getByText("McDonald's");

    expect(name).toBeInTheDocument();
})