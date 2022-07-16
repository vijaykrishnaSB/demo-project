import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Landing from "./Landing";
import "./App.css";
// import Contactus from "./Contactus";
import About from "./About";
// import Reportfrom from "./Report/Reportfrom";

function App() {
  return (
    <Router>
      {/* <Landing /> */}
      <div className="App">
        <h2>OUR MANAGMENT</h2>
        <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only
        five centuries, but also the leap into electronic typesetting,
        remaining essentially unchanged. It was popularised in the 1960s with
        the release of Letraset sheets containing Lorem Ipsum passages, and
        more recently with desktop publishing software like Aldus PageMaker
        including versions of Lorem Ipsum.
      </p>
        <div className="Appcard">
          <About />
        </div>
      {/* <Reportfrom /> */}
      </div>
      {/* <Contactus /> */}
      <Routes>
        <Route exact path="/"></Route>
      </Routes>
    </Router>
  );
}

export default App;
