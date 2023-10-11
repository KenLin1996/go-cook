import React from "react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Layout from "./Layout";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

import "./styles/style.css";
import RecipeCategories from "./pages/RecipeCategories";
import SearchResult from "./pages/SearchResult";

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
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
