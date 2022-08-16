import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import image22 from "../../assets/image22.jpg";
import image27 from "../../assets/image27.jpg";
import image26 from "../../assets/image26.jpg";
import Carousel from "react-bootstrap/Carousel";

function Home({ id }) {
  const navigate = useNavigate();
  return (
    <div>
      <div className="home">
        <Carousel>
          <Carousel.Item>
            <img className="home" src={image27} alt="First slide" />
            <Carousel.Caption>
              <h2 className="quotes" >The Beautifull Thing About Learning Is That No One Can Take It Away From You...</h2>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="home" src={image22} alt="Second slide" />

            <Carousel.Caption>
              <h2 className="quotes" >A Child Without Education Is Like A Bird Without Wings...</h2>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="home " src={image26} alt="Third slide" />

            <Carousel.Caption>
              <h2 className="quotes" >Children Cannot Bounce off The Walls If We Take Away The Walls</h2>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="btn-homebutton">
        {/* <button
          className=" homebutton"
          onClick={() => navigate(`/Reports/${id}`)}
        >
          Report
        </button> */}

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
