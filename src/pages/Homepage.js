import React from "react";

import Search from "../components/Search";
import CardHeader from "../components/CardHeader";
import Carousel from "../components/Carousel";

import DumplingImg from "../picture/dumpling.jpg";
import NoodleImg from "../picture/noodle.jpg";
import RiceImg from "../picture/rice.jpg";
import RecipeCard from "../components/RecipeCard";

const Homepage = () => {
  const recipes1 = [
    {
      name: "清炒高麗菜",
      author: "五條悟",
      image:
        "https://img-global.cpcdn.com/recipes/ab6f71303b661abf/1360x964cq70/%E6%B8%85%E7%82%92%E9%AB%98%E9%BA%97%E8%8F%9C-%E9%A3%9F%E8%AD%9C%E6%88%90%E5%93%81%E7%85%A7%E7%89%87.webp",
      recipeLink: "http://localhost:3000/detail/111",
    },
    {
      name: "高麗菜捲",
      author: "夏油傑",
      image:
        "https://img-global.cpcdn.com/recipes/a772124ca805a06c/1360x964cq70/%E9%AB%98%E9%BA%97%E8%8F%9C%E6%8D%B2-%E9%A3%9F%E8%AD%9C%E6%88%90%E5%93%81%E7%85%A7%E7%89%87.webp",
      recipeLink: "http://localhost:3000/detail/222",
    },
    {
      name: "醜豆炒雞胸肉",
      author: "野原新之助",
      image:
        "https://img-global.cpcdn.com/recipes/fef9ed9d53dd0e3f/1360x964cq70/%E9%86%9C%E8%B1%86%E7%82%92%E9%9B%9E%E8%83%B8-%E9%A3%9F%E8%AD%9C%E6%88%90%E5%93%81%E7%85%A7%E7%89%87.webp",
      recipeLink: "http://localhost:3000/detail/333",
    },
    {
      name: "蒜味雞胸肉",
      author: "園長先生",
      image:
        "https://img-global.cpcdn.com/recipes/17af24581d8d0604/1360x964cq70/%E8%92%9C%E5%91%B3%E9%9B%9E%E8%83%B8%E8%82%89-%E9%A3%9F%E8%AD%9C%E6%88%90%E5%93%81%E7%85%A7%E7%89%87.webp",
      recipeLink: "http://localhost:3000/detail/444",
    },
  ];
  const slides = [
    { imgSrc: NoodleImg, text: "30天 烹飪日記，每日的努力是未來健康的基礎～" },
    {
      imgSrc: DumplingImg,
      text: "30天烹飪日記，每日的努力是未來健康的基礎～",
    },
    { imgSrc: RiceImg, text: "每日的努力是未來健康的基礎～" },
  ];

  return (
    <div className="homepageContainer">
      <Search />

      <main className="homepage main">
        <section className="homepage-main-content">
          <RecipeCard
            title="今日熱門"
            recipes={recipes1}
            link={"./categories"}
          />
          <RecipeCard
            title="季節食材"
            recipes={recipes1}
            link={"./categories"}
          />
          <RecipeCard
            title="中式料理"
            recipes={recipes1}
            link={"./categories"}
          />
          <RecipeCard
            title="日式料理"
            recipes={recipes1}
            link={"./categories"}
          />
          <RecipeCard
            title="西式料理"
            recipes={recipes1}
            link={"./categories"}
          />
        </section>
        <aside className="homepageAside">
          <section className="activity_info">
            <CardHeader title="活動" />
            <Carousel slides={slides} />
          </section>
        </aside>
      </main>
    </div>
  );
};

export default Homepage;
