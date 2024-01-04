// import React from "react";
// import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
// import Layout from "./Layout";
// import Homepage from "./pages/Homepage";
// import Login from "./pages/Login";
// import SignUp from "./pages/SignUp";

// import "./styles/style.css";
// import RecipeCategories from "./pages/RecipeCategories";
// import SearchResult from "./pages/SearchResult";
// import RecipeDetail from "./pages/RecipeDetail";

// function App() {
//   return (
//     <BrowserRouter>
//       <Layout>
//         <Routes>
//           <Route path="/" element={<Homepage />} />
//           <Route path="logIn" element={<Login />} />
//           <Route path="signUp" element={<SignUp />} />
//           <Route path="categories" element={<RecipeCategories />} />
//           <Route path="SearchResult" element={<SearchResult />} />
//           <Route path="RecipeDetail" element={<RecipeDetail />} />
//         </Routes>
//       </Layout>
//     </BrowserRouter>
//   );
// }

// export default App;

// 第二版
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import RecipeCategories from "./pages/RecipeCategories";
import SearchResult from "./pages/SearchResult";
import RecipeDetail from "./pages/RecipeDetail";
import "./styles/style.css";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="logIn" element={<Login />} />
          <Route path="signUp" element={<SignUp />} />
          <Route path="categories" element={<RecipeCategories />} />
          <Route path="SearchResult" element={<SearchResult />} />
          <Route path="RecipeDetail" element={<RecipeDetail />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
