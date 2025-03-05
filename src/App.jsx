import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

// Getting the root element from HTML
const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    )
}
root.render(<AppLayout />);