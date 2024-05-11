
const root = ReactDOM.createRoot(document.getElementById("root"));

const heading = React.createElement(
  "h1",
  { // this object is used to assign attributes to the element
    id: "title",
    xyz: "abc",
  },
  "Passing attributes to the element!" // children of heading
);

console.log(heading); // object

root.render(heading); // render takes the js object creates the element and append inside #root div