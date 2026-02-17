import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import "./App.css";

// Delay function
const delay = (ms) =>
  new Promise((resolve) => setTimeout(resolve, ms));

// Lazy with delay (2 seconds)
const Home = lazy(() =>
  delay(2000).then(() => import("./pages/Home.jsx"))
);

const About = lazy(() =>
  delay(2000).then(() => import("./pages/About.jsx"))
);

const Contact = lazy(() =>
  delay(2000).then(() => import("./pages/Contact.jsx"))
);

function App() {
  return (
    <Router>
      <div className="app">
        <nav className="navbar">
          <h2 className="logo">Lazy SPA 🚀</h2>
          <div className="links">
            <NavLink to="/" end>Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </div>
        </nav>

        <div className="page">
          <Suspense fallback={<div className="loader"></div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Suspense>
        </div>
      </div>
    </Router>
  );
}

export default App;
