// import React from "react";
// import ReactDOM from "react-dom/client";
// import Header from "./components/Header";
// import Body from "./components/Body";
// import { createBrowserRouter, RouterProvider } from "react-router-dom"
// import About from "./components/About";
// import Contact from "./components/Contact";
// import Error from "./components/Error";

// const styleObj = {
//     fontSize: "16px",
//     marginTop: "8px",
//     marginBottom: "8px"
// }

// const AppLayout = () => (
//     <div>
//         <Header />
//         <Body restaurantCardStyle={styleObj} />
//     </div>
// )

// const appRouter = createBrowserRouter([
//     {
//         path: '/',
//         element: <AppLayout />,
//         errorElement: <Error />
//     },
//     {
//         path: '/about',
//         element: <About />
//     },
//     {
//         path: '/contact',
//         element: <Contact />
//     },
// ])

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<RouterProvider router={appRouter} />)



// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ children Routes ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";

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
                element: <About />
            },
            {
                path: '/contact',
                element: <Contact />
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