import React, { Fragment } from "react";
import contact1 from "./../img/Social Media/facebook.jpg";
import contact2 from "./../img/Social Media/twitter.webp";
import contact3 from "./../img/Social Media/google.webp";
import contact4 from "./../img/Social Media/youtube.webp";
import contact5 from "./../img/Social Media/instgram.webp";

const Footer = () => {
  return (
    <Fragment>
      <div className="third__section">
        <h2>Contact Us</h2>
        <strong>
          <ul>
            <li>123 Street, Old Trafford, NewYork, USA</li>
            <li>
              <a src="info@sitename.com">info@sitename.com</a>
            </li>
            <li>+ 457 789 789 65</li>
          </ul>
        </strong>
        <div className="social">
          <img src={contact1} alt="facebook" />
          <img src={contact2} alt="twitter" />
          <img src={contact3} alt="google" />
          <img src={contact4} alt="youtube" />
          <img src={contact5} alt="instgram" />
        </div>
      </div>
    </Fragment>
  );
};

export default Footer;
