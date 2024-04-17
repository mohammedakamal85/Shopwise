import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import Navigation from "./Navigation";
import main1 from "./../img/Home/main1.png";
import main2 from "./../img/Home/main2.png";
import main3 from "./../img/Home/main3.png";
import img1 from "./../img/Cards/product 1.jpg";
import img2 from "./../img/Cards/product 2.jpg";
import img3 from "./../img/Cards/product 3.jpg";
import img4 from "./../img/Cards/product 4.jpg";
import img5 from "./../img/Cards/product 5.jpg";
import img6 from "./../img/Cards/product 6.jpg";
import info from "./../img/Home/who are we.jpg";

function Home() {
  const [backgroundImage, setBackgroundImage] = useState(0);
  const backgrounds = [main1, main2, main3];

  useEffect(() => {
    const interval = setInterval(() => {
      setBackgroundImage((prevIndex) => (prevIndex + 1) % backgrounds.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
    <Navigation />
      <div
        className="first__section"
        style={{ backgroundImage: `url(${backgrounds[backgroundImage]})` }}
      >
        <div className="first__container">
          <h1>New Collection</h1>
          <strong>Get up to 50% off Today Only!</strong>
          <br />
          <button>Shop Now</button>
        </div>
      </div>
      {/* Second Section */}
      <div className="second__section">
        <h1 className="title">Special Offers</h1>
        <br />
        <div className="second__container">
          <div className="card">
            <img src={img1} alt="product_1" />
            <h1>Bar Chair</h1>
            <strong>Special Offer</strong>
            <p>100$</p>
            <button>Show More</button>
          </div>
          <div className="card">
            <img src={img2} alt="product_2" />
            <h1>Chair</h1>
            <strong>Special Offer</strong>
            <p>350$</p>
            <button>Show More</button>
          </div>
          <div className="card">
            <img src={img3} alt="product_3" />
            <h1>Birds</h1>
            <strong>Special Offer</strong>
            <p>200$</p>
            <button>Show More</button>
          </div>
          <div className="card">
            <img src={img4} alt="product_4" />
            <h1>Wooden Chair</h1>
            <strong>Special Offer</strong>
            <p>100$</p>
            <button>Show More</button>
          </div>
          <div className="card">
            <img src={img5} alt="product_5" />
            <h1>Sofa</h1>
            <strong>Special Offer</strong>
            <p>500$</p>
            <button>Show More</button>
          </div>
          <div className="card">
            <img src={img6} alt="product_6" />
            <h1>Plastic Chair</h1>
            <strong>Special Offer</strong>
            <p>100$</p>
            <button>Show More</button>
          </div>
        </div>
      </div>
      <div className="info__section">
        <h1 className="info__section__h1">Who Are We</h1>
        <div className="info__container">
          <div className="info__img">
            <img src={info} alt="info" />
          </div>
          <div className="info__text">
            <strong>
              At Shopwise, we’re more than just an online marketplace. We’re
              your trusted companion on the digital shopping journey. Our story
              began with a simple vision: to create a seamless and delightful
              shopping experience for everyone.
            </strong>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
