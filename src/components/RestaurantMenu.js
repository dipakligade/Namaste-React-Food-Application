import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestarantCategoury from "./RestaurantCategoury";


const RestaurantMenu = () => {

    const [showIndex, setShowIndex] = useState(null);




    const { resid } = useParams();

    const resInfo = useRestaurantMenu(resid);

    if (resInfo === null) return <Shimmer />

    const { name, cuisines, costForTwoMessage } = resInfo?.data?.cards[2]?.card?.card?.info;

    const { itemCards } = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

    // console.log(resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1].card.card)

    const categories = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c) =>
            c.card?.["card"]?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")

    // console.log(categories);

    return (
        <div className="text-center">
            <h1 className="font-bold text-2xl my-6">{name}</h1>
            <p className="font-bold text-lg">{cuisines.join(", ")} - {costForTwoMessage}</p>
            <h2 className="font-semibold text-base mx-10 py-2">Menues</h2>

            {/* <RestarantCategoury /> */}

            {
                categories.map((c, index) => (<RestarantCategoury
                    key={c.card.card.title}
                    data={c?.card.card}
                    showItem={index === showIndex ? true : false}
                    setShowIndex={() => setShowIndex(index === showIndex ? null : index)}

                />))
            }


        </div>
    )
}

export default RestaurantMenu;