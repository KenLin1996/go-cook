import React from "react";

import NewSearch from "../components/NewSearch";
import CardHeader from "../components/CardHeader";
import Carousel from "../components/Carousel";

// import recipes from "../recipes"

import DumplingImg from "/Users/ken/Desktop/go-cook-project/src/picture/dumpling.jpg";
import NoodleImg from "/Users/ken/Desktop/go-cook-project/src/picture/noodle.jpg";
import RiceImg from "/Users/ken/Desktop/go-cook-project/src/picture/rice.jpg";
import RecipeCard from "../components/RecipeCard";

const Homepage = () => {
  const recipes1 = [
    { name: "無敵水餃", author: "Bruce", image: DumplingImg },
    { name: "超級麵麵", author: "Alex", image: NoodleImg },
    { name: "美味飯飯", author: "Peter", image: RiceImg },
    { name: "美味飯飯", author: "John", image: RiceImg },
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
    <div>
      <NewSearch />

      <main className="homepage main">
        <section className="homepage-main-content">
          <RecipeCard title="今日熱門" recipes={recipes1} />
          <RecipeCard title="季節食材" recipes={recipes1} />
          <RecipeCard title="今日熱門" recipes={recipes1} />
          <RecipeCard title="今日熱門" recipes={recipes1} />
          <RecipeCard title="今日熱門" recipes={recipes1} />
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
