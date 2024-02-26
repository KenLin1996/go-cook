import React, { useState } from "react";
import { Link } from "react-router-dom";

import gmail from "../picture/gmail-icon.png";
import facebook from "../picture/facebook.png";
import phone from "../picture/phone-icon.png";
import Button from "../components/button";

const SignUp = () => {
  // 使用狀態來追蹤密碼是否可見
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  // 使用狀態來控制是否使用 focus 效果
  const [isInputFocused, setIsInputFocused] = useState(false);

  // 切換密碼可見狀態的函數
  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  // 切換真假值  focus 的樣式
  const inputWrapperStyle = {
    border: isInputFocused ? "1px solid #febc57" : "1px solid #cececd",
    boxShadow: isInputFocused ? "0 0 0 3.2px rgba(254, 188, 87, 0.35)" : "none",
  };

  return (
    <div className="main">
      <div className="logInPage">
        <div className="logInTitle">
          <h2>註冊</h2>
        </div>
        <hr></hr>
        <div className="outerWrapper">
          <div className="otherDevices">
            <Button
              label={" Gmail 註冊"}
              icon={gmail}
              backgroundColor={"#ffffff"}
              fontSize={"18px"}
              color={"black"}
              buttonWidth={"100%"}
            />
            <Button
              label={" Facebook 註冊"}
              icon={facebook}
              backgroundColor={"#147DC3"}
              fontSize={"18px"}
              color={"white"}
              buttonWidth={"100%"}
            />
            <Button
              label={" 手機號碼 註冊"}
              icon={phone}
              backgroundColor={"#212529"}
              fontSize={"18px"}
              color={"white"}
              buttonWidth={"100%"}
            />
          </div>
          <form className="logInForm">
            <input
              className="emailInput"
              type="text"
              placeholder="請輸入帳號或電子信箱"
              autoComplete="username"
            />
            <input
              className="accountName"
              type="text"
              minLength={1}
              maxLength={30}
              placeholder="請輸入暱稱"
            />
            <div className="inputWrapper" style={inputWrapperStyle}>
              <input
                type={isPasswordVisible ? "text" : "password"}
                placeholder="請輸入密碼"
                minLength={8}
                maxLength={50}
                autoComplete="current-password"
                onFocus={() => setIsInputFocused(true)}
                onBlur={() => setIsInputFocused(false)}
              />

              {/* 添加控制密碼顯示與隱藏的按鈕 */}
              <button
                type="button"
                style={{
                  fontSize: "16px",
                  color: "#000000",
                  fontWeight: "400",
                  backgroundColor: "#ffffff",
                  width: "40px",
                  marginRight: "12px",

                  border: 0,
                }}
                onClick={togglePasswordVisibility}
              >
                {isPasswordVisible ? "隱藏" : "顯示"}
              </button>
            </div>

            <Button
              label={"註冊"}
              fontSize={"18px"}
              color={"#ffffff"}
              fontWeight={"400"}
              backgroundColor={"#FEBC57"}
              buttonWidth={"50px"}
              buttonHeight={"30px"}
              marginTop={"20px"}
            />
          </form>

          <div className="checkAccount">
            <p>已經有帳號？</p>
            <Link to="/log-in">登入</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
