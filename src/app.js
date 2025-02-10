import React, { lazy, useContext, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";


import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import ErrorElemet from "./components/ErrorElement";
import RestaurantMenu from "./components/RestaurantMenu";
// import Grocery from "./components/Grocery";
import { Suspense } from "react";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";

const AppLayout = () => {

    const [userName, setUserName] = useState()

    // const { loggedInUser } = useContext(UserContext);

    useEffect(() => {
        const data = {
            name: "Dipak Ligade"
        };
        setUserName(data.name)

    }, [])




    return (
        <Provider store={appStore}>
            <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
                <div className="app">
                    <Header />
                    <Outlet />
                </div>
            </UserContext.Provider>
        </Provider>
    );
};

const Grocery = lazy(() => import("./components/Grocery"));

const appRoutes = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/grocery",
                element: <Suspense fallback={<h1>Loading.....</h1>}>
                    <Grocery />
                </Suspense>
            },
            {
                path: "/cart",
                element: <Cart />
            },
            {
                path: "/restaurant/:resid",
                element: <RestaurantMenu />
            }

        ],
        errorElement: <ErrorElemet />
    },

]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRoutes} />);
