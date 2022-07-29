import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Contactus from "./Contactus";
import About from "./About";
import Reportcase from "./Report/Reportcase";
import Donate from "./Donate";
import Ourteam from "./Ourteam";
import Footer from "./Footer";
import Login from "./Login";
import Register from "./Register";
// import { Home } from "@mui/icons-material";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Reports/:id" element={<Reportcase />} />
        <Route path="/Donates/:id" element={<Donate />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="/ourteam" element={<Ourteam />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
