import React from "react";
import Header from "./Components/Header";
import Feature from "./Components/Feature";
import About from "./Components/About";
import aboutimage from "./images/about.png";
import aboutimage1 from "./images/download.png";

function App() {
    return (
        <div className="App">
            <Header />
            <Feature />
            <About
                image={aboutimage}
                title="Comes with All you need for Dialy Life"
                button="Get the App"
            />
            <About
                image={aboutimage1}
                title="Comes with All you need for Dialy Life"
                button="Download"
            />
        </div>
    );
}

export default App;
