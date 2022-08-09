import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Contactus from "./components/Contactus/Contactus";
import About from "./components/About/About";
import Reportcase from "./components/Report/Reportcase";
import Donate from "./components/Donate/Donate";
import Ourteam from "./components/Ourteam/Ourteam";
import Footer from "./components/Footers/Footer";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
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
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
