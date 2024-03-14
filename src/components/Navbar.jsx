import { Link, NavLink } from "react-router-dom";
import Logo from "../images/logo_1.png";
import { links } from "../data";
import { FaBars } from "react-icons/fa6";
import { FaWindowClose } from "react-icons/fa";

import "./navbar.css";
import { useState } from "react";

const Navbar = () => {
  const [isNavShowing, setIsNavShowing] = useState(false);

  const toggleNav = () => {
    setIsNavShowing((prevState) => !prevState);
  };
  return (
    <nav>
      <div className="container nav__container">
        <Link to="/" className="logo">
          <img
            src={Logo}
            alt="Nav Logo"
            onClick={() => setIsNavShowing(false)}
          />
        </Link>
        <ul
          className={`nav__links ${isNavShowing ? "show__nav" : "hide__nav"}`}
        >
          {links.map(({ name, path }, index) => (
            <li key={index}>
              <NavLink
                to={path}
                className={({ isActive }) => isActive && "active-nav"}
                onClick={toggleNav}
              >
                {name}
              </NavLink>
            </li>
          ))}
        </ul>
        <button className="nav__toggle-btn" onClick={toggleNav}>
          {isNavShowing ? <FaWindowClose /> : <FaBars />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
