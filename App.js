const parent = React.createElement(
"div",
{id:"parent"},
React.createElement("div",{id:"child"},
[React.createElement("h1",{},"I am IRONMAN"),
 React.createElement("h1",{},"I am IRONMN")
]),
React.createElement("div",{id:"child"},
[React.createElement("h1",{},"I am IRONMAN"),
 React.createElement("h1",{},"I am IRONMN")
]),   
);
console.log(parent);
const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);