import { Link } from "react-router-dom";

import React from "react";

const Header = () => {
  return (
    <div>
      <nav className="header-nav">
        <ul className="header-nav-ul">
          <li>
            <Link to="/breakfast" className="header-nav-link">
              早餐
            </Link>
          </li>
          <li>
            <Link to="/" className="header-nav-link">
              午餐
            </Link>
          </li>
          <li>
            <Link to="/" className="header-nav-link">
              晚餐
            </Link>
          </li>
          <li>
            <Link to="/" className="header-nav-link">
              健康餐
            </Link>
          </li>
          <li>
            <Link to="/" className="header-nav-link">
              簡單方便
            </Link>
          </li>
          <li>
            <Link to="/" className="header-nav-link">
              點心
            </Link>
          </li>
        </ul>
        <button className="header-dropdown-button">下拉</button>
      </nav>
    </div>
  );
};

export default Header;
