import React from "react";
import { Routes, Route} from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Contactus from "./components/Contactus/Contactus";
import About from "./components/About/About";
import Reportcase from "./components/Report/Reportcase";
import Donatation from "./components/Donate/Donatation";
import Donate from "./components/Donate/Donate";
import Ourteam from "./components/Ourteam/Ourteam";
import Volunteertable from "./components/Volunteer/Volunteertable";
import Volunteeredit from "./components/Volunteer/Volunteeredit";
import Footer from "./components/Footers/Footer";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Reports" element={<Reportcase />} />
        <Route path="/Donates/:id" element={<Donate />} />
        <Route path="/donatation" element={<Donatation />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="/ourteam" element={<Ourteam />} />
        <Route path="/volunteertable" element={<Volunteertable />} />
        <Route path="/edit/:id" element={<Volunteeredit />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
