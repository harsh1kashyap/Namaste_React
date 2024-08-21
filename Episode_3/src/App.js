import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";

import styles from '../index.css';
import Body from "./components/Body";

const Style = {
    backgroundColor: "#f0f0f0"
};


const AppLayout = () => {
    return (
        <div className="main_layout">
            <Header />
            <Body />
        </div>
    );

}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);