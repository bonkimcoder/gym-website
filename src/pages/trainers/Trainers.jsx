import "./trainers.css";
import Header from "../../components/Header";
import headerImage from "../../images/header_bg_4.jpg";
import { trainers } from "../../data";
import { FaFacebook, FaLinkedinIn } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";
import Trainer from "../../components/Trainer";

const Trainers = () => {
  return (
    <>
      <Header title="Our Trainers" image={headerImage}>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis
          commodi labore id!
        </p>
      </Header>
      <section className="trainers">
        <div className="container trainers__container">
          {trainers.map(({ id, image, name, job, socials }) => (
            <Trainer
              key={id}
              image={image}
              name={name}
              job={job}
              socials={[
                { icon: <BsInstagram />, link: socials[0] },
                { icon: <AiOutlineTwitter />, link: socials[1] },
                { icon: <FaFacebook />, link: socials[2] },
                { icon: <FaLinkedinIn />, link: socials[3] },
              ]}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Trainers;
