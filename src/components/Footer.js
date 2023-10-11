import React from "react";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <footer className="footer">
        <div className="footer-content">
          <div className="content-left">
            <p className="content-left-title">關於我們</p>
            <p>
              我們秉持著簡約且直觀的理念，致力於建立一個適用於各年齡層的線上食譜平台。
              GC
              讓您輕鬆挑選要烹飪的料理，同時透過食譜分享讓每位使用者能透過自己的烹飪體驗分享更豐富多彩的生活點滴～
            </p>
          </div>
          <div className="content-right"></div>
        </div>
        <div className="footer-info">
          <p>&copy; {new Date().getFullYear()} GoCook 製作</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
