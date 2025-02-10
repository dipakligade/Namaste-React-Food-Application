import { CDN_LINK } from "../utils/constants"
import React, { useContext } from "react";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) => {
    const { resData } = props;


    const { cloudinaryImageId, name, cuisines = [], avgRating, costForTwo, sla } = resData?.info || {};

    const { loggedInUser } = useContext(UserContext)
    return (

        <div className="resto-card ">
            <div data-testid="resaturantCard" className="m-4 p-4 bg-gray-200 w-[220px]">
                <img className="sobject-cover" alt="resto-logo" src={CDN_LINK + cloudinaryImageId} />
                <h3 className="font-bold text-xl" >{name}</h3>
                <h5 className="font-semibold text-lg" >{cuisines.join(", ")}</h5>
                <h5 className="font-medium text-base">{avgRating} Stars</h5>
                <h5 className="font-medium text-base">{sla?.slaString} </h5>
                <h5 className="font-normal text-base">{costForTwo} </h5>
                <h5 className="font-normal text-base">User : {loggedInUser} </h5>
            </div>
        </div>
    );
}


export default RestaurantCard;