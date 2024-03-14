import { faqs } from "../data";
import SectionHead from "./SectionHead";
import FAQ from "./FAQ";
import { FaQuestion } from "react-icons/fa";

const FAQs = () => {
  return (
    <section className="faqs">
      <div className="container faqs__container">
        <SectionHead icon={<FaQuestion />} title="Frequently Asked Questions" />
        <div className="faqs__wrapper">
          {faqs.map(({ id, question, answer }) => (
            <FAQ key={id} question={question} answer={answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQs;
