import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants"
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext"
import { useSelector } from "react-redux";


const Header = () => {

    const [loginButton, setLoginButton] = useState("Login")

    const { loggedInUser } = useContext(UserContext);

    // console.log(loggedInUser)

    const cartItems = useSelector((store) => store.cart.items)

    return (
        <div className="header flex justify-between bg-yellow-200 items-center m-4 p-4">
            <div className="logo-container">
                <img className="w-[100px]" src={LOGO_URL} />
            </div>
            <div className="mx-4 px-4 ">
                <ul className=" flex items-center">
                    <li className="mx-4 " >
                        Online Status: {useOnlineStatus() ? "🟢" : "🔴"}
                    </li>
                    <li className="mx-4 " >
                        <Link to={"/"}>Home</Link>
                    </li>
                    <li className="mx-4 " >
                        <Link to={"/About"}>About Us </Link>
                    </li>
                    <li className="mx-4 " >
                        <Link to={"/Contact"}>Contact Us</Link>
                    </li>
                    <li className="mx-4 " >
                        <Link to={"/grocery"}>Grocery</Link>
                    </li>
                    <li className="mx-4 font-bold text-xl " >
                        <Link to={"/cart"}>Cart ({cartItems.length} items)
                        </Link>
                    </li>
                    <button onClick={() => {
                        loginButton === "Login" ? setLoginButton("Logout") : setLoginButton("Login");
                    }}>{loginButton}</button>
                    <li className="ml-4 ">
                        {loggedInUser}
                    </li>
                </ul>
            </div>
        </div>
    )
};

export default Header;