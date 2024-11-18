// const React = require("react");
// const ReactDom = require("react-dom");


const heading = React.createElement("h1", {}, "Namasthe React!");


const root = ReactDOM.createRoot(document.getElementById("root"));

console.log(heading); 
root.render(heading); 
