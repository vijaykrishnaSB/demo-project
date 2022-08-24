import React from "react";
import "./Donate.css";
import image20 from "../../assets/image20.jpg";
import image43 from "../../assets/image43.jpg";
import image40 from "../../assets/image40.jpg";
import image45 from "../../assets/image45.jpg";
import image52 from "../../assets/image52.jpg";
import image44 from "../../assets/image44.jpg";
import { useNavigate } from "react-router-dom";

const Ourdonate = ({ id }) => {
  const navigate = useNavigate();

  return (
    <div className="donatation-list">
      <div className="donatation-container">
        <img src={image44} className="donatation-image" />
        <br />
        <h4>Child Education</h4>
        <p>
          An estimated 61 lakh children out of school in 2014 reduced from 1.346
          crore in 2006. Out of 100 students, 29% of girls & boys drop out of
          school before completing the full cycle of elementary education.
          Around 50 % do not complete secondary education, while approximately 2
          crore children not attending pre-school. Nearly 5 crore primary
          school-going children – not achieving grade appropriate learning
          levels.
        </p>

        <button
          className="donatebutton"
          onClick={() => navigate(`/Donates/${id}`)}
        >
          Donate Now
        </button>
      </div>
      <div className="donatation-container">
        <img src={image43} className="donatation-image" />
        <br />
        <h4>Children Food</h4>
        <p>
          Over 33 lakh children in India are malnourished and more than half of
          them fall in the severely malnourished category with Maharashtra,
          Bihar and Gujarat topping the list. the Women and Child Development
          ministry estimates that there are 17.76 lakh severely acute
          malnourished children & 15.46 lakh moderately acute malnourished
          children as of October 14, 2021.
        </p>
        <button
          className="donatebutton"
          onClick={() => navigate(`/Donates/${id}`)}
        >
          Donate Now
        </button>
      </div>
      <div className="donatation-container">
        <img src={image45} className="donatation-image" />
        <br />
        <h4>Children Health</h4>
        <p>
          Nearly 35 lakh babies in India are born too early, 17 lakh babies are
          born with birth defects, and 10 lakh new-borns are discharged each
          year from SNCU.Nearly 46% of all maternal deaths and 40% of neonatal
          deaths happen during labour or the first 24 hours after birth.
          Pre-maturity-35%, neonatal infections-33%, birth asphyxia-20% and
          congenital malformations-9% are majorlly new-born deaths.
        </p>
        <button
          className="donatebutton"
          onClick={() => navigate(`/Donates/${id}`)}
        >
          Donate Now
        </button>
      </div>
      <div className="donatation-container">
        <img src={image20} className="donatation-image" />
        <br />
        <h4>Disable Children</h4>
        <p>
          Survey in 2011 around 7.62% of india's total population with
          disability was children,at approximately 20.4 lakh children out of
          2.68 crore of disabled people.Meanwhile,the disabled children in Bhiar
          and Meghalaya accounted for respictively around 12.48% and 11.41% of
          the total disabled population in these regions.In comparison. just
          over 3.4% of disabled people in Sikkim & kerala were children.
        </p>
        <button
          className="donatebutton"
          onClick={() => navigate(`/Donates/${id}`)}
        >
          Donate Now
        </button>
      </div>
      <div className="donatation-container">
        <img src={image52} className="donatation-image" />
        <br />
        <h4>Disable Adults</h4>
        <p>
          2.21% means 2.68 crore people in India population are disabled.Out of
          total 62.32 crore male Indian citizens, there are 1.5 crore disabled
          males in India.Out of total 58.76 crore female Indian citizens, there
          are 1.18 crore disabled females in India.About 69% of the overall
          disabled Indian population lives rural areas.1.86 crore disabled
          people live in rural areas.0.81 crore disabled people live in urban
          areas.Lack of awareness,Care provided to pregnant women & lack of good
          and accessible medical facilities in rural areas.
        </p>
        <button
          className="donatebutton"
          onClick={() => navigate(`/Donates/${id}`)}
        >
          Donate Now
        </button>
      </div>

      <div className="donatation-container">
        <img src={image40} className="donatation-image" />
        <br />
        <h4>Old Age Home</h4>
        <p>
          close to 1.8 crore elder in india are homeless senior citizens living
          in poverty face abandonment by their own families as they cannot earn
          an income.Many time they have to beg for survival .Many elder are left
          alone after their children move to the cities in search for a better
          livelihood. In the last years of their lives, who will they look up
          to? Support an old ahe home to make sure that in their old age, these
          senior citizens are taken care of.
        </p>
        <button
          className="donatebutton"
          onClick={() => navigate(`/Donates/${id}`)}
        >
          Donate Now
        </button>
      </div>
    </div>
  );
};
export default Ourdonate;
