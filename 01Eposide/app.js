// const h1 =  React.createElement('h1',{id: 'heading', name: 'heading1'},'Hello from React');

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1",{ id: "heading", key: "h1" },"Namaste from react"),
    React.createElement("h2", { id: "heading", key: "h2" }, "h2 from React."),
  ])
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

console.log(parent);
