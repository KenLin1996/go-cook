import React from "react";
import websiteLogo from "../picture/go-cook-12.png";
import { Link, useNavigate } from "react-router-dom";

const NavBar = ({ isSearchable }) => {
  const navigate = useNavigate();

  const handleClickLogin = () => {
    navigate("/log-in");
  };

  const handleClickSignUp = () => {
    navigate("/sign-up");
  };

  return (
    <div>
      <nav className="layout-nav">
        <div className="layout-nav-icon">
          <Link to="/" className="">
            <img src={websiteLogo} alt="websiteLogo" />
          </Link>
        </div>
        {isSearchable && (
          <div className="layout-nav-status">
            <button onClick={handleClickLogin} className="logIn">
              登入
            </button>
            <button onClick={handleClickSignUp} className="signUp">
              註冊
            </button>
          </div>
        )}
      </nav>
    </div>
  );
};

export default NavBar;
