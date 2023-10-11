import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import NoodleImg from "/Users/ken/Desktop/go-cook-project/src/picture/noodle.jpg";
import DumplingImg from "/Users/ken/Desktop/go-cook-project/src/picture/dumpling.jpg";
import RiceImg from "/Users/ken/Desktop/go-cook-project/src/picture/rice.jpg";

function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { imgSrc: NoodleImg, text: "30天 烹飪日記，每日的努力是未來健康的基礎～" },
    {
      imgSrc: DumplingImg,
      text: "30天烹飪日記，每日的努力是未來健康的基礎～",
    },
    { imgSrc: RiceImg, text: "每日的努力是未來健康的基礎～" },
  ];

  const handlePrev = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  const handleNext = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === slides.length - 1 ? 0 : prevSlide + 1
    );
  };

  const sliderRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.style.transform = `translateX(-${currentSlide * 100}%)`;
    }
  }, [currentSlide]);

  return (
    <div className="slick-list">
      <div className="slick-slider" ref={sliderRef}>
        {slides.map((slide, index) => (
          <div className="slick-slide" key={index}>
            <Link src="" target="_blank">
              <figure>
                <div className="carousel">
                  <div className="container">
                    <img src={slide.imgSrc} alt={`Slide ${index + 1}`} />
                  </div>
                  <figcaption className="activity-title">
                    <h3>{slide.text}</h3>
                  </figcaption>
                </div>
              </figure>
            </Link>
          </div>
        ))}
      </div>
      <div className="shift">
        <div className="btn" onClick={handlePrev}>
          &lt;
        </div>
        <div className="btn" onClick={handleNext}>
          &gt;
        </div>
      </div>
    </div>
  );
}

export default Carousel;
