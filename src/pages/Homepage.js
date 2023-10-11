import React from "react";

import NewSearch from "../components/NewSearch";

import DumplingImg from "/Users/ken/Desktop/go-cook-project/src/picture/dumpling.jpg";
import NoodleImg from "/Users/ken/Desktop/go-cook-project/src/picture/noodle.jpg";
import RiceImg from "/Users/ken/Desktop/go-cook-project/src/picture/rice.jpg";
import RecipeCard from "../components/RecipeCard";
import Aside from "../components/Aside";

const Homepage = () => {
  const recipes1 = [
    { name: "無敵水餃", author: "Bruce", image: DumplingImg },
    { name: "超級麵麵", author: "Alex", image: NoodleImg },
    { name: "美味飯飯", author: "Peter", image: RiceImg },
    { name: "美味飯飯", author: "John", image: RiceImg },
  ];

  // const recipes2 = [
  //   { name: "食物4", image: "url4" },
  //   { name: "食物5", image: "url5" },
  //   { name: "食物6", image: "url6" },
  // ];

  // const recipes3 = [
  //   { name: "食物7", image: "url7" },
  //   { name: "食物8", image: "url8" },
  //   { name: "食物9", image: "url9" },
  // ];

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
          <Aside />
        </aside>
      </main>
    </div>
  );
};

export default Homepage;
