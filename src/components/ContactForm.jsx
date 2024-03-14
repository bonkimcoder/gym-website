import { CiLocationOn, CiPhone } from "react-icons/ci";
import { MdEmail } from "react-icons/md";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { useState, useRef } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  console.log(formData);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const [isSubmitted, setIsSubmitted] = useState(false);

  const nameInput = useRef();
  const emailInput = useRef(null);
  const phoneInput = useRef(null);
  const messageInput = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    setFormData({ name: "", email: "", phone: "", message: "" });

    if (
      nameInput.current.value &&
      emailInput.current.value &&
      phoneInput.current.value &&
      messageInput.current.value
    ) {
      setIsSubmitted(!isSubmitted);
    }
  };

  const [focusState, setFocusState] = useState({
    name: false,
    email: false,
    phone: false,
    message: false,
  });

  const handleFocus = (inputName) => {
    setFocusState((prevFocusState) => ({
      ...prevFocusState,
      [inputName]: true,
    }));
  };

  const handleBlur = (inputName, inputValue) => {
    setFocusState((prevFocusState) => ({
      ...prevFocusState,
      [inputName]: inputValue.trim() !== "",
    }));
  };

  return (
    <section className="contact__form">
      <div className="container contact__form-container">
        <div className="card-container">
          <div className="card-content">
            <h3 className="card-title">Get in touch</h3>
            <p className="card-text">
              We are here to answer any question you might have for us. We
              promise to respond within the shortest time possible.
            </p>
            <div className="contacts">
              <div className="contact-info">
                <CiLocationOn className="contact-info-icon" />
                <p className="contact-text">Nairobi, Kenya</p>
              </div>
              <div className="contact-info">
                <MdEmail className="contact-info-icon" />
                <p className="contact-text">bonkim@wambo.com</p>
              </div>
              <div className="contact-info">
                <CiPhone className="contact-info-icon" />
                <p className="contact-text">+254 724617731</p>
              </div>
            </div>
            <div className="socials">
              <p>Our Socials :</p>
              <div className="social-media-links">
                <a
                  href="https://www.facebook.com/bonny.kim.75033/"
                  className="social-media-link "
                >
                  <FaFacebook />
                </a>
                <a href="#" className="social-media-link ">
                  <FaTwitter />
                </a>
                <a href="#" className="social-media-link ">
                  <FaInstagram />
                </a>
                <a
                  href="https://www.linkedin.com/in/bonface-kimani-3112b8125/"
                  target="_blank"
                  className="social-media-link "
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`${isSubmitted ? "hidden" : ""}  form-container`}>
            <form onSubmit={handleSubmit}>
              <h3 className="form-title">Talk To Us</h3>
              <div
                className={`${
                  focusState.name ? "focus" : ""
                } input-container relative my-8`}
              >
                <label
                  htmlFor="name"
                  className="absolute top-1/2 left-4 transform -translate-y-1/2 px-1/10 text-white text-sm font-normal pointer-events-none transition-all duration-500 "
                >
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  ref={nameInput}
                  onChange={handleChange}
                  onFocus={() => handleFocus("name")}
                  onBlur={(e) => handleBlur("name", e.target.value)}
                  autoComplete="new-name"
                  className="form-input"
                  required
                />
              </div>
              <div
                className={`input-container relative my-8 ${
                  focusState.email ? "focus" : ""
                }`}
              >
                <label
                  htmlFor="email"
                  className="absolute top-1/2 left-4 transform -translate-y-1/2 px-1/10 text-white text-sm font-normal pointer-events-none transition-all duration-500 "
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  required
                  ref={emailInput}
                  onChange={handleChange}
                  onFocus={() => handleFocus("email")}
                  onBlur={(e) => handleBlur("email", e.target.value)}
                  className="form-input"
                />
              </div>
              <div
                className={`input-container ${focusState.phone ? "focus" : ""}`}
              >
                <label
                  htmlFor="phone"
                  className="absolute top-1/2 left-4 transform -translate-y-1/2 px-1/10 text-white text-sm font-normal pointer-events-none transition-all duration-500"
                >
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  required
                  ref={phoneInput}
                  onChange={handleChange}
                  onFocus={() => handleFocus("phone")}
                  onBlur={(e) => handleBlur("phone", e.target.value)}
                  className="form-input"
                />
              </div>
              <div
                className={`textarea-container ${
                  focusState.message ? "focus" : ""
                }`}
              >
                <label
                  htmlFor="message"
                  className="absolute top-4 left-4 transform -translate-y-0 px-1/10 text-white text-sm font-normal pointer-events-none transition-all duration-500"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  value={formData.message}
                  ref={messageInput}
                  onChange={handleChange}
                  onFocus={() => handleFocus("message")}
                  onBlur={(e) => handleBlur("message", e.target.value)}
                  className="textarea"
                ></textarea>
              </div>
              <input type="submit" value="Send" className="form-btn" />
            </form>
          </div>
          <div className={`${isSubmitted ? "" : "hidden"} thanks-note`}>
            <h2 className="text-center text-2xl">
              Thank you for your message. We will get back to you as soon as
              possible
            </h2>
            <button onClick={() => setIsSubmitted(false)}>Back To Form</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
