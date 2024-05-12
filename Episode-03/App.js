// // *************************************************** ex - 1 ***************************************

// import React from "react";
// import ReactDOM from "react-dom/client";

// const heading = React.createElement("h1", {}, "h1 using core react");

// console.log(heading);

// // className == class
// // use camelCase
// const jsxHeading = <h1 className="title" tabIndex="0">h1 using jsx</h1>

// console.log(jsxHeading); // exactly same as heading

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(jsxHeading);



// // *************************************************** ex - 2 ***************************************

// /**
//  * For multi line jsx must use :-
//  * const jsxHeading = (<h1 className="title" tabIndex="0">
//         h1 using jsx
//         </h1>)
//  */

// import React from "react";
// import ReactDOM from "react-dom/client";

// // babel transpiles JSX into React.createElement()
// const jsxHeading = (<h1 className="title" tabIndex="0">
//     Hi from Multi Line JSX
//     </h1>)

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(jsxHeading);




// // ******************************************* Functional Component ***************************************

// /**
//  * Functional component is just a js function which returns JSX
//  */

// import React from "react";
// import ReactDOM from "react-dom/client";

// // Must start with uppercase
// const HeadingComponent = () => {
//     return (<h1>Hi from functional component</h1>)
// }

// // same as HeadingComponent
// const HeadingComponent2 = () => (
//     <h1>Hi from functional component</h1>
// )

// // same as HeadingComponent
// const HeadingComponent3 = () => (<h1>Hi from functional component</h1>);

// const SubTitle = function () {
//   return (
//     <h2>Rendered inside another functional component</h2>
//   );
// };

// /**
//  * Component Composition
//  *      - Rendering 1 component inside another component
//  */

// const number = 10000;

// // inside {} we can write any piece of js code
// const Title = () => (
//     <div id="container">
//         <h1>Render From Functional Component</h1>
//         <SubTitle />
//         <h3>Js variable - {number}</h3>
//     </div>
// )
        
// const root = ReactDOM.createRoot(document.getElementById("root"));
        
// root.render(<Title />);




// // ************************ React Element inside component ***************************************

// /**
//  * -> We can render React Element inside React component
//  */

// import React from "react";
// import ReactDOM from "react-dom/client";

// const SubTitle = function () {
//   return (
//     <h2>Rendered inside another functional component</h2>
//   );
// };

// const number = 10000;

// const Title = () => (
//     <div id="container">
//         <h1>Render From Functional Component</h1>
//         <SubTitle />
//         <h3>Js variable - {number}</h3>
//         {desc}
//     </div>
// )

// // React element 
// // babel converts the JSX into React element
// // desc is variable which holds js object
// const desc = (
//     <div>
//         <p>This is React element rendered inside React component</p>
//     </div>
// )
        
// const root = ReactDOM.createRoot(document.getElementById("root"));
        
// root.render(<Title />);



// // ************************ React Element inside React Element ***************************************

// /**
//  * -> We can render React Element inside React Element
//  */

// import React from "react";
// import ReactDOM from "react-dom/client";

// const desc = (
//     <div>
//         <p>This is React element rendered inside React component</p>
//     </div>
// )

// const SubTitle =  (
//     <div>
//         <h2>Rendered inside another functional component</h2>
//         {desc}
//     </div>
// );

// const Title = () => (
//     <div id="container">
//         <h1>Render From Functional Component</h1>
//         {SubTitle}
//     </div>
// )
        
// const root = ReactDOM.createRoot(document.getElementById("root"));
        
// root.render(<Title />);




// // ************************ React Component inside React Element ***************************************


// /**
//  * main order
//  */

// import React from "react";
// import ReactDOM from "react-dom/client";

// const Span = () => (
//     <span>React Component inside React Element</span>
// )

// const SubTitle =  (
//     <div>
//         <Span />
//         <h2>Rendered inside another functional component</h2>
//         <Span></Span> 
//     </div>
// );

// const Title = () => (
//     <div id="container">
//         <h1>Render From Functional Component</h1>
//         {SubTitle}
//     </div>
// )
        
// const root = ReactDOM.createRoot(document.getElementById("root"));
        
// root.render(<Title />);



// ************************ Calling Component Function ***************************************


/**
 * main order
 */

import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => (
    <div id="container">
        <h1>Render From Functional Component</h1>
        {SubTitle()}
        <SubTitle />
        <SubTitle></SubTitle>
    </div>
)

const SubTitle = () => (
    <div>
        <h2>React Component rendered by calling component function</h2>
    </div>
);
        
const root = ReactDOM.createRoot(document.getElementById("root"));
        
root.render(<Title />);