import React from "react";
import ReactDOM from "react-dom/client";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

// React Element
const heading = React.createElement("h1", { id: "heading" }, "Hello, world!");

// React Functional component with JSX using Arrow function
const App = () => {
    return ( // return keyword with parenthesis is used to return multiple elements in JSX like a div containing multiple elements in this case.
        <div>
            {heading}
            <h1>Foundation Block</h1>
            {250 + 580}
        </div>
    );
};

// If we don't want to use the keyword return but wants to use nested JSX statement inside the component then we can write our JSX code inside the parenthesis ().

//Example to showcase it:--
const NestedJSXComponent = () => (
    <div>
        <h2>Title</h2>
        <p>This is a nested JSX example.</p>
    </div>
);

// For injecting the JavaScript code or the React Element onto our Component we use curly braces {}.

// React Functional component with JSX using regular function

const SingleLineComponent = () => <div>Hello, React!</div>; // this way we can make a component which has a single element inside it without using the keyword return.

function Application() {
    return (
        <div>
            <h2>Hello World !</h2>
            <App />
            <SingleLineComponent />
            <NestedJSXComponent />
        </div>
    );
};

const Program = () => {
    <>
        <h3>Namaste Dunia</h3>
    </>
}
// React Fragment is used to return multiple elements in JSX without adding an extra div element in the DOM tree structure of the HTML document.

//The empty brackets <> </> or React.Fragments

root.render(<Application />);
/**
  There are three methods to use our React components:
  1. <ComponentName /> : This is the most common way to use a component in JSX. It is similar to using an HTML tag.
  2. <ComponentName></ComponentName> : This is another way to use a component in JSX. It is similar to using an HTML tag with an opening and closing tag.
  3. { ComponentName() } : This is used to inject the component into the JSX code. This is used when we want to use the component as a variable.
 */