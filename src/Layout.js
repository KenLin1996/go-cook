import React from "react";
import { useLocation } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

const Layout = ({ children }) => {
  const location = useLocation();

  // 定義要顯示 Footer 的條件
  const hideFooterConditions = [
    location.pathname.includes("detail"),
    location.pathname.includes("log-in"),
    location.pathname.includes("sign-up"),
  ];
  // 檢查是否要顯示 Footer
  const shouldShowFooter = !hideFooterConditions.some((condition) => condition);

  return (
    <div className="wrapper">
      <NavBar />
      {children}
      {shouldShowFooter && <Footer />}
    </div>
  );
};

export default Layout;
