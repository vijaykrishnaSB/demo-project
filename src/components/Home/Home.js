import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import image22 from "../../assets/image22.jpg";
import image27 from "../../assets/image27.jpg";
import image26 from "../../assets/image26.jpg";
import Carousel from "react-bootstrap/Carousel";
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import WcIcon from '@mui/icons-material/Wc';
import EscalatorWarningIcon from '@mui/icons-material/EscalatorWarning';
import GroupsIcon from '@mui/icons-material/Groups';

function Home({ id }) {
  const navigate = useNavigate();
  return (
    <div>
      <div className="home">
        <Carousel>
          <Carousel.Item>
            <img className="home" src={image22} alt="Second slide" />

            <Carousel.Caption>
              <h2 className="quotes">
                A Child Without Education Is Like A Bird Without Wings...
              </h2>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="home" src={image27} alt="First slide" />
            <Carousel.Caption>
              <h2 className="quotes">
                The Beautifull Thing About Learning Is That No One Can Take It
                Away From You...
              </h2>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img className="home " src={image26} alt="Third slide" />

            <Carousel.Caption>
              <h2 className="quotes">
                Children Cannot Bounce off The Walls If We Take Away The Walls
              </h2>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="btn-homebutton">
        <button className=" homebutton" onClick={() => navigate(`/Reports`)}>
          Report a case
        </button>

        <button className="homebutton" onClick={() => navigate(`Donatation`)}>
          Donatation
        </button>
      </div>
      <div className="main-count">
        <div className="sub-count">
            <WcIcon  sx={{ color: "darkblue", fontSize: 45 }}/>
            <span class='num' data-val='400'>3500+</span>
            <span class="text">Donors</span>
        </div>
        <div className="sub-count">
            <AttachMoneyIcon  sx={{ color: "green", fontSize: 45 }}/>
            <span class='num' data-val='340'>10Lakhs+</span>
            <span class="text">Fund raised</span>
        </div>
        <div className="sub-count">
            <EscalatorWarningIcon  sx={{ color: "black", fontSize: 45 }}/>
            <span class='num' data-val='220'>200+</span>
            <span class="text">Childrens received help</span>
        </div>
        <div className="sub-count">
            <GroupsIcon  sx={{ color: "red", fontSize: 45 }}/>
            <span class='num' data-val='200'>50+</span>
            <span class="text">Volunteers</span>
        </div>
    </div>
    </div>
  );
}

export default Home;
