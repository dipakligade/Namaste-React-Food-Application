import RestaurantCard from "./RestaurantCard";
import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
    const [listofRestaurant, setListofRestaurant] = useState([]);
    const [filteredList, setFilteredList] = useState([]);
    const [searchText, setSearchText] = useState("");

    const { loggedInUser, setUserName } = useContext(UserContext);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();

        const restaurants = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

        setListofRestaurant(restaurants);
        setFilteredList(restaurants);
    };

    const onlineStatus = useOnlineStatus();

    if (onlineStatus === false) return <h1>You Lost Your Internet Connection!! Please Check it</h1>;

    if (listofRestaurant.length === 0) {
        return <Shimmer />;
    }



    return (
        <div className="body">
            <div className="search-container">
                <div className="filter flex m-4">
                    <div className="mx-4 items-center">
                        <input
                            data-testid="searchInput"
                            className="border border-black rounded-md px-1"
                            type="text"
                            value={searchText}
                            onChange={(e) => setSearchText(e.target.value)}
                        />
                        <button
                            className="mx-4 bg-green-200 px-2 border border-black rounded-md rounded-lg"
                            onClick={() => {
                                const filteredlist = listofRestaurant.filter((res) =>
                                    res.info?.name?.toLowerCase().includes(searchText.toLowerCase())
                                );
                                setFilteredList(filteredlist);
                            }}
                        >
                            Search
                        </button>
                    </div>
                    <div className="mx-4 items-center">
                        <button
                            className="mx-4 px-2 bg-green-200 border border-black rounded-lg items-center"
                            onClick={() => {
                                const filteredList = listofRestaurant.filter(
                                    (res) => res.info.avgRating >= 4.5
                                );
                                setFilteredList(filteredList);
                            }}
                        >
                            Top Rated Restaurants
                        </button>
                    </div>
                    <div>
                        <input
                            className="border border-black"
                            value={loggedInUser}
                            onChange={(e) => setUserName(e.target.value)}
                        />
                    </div>
                </div>
            </div>
            <div className="resto-container flex flex-wrap">
                {filteredList.map((restaurant) => (
                    <Link key={restaurant.info.id} to={"/restaurant/" + restaurant.info.id}>
                        <RestaurantCard resData={restaurant} />
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Body;
