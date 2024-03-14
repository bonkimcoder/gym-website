import { Link } from "react-router-dom";
import Logo from "../images/logo_1.png";
import { FaLinkedin, FaFacebook } from "react-icons/fa";
import { AiOutlineTwitter, AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div className="container footer__container">
        <article>
          <Link to="/" className="logo">
            <img src={Logo} alt="Footer Logo" />
          </Link>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci
            at asperiores maxime hic reiciendis voluptatibus quaerat, nemo
            doloribus voluptates reprehenderit?
          </p>
          <div className="footer__socials">
            <a href="#" target="_blank" rel="noreferrer noopener">
              <FaLinkedin />
            </a>
            <a href="#" target="_blank" rel="noreferrer noopener">
              <FaFacebook />
            </a>
            <a href="#" target="_blank" rel="noreferrer noopener">
              <AiOutlineTwitter />
            </a>
            <a href="#" target="_blank" rel="noreferrer noopener">
              <AiFillInstagram />
            </a>
          </div>
        </article>
        <article>
          <h4>Permalinks</h4>
          <Link to="/about">About</Link>
          <Link to="/plans">Plans</Link>
          <Link to="/trainers">Trainers</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/contact">Contact</Link>
        </article>
        <article>
          <h4>Insights</h4>
          <Link to="/s">Blogs</Link>
          <Link to="/s">Case Studies</Link>
          <Link to="/s">Events</Link>
          <Link to="/s">Communities</Link>
          <Link to="/s">FAQs</Link>
        </article>
        <article>
          <h4>Get In Touch</h4>
          <Link to="/contact">Contact Us</Link>
          <Link to="/s">Support</Link>
        </article>
      </div>
      <div className="footer__copyright">
        <small>
          &copy; {new Date().getFullYear()}. Bonny Kim. All Rights Reserved
        </small>
      </div>
    </footer>
  );
};

export default Footer;
