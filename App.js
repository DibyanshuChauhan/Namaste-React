import React from "react";
import ReactDOM from "react-dom/client";

// Getting the root element from HTML
const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

// Creating an element using classical React.createElement
const heading = React.createElement("h1", { id: "heading" }, "Hello, world!");

// Creating a div inside another div inside another div
const nestedDivs = React.createElement(  // the type of React.createElement is object 
  "div", // Parent div
  { id: "parent" },
  React.createElement(
    "div", // First child div
    { id: "child" },
    React.createElement(
      "div", // Second child div inside first child
      { id: "grandchild" },
      "I am deeply nested!"
    )
  )
);

// Creating elements using JSX
const jsxHeading = <h1 id="jsx-heading">Hello, JSX!</h1>;

// JSX Nested Elements (Equivalent to the above classical method)
const jsxNestedDivs = (
  <div id="parent">
    <div id="child">
      <div id="grandchild">I am deeply nested!</div>
    </div>
  </div>
);

// Rendering elements
root.render(
  <>
    {heading}
    {nestedDivs}
    {jsxHeading}
    {jsxNestedDivs}
  </>
);
