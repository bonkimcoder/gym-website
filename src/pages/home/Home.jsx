import FAQs from "../../components/FAQs";
import Hero from "../../components/Hero";
import Programs from "../../components/Programs";
import Testmonials from "../../components/Testmonials";
import Values from "../../components/Values";
import "./home.css";

const Home = () => {
  return (
    <div>
      <Hero />
      <Programs />
      <Values />
      <FAQs />
      <Testmonials />
    </div>
  );
};

export default Home;
