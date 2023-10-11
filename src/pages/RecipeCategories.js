// RecipeCategories.js
import React from "react";
import SubCategories from "../components/SubCategories";
import SearchResult from "./SearchResult";

const RecipeCategories = () => {
  const categories = [
    {
      id: 1,
      name: "蔬菜",
      subcategories: [
        {
          id: 11,
          name: "菠菜",
          links: "/SearchResult",
        },
        {
          id: 12,
          name: "青江菜",
          links: "/",
        },
        {
          id: 13,
          name: "花椰菜",
          links: "/",
        },
        {
          id: 14,
          name: "高麗菜",
          links: "/",
        },
        {
          id: 15,
          name: "水蓮",
          links: "/",
        },
        {
          id: 16,
          name: "大白菜",
          links: "/",
        },
      ],
    },
    {
      id: 2,
      name: "肉肉",
      subcategories: [
        {
          id: 21,
          name: "雞胸肉",
          links: "/",
        },
        {
          id: 22,
          name: "牛肉",
          links: "/",
        },
        {
          id: 23,
          name: "羊肉",
          links: "/",
        },
      ],
    },
    {
      id: 3,
      name: "料理工具",
      subcategories: [
        {
          id: 31,
          name: "平底鍋",
          links: "/",
        },
        {
          id: 32,
          name: "氣炸鍋",
          links: "/",
        },
        {
          id: 33,
          name: "微波爐",
          links: "/",
        },
      ],
    },
    {
      id: 4,
      name: "肉肉",
      subcategories: [
        {
          id: 41,
          name: "雞胸肉",
          links: "/",
        },
        {
          id: 42,
          name: "牛肉",
          links: "/",
        },
        {
          id: 43,
          name: "羊肉",
          links: "/",
        },
      ],
    },
    {
      id: 5,
      name: "肉肉",
      subcategories: [
        {
          id: 51,
          name: "雞胸肉",
          links: "/",
        },
        {
          id: 52,
          name: "牛肉",
          links: "/",
        },
        {
          id: 53,
          name: "羊肉",
          links: "/",
        },
      ],
    },
    {
      id: 6,
      name: "肉肉",
      subcategories: [
        {
          id: 61,
          name: "雞胸肉",
          links: "/",
        },
        {
          id: 62,
          name: "牛肉",
          links: "/",
        },
        {
          id: 63,
          name: "羊肉",
          links: "/",
        },
      ],
    },
  ];

  return (
    <div className="content-wrapper">
      <main className="categories main">
        <h2>所有分類</h2>
        <ul className="categories-list">
          {categories.map((category) => (
            <li key={category.id} className="categories-all-parents">
              <h3>{category.name}</h3>
              <SubCategories subcategories={category.subcategories} />
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
};

export default RecipeCategories;
