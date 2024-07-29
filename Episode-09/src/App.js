import React, { lazy } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"
// import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { lazy, Suspense } from "react";
// import Grocery from "./components/Grocery";

/**
 * Lazy loading
 * Chunking
 * Code splitting
 * Dynamic Bundling
 * On demand loading
 * Dynamic import
 */
const Grocery = lazy(() => import('./components/Grocery'))

const Aboutt = lazy(() => import("./components/About"))

const styleObj = {
    fontSize: "16px",
    marginTop: "8px",
    marginBottom: "8px"
}

const AppLayout = () => (
    <div>
        <Header />
        <Outlet />
    </div>
)

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
                path: '/restaurant/:resId',
                element: <RestaurantMenu />
            }
        ],
        errorElement: <Error />
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />)