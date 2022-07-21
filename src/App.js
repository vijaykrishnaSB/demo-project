import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Contactus from "./Contactus";
import About from "./About";
import Reportcase from "./Report/Reportcase";
import Ourteam from "./Ourteam";
import Footer from "./Footer";

function App() {
  return (
    <Router>
      <div className="App">
      <Reportcase />
        {/* <About /> */}
        {/* <Contactus /> */}
        {/* <Ourteam /> */}
        {/* <Footer /> */}
      </div>
      <Routes>
        <Route exact path="/"></Route>
      </Routes>
    </Router>
  );
}
export default App;
