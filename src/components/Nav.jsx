import React from "react";
import navLogo from "../assets/transparent-logo.png";
import { Link } from "react-router-dom";
import { faFacebook, faInstagram, faShopify, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./components.css";
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
  return (
    <nav>
      <div id="logo__container">
        <img id="nav__logo" src={navLogo} alt="" />
      </div>
      <div id="nav__links--container">
        <ul id="nav__link--list">
          <li>
            <Link className="nav__bar--link" to="">
              Home
            </Link>
          </li>
          <li>
            <Link className="nav__bar--link" to="">
              About
            </Link>
          </li>
          <li>
            <Link className="nav__bar--link" to="">
              Store
            </Link>
          </li>
          <li>
            <Link className="nav__bar--link" to="">
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div id="socials__container">
        <ul id="nav__socials--list">
          <li>
            <FontAwesomeIcon className="nav__socials" icon={faInstagram} />
          </li>
          <li>
            <FontAwesomeIcon className="nav__socials" icon={faTwitter} />
          </li>
          <li>
            <FontAwesomeIcon className="nav__socials" icon={faFacebook} />
          </li>
          <li>
            <FontAwesomeIcon className="nav__socials" icon={faShopify} />
          </li>
        </ul>
      </div>
      <FontAwesomeIcon id="cart__icon" icon={faShoppingBasket} />
    </nav>
  );
};

export default Nav;
