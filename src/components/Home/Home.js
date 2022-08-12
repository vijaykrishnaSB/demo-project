import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import image22 from "../../assets/image22.jpg";
import image26 from "../../assets/image26.jpg";
import image29 from "../../assets/image29.jpg";
import Carousel from "react-bootstrap/Carousel";

function Home({ id }) {
  const navigate = useNavigate();
  return (
    <div>
      <div className="home">
        <Carousel>
          <Carousel.Item>
            <img className="home" src={image22} alt="First slide" />
            <Carousel.Caption>
              <h2 className="quotes" >A CHILD WITHOUT EDUCATION IS LIKE A BIRD WITHOUT WINGS.....</h2>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="home" src={image26} alt="Second slide" />

            <Carousel.Caption>
              <h2 className="quotes" >Second</h2>
              {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="home " src={image29} alt="Third slide" />

            <Carousel.Caption>
              <h2 className="quotes" >Third</h2>
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
