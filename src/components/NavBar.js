import React, { useState, useEffect } from "react";
import websiteLogo from "../picture/go-cook-12.png";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import homeIcon from "../picture/home-icon.png";
import searchIcon from "../picture/nav-search-icon.png";
import addIcon from "../picture/add-icon.png";

const NavBar = ({}) => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });
  }, []);
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

        <div className="layout-nav-status">
          {user ? (
            <ul className="loggedIn-list">
              <li>
                <Link to="/">
                  <div className="navItem">
                    <img
                      src={homeIcon}
                      style={{ width: "24px", marginRight: "4px" }}
                    />
                    <span>首頁</span>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <div className="navItem">
                    <img
                      src={searchIcon}
                      style={{ width: "24px", marginRight: "4px" }}
                    />
                    <span>搜尋食譜</span>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <div className="navItem">
                    <img
                      src={addIcon}
                      style={{ width: "24px", marginRight: "4px" }}
                    />
                    <span>新增食譜</span>
                  </div>
                </Link>
              </li>
              <li>
                <button
                  className="signOut"
                  onClick={() => {
                    auth.signOut();
                  }}
                >
                  登出
                </button>
              </li>
            </ul>
          ) : (
            <>
              <button onClick={handleClickLogin} className="logIn">
                登入
              </button>
              <button onClick={handleClickSignUp} className="signUp">
                註冊
              </button>
            </>
          )}
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
