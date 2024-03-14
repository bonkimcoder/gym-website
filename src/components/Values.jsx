import valuesImgOne from "../images/values.jpg";
import valuesImgTwo from "../images/values1.jpg";
import SectionHead from "./SectionHead";
import { IoFitnessSharp } from "react-icons/io5";

import Card from "../UI/Card";
import { values } from "../data";

const Values = () => {
  return (
    <section className="values">
      <div className="container values__container">
        <div className="values__left">
          <div className="values__image_one">
            <img src={valuesImgOne} alt="Values Image One" />
          </div>
          <div className="values__image_two">
            <img src={valuesImgTwo} alt="Values Image Two" />
          </div>
        </div>
        <div className="values__right">
          <SectionHead icon={<IoFitnessSharp />} title="Our Values" />
          <p>
            Guided by our values, we are passionate about fitness and living a
            healthy lifestyle, inspiring and motivating our members to reach
            their full potential.
          </p>
          <div className="values__wrapper">
            {values.map(({ id, icon: Icon, title, desc }) => (
              <Card key={id} className="values__value">
                <span>{<Icon />}</span>
                <h4>{title}</h4>
                <small>{desc}</small>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values;
