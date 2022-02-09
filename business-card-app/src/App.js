import React from "react";
import "./App.css";
import Info from "./Components/Info";
import About from "./Components/About";
import Footer from "./Components/Footer";

function App() {
    return (
        <div className="card">
            <Info />
            <About />
            <Footer />
        </div>
    );
}

export default App;
