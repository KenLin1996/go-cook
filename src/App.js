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
          <Route path="/log-in" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/categories" element={<RecipeCategories />} />
          <Route path="/search-result" element={<SearchResult />} />
          <Route path="/categories/:id/*" element={<SearchResult />} />
          <Route path="/detail/:id/*" element={<RecipeDetail />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
