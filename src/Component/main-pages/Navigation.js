import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { TiThMenu } from "react-icons/ti";
import { BsCart4 } from "react-icons/bs";

function Navigation() {
  const [mobile, setMobile] = useState(false);
  const rightNav = mobile ? "right__nav__mobile" : "right__nav";

  return (
    <>
      <div className="parent__nav">
        <nav className="navigation">
          <div className="left__nav">
            <BsCart4 className="svg" size={38} style={{ color: "#fb6161" }} />
            <h1>Shopwise</h1>
          </div>
          <div
            className={mobile}
            onClick={() => {
              setMobile(!mobile);
            }}
          >
            <TiThMenu className="toggle" size={40} />
          </div>
          <div className={rightNav}>
            <NavLink className="right__nav__a" to="/home">
              Home
            </NavLink>
            <NavLink className="right__nav__a" to="/Products">
              Products
            </NavLink>
            <NavLink className="right__nav__a" to="/Carts">
              Carts
            </NavLink>
            {/* <NavLink className="right__nav__a" to="/">
              Login
            </NavLink> */}
            <NavLink className="right__nav__a" to="/Profile">
              Profile
            </NavLink>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navigation;
