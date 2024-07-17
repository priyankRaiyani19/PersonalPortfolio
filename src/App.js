// App.js
import React from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import SocialLinks from "./components/SocialLinks";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import { db } from "./components/fireBase";  // Ensure the correct path to firebase.js

function App() {
    return (
        <div>
            <NavBar />
            <Home />
            <About />
            <Portfolio />
            <Experience />
            <Contact db={db} />
            <SocialLinks />
        </div>
    );
}

export default App;
