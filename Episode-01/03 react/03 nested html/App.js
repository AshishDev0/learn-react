// *********************************** example 1 ********************************************

// /**
//  * <div id="parent">
//  *      <div id="child">
//  *          <h1></h1>
//  *      </div>
//  * </div>
//  */

// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement(
//     "div",
//     { id: "child" },
//     React.createElement("h1", {}, "Hello from nested title")
//   )
// );

// console.log(parent);

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(parent);


// *********************************** example 2 ********************************************

// /**
//  * <div id="parent">
//  *      <div id="child">
//  *          <h1></h1>
//  *          <h2></h2>
//  *      </div>
//  * </div>
//  */

// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement(
//     "div",
//     { id: "child" },
//     [React.createElement("h1", {}, "Hello from h1"), 
//     React.createElement("h2", {}, "Hello from h2")]
//   )
// );

// console.log(parent);

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(parent);


// *********************************** example 3 ********************************************

/**
 * <div id="parent">
 *      <div id="child1">
 *          <h1></h1>
 *          <h2></h2>
 *      </div>
 *      <div id="child2">
 *          <h1></h1>
 *          <h2></h2>
 *      </div>
 * </div>
 */

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "Hello from h1"),
    React.createElement("h2", {}, "Hello from h2"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "Hello from h1"),
    React.createElement("h2", {}, "Hello from h2"),
  ]),
]);
  
  console.log(parent);
  
  const root = ReactDOM.createRoot(document.getElementById("root"));
  
  root.render(parent);
