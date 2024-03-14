import Header from "../../components/Header";
import headerImage from "../../images/contact.jpg";
import ContactForm from "../../components/ContactForm";
import Map from "../../components/Map";
import "./contact.css";

const Contact = () => {
  return (
    <>
      <Header title="Contact Us" image={headerImage}>
        We are here for you. We want to here from you. Share your thoughts,
        concerns or questions
      </Header>
      <ContactForm />
      <Map />
    </>
  );
};

export default Contact;
