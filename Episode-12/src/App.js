import React, { lazy, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { lazy, Suspense } from "react";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";

const Grocery = lazy(() => import('./components/Grocery'))

const Aboutt = lazy(() => import("./components/About"))

const AppLayout = () => {

    const [userData, setUserData] = useState("");

    useEffect(() => {
        setUserData("Ashish Chowdhary")
    }, [])

    return (
        <Provider store={appStore}>
            <UserContext.Provider value={{ loggedInUser: userData, setUserData }}>
                <div>
                    <Header />
                    <Outlet />
                </div>
            </UserContext.Provider>
        </Provider>
    )
}

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        children: [
            {
                path: '/',
                element: <Body />,
                errorElement: <Error />
            },
            {
                path: '/about',
                element: (
                    <Suspense fallback={<h3>About Lazy Loading</h3>}>
                        <Aboutt />
                    </Suspense>
                )
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/grocery',
                element: (
                    <Suspense fallback={<h3>Grocery Lazy Loading</h3>}>
                        <Grocery />
                    </Suspense>
                )
            },
            {
                path: '/cart',
                element: <Cart />
            },
            {
                path: '/restaurant/:resId',
                element: <RestaurantMenu />
            }
        ],
        errorElement: <Error />
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />)