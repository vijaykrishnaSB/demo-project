import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import image22 from "../../assets/image22.jpg";
import image27 from "../../assets/image27.jpg";
import image26 from "../../assets/image26.jpg";
import volunteer from "../../assets/volunteer.jpg";
import childdonates from "../../assets/child-donates.jpg";
import orphan from "../../assets/orphan.jpg";
import Carousel from "react-bootstrap/Carousel";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import WcIcon from "@mui/icons-material/Wc";
import EscalatorWarningIcon from "@mui/icons-material/EscalatorWarning";
import GroupsIcon from "@mui/icons-material/Groups";

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

      <div className="main-scroll-1">
        <div className="sub-scroll">
          <img src={childdonates} alt="" />
          <p>
            Teaching children to care about others is an important life lesson.
            When children watch you give, they will grow up knowing that giving
            back is the right thing to do and follow in your footsteps. So,
            donating to charity also helps you be a good role model for your
            kids.Looking for ways to get kids involved in giving.Helping others
            feels good. When you donate to a charity that is important to you,
            you not only help them continue their vital work, you’re also
            improving your emotional wellbeing, a win-win situation!
          </p>
        </div>
      </div>
      <div className="main-scroll-2">
        <div className="sub-scroll">
          <p>
            Volunteers often help keep the doors open and enable nonprofits to
            deliver vital programs and services. Being a part of a team with a
            common goal will help you form bonds with strangers that can be
            life-changing. Volunteering inherently means helping people, and
            that means you'll be creating meaningful relationships with others
            and increasing your social interactions.Distracts people from their
            own problems, and improves self-esteem and competence.
          </p>
          <img src={volunteer} alt="" />
        </div>
      </div>
      <div className="main-scroll-1">
        <div className="sub-scroll">
          <img src={orphan} alt="" />
          <p>
            There are more than 30 million orphaned and abandoned children in
            India - that's almost 4% of the youth population. Since the Covid-19
            pandemic struck in 2020, thousands more children have been orphaned,
            and the true figures are still unknown. It was thought that 1,000
            children were left orphaned as a result of the pandemic in Uttar
            Pradesh alone, but the real figure could be much higher.Adoption
            laws in India are strict, leading to exceptionally low numbers of
            adoptions taking place. From March 2019 to March 2020, only 3,351
            children were adopted.
          </p>
        </div>
      </div>
      <div className="main-count">
        <div className="sub-count">
          <WcIcon sx={{ color: "blue", fontSize: 45 }} />
          <h1 className="num">3500+</h1>
          <h6 className="text">Donors</h6>
        </div>
        <div className="sub-count">
          <AttachMoneyIcon sx={{ color: "green", fontSize: 45 }} />
          <h1 className="num">10Lakhs+</h1>
          <h6 className="text">Fund raised</h6>
        </div>
        <div className="sub-count">
          <EscalatorWarningIcon sx={{ color: "blue", fontSize: 45 }} />
          <h1 className="num">200+</h1>
          <h6 className="text">Childrens received help</h6>
        </div>
        <div className="sub-count">
          <GroupsIcon sx={{ color: "red", fontSize: 45 }} />
          <h1 className="num">50+</h1>
          <h6 className="text">Volunteers</h6>
        </div>
      </div>
    </div>
  );
}

export default Home;
