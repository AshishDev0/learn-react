import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

const styleObj = {
    fontSize: "16px",
    marginTop: "8px",
    marginBottom: "8px"
}

const AppLayout = () => (
    <div>
        <Header />
        <Body restaurantCardStyle={styleObj} />
    </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />)