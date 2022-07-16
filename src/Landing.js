import React from "react";
import "./App.css";
import image1 from './images/image1.jpg';

export default function Landing() {
  return (
    <>

    <section claaaName="landing">
      <div className="overlay">
        <h1>i am vijay krishna</h1>
        <img src={image1} alt="" />
      </div>
    </section>;

    </>
  );
}
