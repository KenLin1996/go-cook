import React from "react";
import CardHeader from "./CardHeader";
import Carousel from "./Carousel";

const Aside = () => {
  return (
    <section className="activity_info">
      <CardHeader title="活動" />
      <Carousel />
    </section>
  );
};

export default Aside;
