import React from "react";
import { Link } from "react-router-dom";

const NavBar = ({ isSearchable }) => {
  return (
    <div>
      <nav className="layout-nav">
        <div className="layout-nav-icon">
          <Link to="/" className="">
            <img src={"/favicon.ico /go-cook-12.png"} alt="My Image" />
          </Link>
        </div>
        {isSearchable && (
          <div className="layout-nav-member">
            <Link to="/logIn" className="logIn">
              Log In
            </Link>
            <Link to="/signUp" className="signUp">
              Sign Up
            </Link>
          </div>
        )}
      </nav>
    </div>
  );
};

export default NavBar;
