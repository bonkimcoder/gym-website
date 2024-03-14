import SectionHead from "./SectionHead";
import Card from "../UI/Card";
import { ImQuotesLeft } from "react-icons/im";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
import { testimonials } from "../data";
import { useState, useEffect } from "react";

const Testmonials = () => {
  const [index, setIndex] = useState(0);
  const { name, quote, job, avatar } = testimonials[index];

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestmonialHandler();
    }, 5000);
    return () => clearInterval(interval);
  }, [index]);

  const nextTestmonialHandler = () => {
    setIndex((prevIndex) => prevIndex + 1);
    if (index >= testimonials.length - 1) {
      setIndex(0);
    }
  };

  const prevTestmonialHandler = () => {
    setIndex((prevIndex) => prevIndex - 1);
    if (index <= 0) {
      setIndex(testimonials.length - 1);
    }
  };

  return (
    <section className="testmonials">
      <div className="container testmonials__container">
        <div className="testmonials__wrapper">
          <SectionHead
            icon={<ImQuotesLeft />}
            title="Client Testmonials"
            className="testmonials__head"
          />
          <Card className="testmonial">
            <div className="testmonial__avatar">
              <img src={avatar} alt={name} />
            </div>
            <p className="testmonial__quote">{`"${quote}"`}</p>
            <h5>{name}</h5>
            <small className="testmonial__title">{job}</small>
          </Card>
          <div className="testmonials__btn-container">
            <button
              className="testmonials__btn"
              onClick={prevTestmonialHandler}
            >
              <IoIosArrowDropleftCircle />
            </button>
            <button
              className="testmonials__btn"
              onClick={nextTestmonialHandler}
            >
              <IoIosArrowDroprightCircle />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testmonials;
