import { useDispatch } from "react-redux";
import { CDN_LINK, ITEM_lOGO_API } from "../utils/constants";
import { addItems } from "../utils/cartSlice";

const ItemList = ({ items }) => {



    const dispatch = useDispatch();

    const handleAdd = (items) => {
        // Dispatchimg an Action
        dispatch(addItems(items));

    }


    return (

        <div >

            {items.map((item) => (
                <div
                    data-testid="foodItems"
                    key={item.card.info.id}
                    className="p-2 m-2 border-b-2 border-gray-200 text-left flex justify-between">


                    <div className="w-9/12">
                        <div className="py-2">
                            <span className="">{item.card?.info.name}</span>
                            <span className=""> - ₹ {item.card?.info.price / 100}</span>
                        </div>
                        <div className=" ">
                            <span className="text-sm">{item.card?.info.description}</span>
                        </div>

                    </div>
                    <div className="w-3/12 p-4 ">
                        <div className="absolute">
                            <button className="shadow-lg px-2 mx-12 rounded-lg bg-black text-white"
                                onClick={() => handleAdd(item)}
                            >
                                Add
                            </button>
                        </div>
                        <img src={CDN_LINK + item.card?.info.imageId} className="object-cover" />

                    </div>
                </div>

            ))}
        </div>
    );
};

export default ItemList;
