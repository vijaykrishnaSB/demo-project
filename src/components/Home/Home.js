import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import p1 from "../../assets/p1.jpg";
import Carousel from "react-bootstrap/Carousel";

function Home({ id }) {
  const navigate = useNavigate();
  return (
    <div>
      <div className="home">
        <Carousel>
          <Carousel.Item>
            <img className="home" src={p1} alt="First slide" />
            <Carousel.Caption>
              <h3>First </h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="home" src={p1} alt="Second slide" />

            <Carousel.Caption>
              <h3>Second</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="home " src={p1} alt="Third slide" />

            <Carousel.Caption>
              <h3>Third</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="btn-homebutton">
        <button
          className=" homebutton"
          onClick={() => navigate(`/Reports/${id}`)}
        >
          Report
        </button>
    
        <button
          className="homebutton"
          onClick={() => navigate(`/Donates/${id}`)}
        >
          Donate
        </button>
      </div>

    </div>
  );
}

export default Home;
