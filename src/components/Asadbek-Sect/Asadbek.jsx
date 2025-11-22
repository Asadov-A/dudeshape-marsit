import React from "react";
import { useState, useEffect } from "react";
import "./Asadbek.css";
import sect1Img from "../../assets/backgrounds/sect-1.png";

import icon1 from "../../assets/icons/Airbnb.png";
import icon2 from "../../assets/icons/Hubspot.png";
import icon3 from "../../assets/icons/Google.png";
import icon4 from "../../assets/icons/Microsoft.png";
import icon5 from "../../assets/icons/Walmart.png";
import icon6 from "../../assets/icons/FedEx.png";

function Asadbek() {
  return (
    <>
      <header>
        <a href="#">
          <i className="web-logo">Dudeshape</i>
        </a>

        <ol>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Products</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
        </ol>

        <nav>
          <button className="user-btn">
            <i class="fa-regular fa-user"></i>
          </button>
          <button className="cart-btn">
            <i class="fa-solid fa-cart-plus"></i>
          </button>
          <button className="settings-btn">
            <i class="fa-solid fa-bars"></i>
          </button>
        </nav>
      </header>

      <section className="sect-1">
        <div className="sect-1--text">
          <h1>Get Your Best Cosmetic Products Here</h1>

          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy
          </p>

          <div className="sect-1--input">
            <input placeholder="Search..." type="text" />
            <button className="search-btn">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>

          <button className="shop-now">Shop Now</button>
        </div>

        <img className="sect-1--bg" src={sect1Img} alt="sect-1--bg" />
      </section>

      <section className="sect-2">
        <a href="#"><img src={icon1} alt="airbnb-icon" /></a>
        <a href="#"><img src={icon2} alt="hubspot-icon" /></a>
        <a href="#"><img src={icon3} alt="google-icon" /></a>
        <a href="#"><img src={icon4} alt="microsoft-icon" /></a>
        <a href="#"><img src={icon5} alt="walmart-icon" /></a>
        <a href="#"><img src={icon6} alt="fedex-icon" /></a>
      </section>
    </>
  );
}

export default Asadbek;
