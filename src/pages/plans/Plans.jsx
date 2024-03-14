import "./plans.css";
import Header from "../../components/Header";
import headerImage from "../../images/header_bg_4.jpg";
import Card from "../../UI/Card";
import { plans } from "../../data";

const Plans = () => {
  return (
    <>
      <Header title="Our Plans" image={headerImage}>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis
          commodi labore id!
        </p>
      </Header>
      <section className="plans">
        <div className="container plans__container">
          {plans.map(({ id, name, desc, price, features }) => (
            <Card key={id} className="plan">
              <h3>{name}</h3>
              <small>{desc}</small>
              <h1>{`$${price}`}</h1>
              <h2>/mo</h2>
              <h4>Features</h4>
              {features.map(({ feature, available }, index) => (
                <p key={index} className={!available && "disabled"}>
                  {feature}
                </p>
              ))}
              <button className="btn lg">Choose Plan</button>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
};

export default Plans;
