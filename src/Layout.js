// 第一版
// import { Outlet, Link } from "react-router-dom";
// import React from "react";

// import NavBar from "./components/NavBar";

// import Footer from "./components/Footer";

// const Layout = ({ isSearchable, children }) => {
//   return (
//     <div className="wrapper">
//       <NavBar isSearchable={isSearchable} />
//       {children}
//       <Outlet />
//       <Footer />
//     </div>
//   );
// };

// export default Layout;

// 第二版 目前使用的
// import React from "react";
// import NavBar from "./components/NavBar";
// import Footer from "./components/Footer";

// const Layout = ({ isSearchable, children }) => {
//   return (
//     <div className="wrapper">
//       <NavBar isSearchable={isSearchable} />
//       {children}
//       <Footer />
//     </div>
//   );
// };

// export default Layout;

//第三版
import React from "react";
import { useLocation } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

const Layout = ({ isSearchable, children }) => {
  const location = useLocation();

  // 檢查當前的 route 是否是 RecipeDetail
  const isRecipeDetail = location.pathname.includes("RecipeDetail");

  return (
    <div className="wrapper">
      <NavBar isSearchable={isSearchable} />
      {children}
      {!isRecipeDetail && <Footer />}
    </div>
  );
};

export default Layout;
