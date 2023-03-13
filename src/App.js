import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Notfound from "./pages/Notfound";

function App() {
  return (
    <Router>
        <div>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="about" element={<About />}></Route>
                <Route path="projects" element={<Projects />}></Route>
                <Route path="contact" element={<Contact />}></Route>
                <Route path="*" extact={true} element={<Notfound />}></Route>
            </Routes>
        </div>
    </Router>
    
  );
}

export default App;