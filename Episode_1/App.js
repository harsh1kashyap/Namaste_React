/**
 * 
 * <div id="parent">
 *      <div id="child">
 *          <h1>I'm an h1 tag</h1>
 *          <h2>I'm an h1 tag</h2>
 *      </div>
 * </div>
 * 
 *  for making sibling in react we have to make an arrry []
 *  of child
 * 
 * 
 */



const parent = React.createElement("div", { id: "parent" },
    [
        React.createElement("div", { id: "child_1" },
            [
                React.createElement("h1", { className: "heading_1" }, "I'm a h1 tag"),
                React.createElement("h2", { id: "heading_2" }, "I'm a h2 tag")
            ]
        ),
        React.createElement("div", { id: "child_2" },
            [
                React.createElement("h1", { className: "heading_1" }, "I'm a h1 tag"),
                React.createElement("h2", { id: "heading_2" }, "I'm a h2 tag")
            ]
        )
    ]
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);