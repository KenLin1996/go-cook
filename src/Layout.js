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

import React from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

const Layout = ({ isSearchable, children }) => {
  return (
    <div className="wrapper">
      <NavBar isSearchable={isSearchable} />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
