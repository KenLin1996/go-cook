import { Outlet, Link } from "react-router-dom";
import React from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import Footer from "./components/Footer";

const Layout = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/" className="icon">
              <img src={"/favicon.ico /go-cook.png"} alt="My Image" />
            </Link>
          </li>
          <li>
            <Link to="/logIn" className="login">
              Log In
            </Link>
          </li>
        </ul>
      </nav>
      <Header />
      <Search />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
