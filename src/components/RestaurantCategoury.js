import ItemList from "./ItemList";
import { useState } from "react";

const RestarantCategoury = ({ data, showItem, setShowIndex }) => {
    // console.log(data);

    // const [open, setOpen] = useState(false);

    const handleOpen = () => {

        // setOpen(!open);
        setShowIndex();

    }

    return (
        <div>
            <div className=" w-6/12 mx-auto my-4 bg-gray-50 p-2 m-4 shadow-lg">
                <div className="flex justify-between cursor-pointer" onClick={handleOpen}>
                    <span className="font-semibold text-lg">{data?.title} ({data?.itemCards.length})</span>
                    <span>🔽</span>
                </div>
                {
                    showItem && <ItemList items={data?.itemCards} />
                }

            </div>

        </div>
    );
};



export default RestarantCategoury;
