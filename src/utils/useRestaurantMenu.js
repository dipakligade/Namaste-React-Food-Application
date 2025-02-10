import { useEffect, useState } from "react";
import { MENUE_API } from "../utils/constants";


const useRestaurantMenu = (resid) => {

    const [resInfo, setResInfo] = useState(null)

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        const data = await fetch(MENUE_API + resid);

        const json = await data.json();

        setResInfo(json);

    }

    return resInfo;

}

export default useRestaurantMenu;