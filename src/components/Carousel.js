import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import leftArrow from "../picture/icons8-leftArrow.png";
import rightArrow from "../picture/icons8-rightArrow.png";

const Carousel = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isPaused, setIsPaused] = useState(false); // 新增的狀態
  const sliderRef = useRef(null);

  const handleSlideChange = (newIndex) => {
    setCurrentSlide(
      (prevSlide) => (prevSlide + newIndex + slides.length) % slides.length
    );
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    setIsPaused(true); // 暫停輪播
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setIsPaused(false); // 恢復輪播
  };

  const handleButtonClick = (newIndex) => {
    handleSlideChange(newIndex);
    setIsPaused(true); // 在按鈕點擊時暫停輪播
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused) {
        handleSlideChange(1);
      }
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [isPaused, currentSlide]);

  useEffect(() => {
    if (sliderRef.current && !isHovered) {
      sliderRef.current.style.transform = `translateX(-${currentSlide * 100}%)`;
      // setIsPaused(false); // 在這裡恢復輪播，確保在 handleSlideChange 之後
    }
  }, [currentSlide, isHovered]);

  return (
    <div className="slick-list">
      <div className="slick-slider" ref={sliderRef}>
        {slides.map((slide, index) => (
          <div className="slick-slide" key={index}>
            <figure>
              <div
                className="carousel"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <Link to="" target="_blank">
                  <div className="container">
                    <img src={slide.imgSrc} alt={`Slide ${index + 1}`} />
                  </div>
                  <figcaption className="activity-title">
                    <h3>{slide.text}</h3>
                  </figcaption>
                </Link>
              </div>
            </figure>
          </div>
        ))}
      </div>
      <div className="shift">
        <div className="btn" onClick={() => handleButtonClick(-1)}>
          <img src={leftArrow} />
        </div>
        <div className="btn" onClick={() => handleButtonClick(1)}>
          <img src={rightArrow} />
        </div>
      </div>
    </div>
  );
};

export default Carousel;

// 第二版
