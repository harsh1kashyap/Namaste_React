import React from "react";
import ReactDOM from "react-dom";

const heading = React.createElement("h1", { id: "heading" }, "This is React Heading");


//  Now Insted of creating element when can use JSX
//jsx is not same like JS

const jsxHeading = <h1 id="heading">Hello, I'm JSX Heading </h1>

const root = ReactDOM.createRoot(document.getElementById("root"));

console.log(heading);
console.log(jsxHeading);

root.render(heading);