import { FaDiscourse } from "react-icons/fa6";
import SectionHead from "./SectionHead";
import { programs } from "../data";
import Card from "../UI/Card";
import { Link } from "react-router-dom";
import { AiFillCaretRight } from "react-icons/ai";
import { useState } from "react";
import popBgImage from "../images/hero6.jpg";
const Programs = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState(null);

  const handleLearnMoreClick = (program) => {
    setSelectedProgram(program);
    setShowPopup(true);
  };

  const bgStyles = {
    backgroundImage: `url(${popBgImage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };
  return (
    <section className="programs">
      <div
        className={`container programs__container ${showPopup && "overlay"}`}
      >
        <SectionHead icon={<FaDiscourse />} title="Our Programs" />
        <div className="programs__wrapper">
          {programs.map(({ id, icon: Icon, title, info, details, path }) => (
            <Card className="programs__program" key={id}>
              <span>
                <Icon />
              </span>
              <h4>{title}</h4>
              <small>{info}</small>
              {/* <Link to={path} className="btn sm" onClick={handleLearnMoreClick}>
                Learn More
                <AiFillCaretRight />
              </Link> */}
              <button
                onClick={() =>
                  handleLearnMoreClick({ id, title, info, details, path })
                }
                className="btn sm"
              >
                Learn More <AiFillCaretRight />
              </button>
            </Card>
          ))}
        </div>
      </div>
      {showPopup && (
        <div className="popup" style={bgStyles}>
          <div className="popup__wrapper">
            <div className="popup__content">
              <h2>{selectedProgram.title}</h2>
              <ul>
                {selectedProgram.details.map((list, index) => (
                  <li key={index}>{list}</li>
                ))}
              </ul>
              <div className="buttons">
                <Link to="/contact" className="btn">
                  Book Now
                </Link>
                <button onClick={() => setShowPopup(false)} className="btn">
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Programs;
