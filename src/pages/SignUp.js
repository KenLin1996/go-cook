import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";
// import app from "../utils/firebase";
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import { Link, useNavigate } from "react-router-dom";

import gmail from "../picture/gmail-icon.png";
import facebook from "../picture/facebook.png";
import phone from "../picture/phone-icon.png";
import Button from "../components/button";

const SignUp = () => {
  // 初始化身份驗證化服務
  // const auth = getAuth(app);

  // 儲存 Email 的值
  const [email, setEmail] = useState("test123@gmail.com");

  // 儲存 password 的值
  const [passwordValue, setPasswordValue] = useState("12345678");

  // 使用狀態來追蹤密碼是否可見
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  // 使用狀態來控制是否使用 focus 效果
  const [isInputFocused, setIsInputFocused] = useState(false);

  // error 提示
  const [errorMessage, setErrorMessage] = useState("");

  // 切換密碼可見狀態的函數
  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  // 切換 Nav
  const navigate = useNavigate();

  // 註冊
  const handleSignUp = (event) => {
    console.log("有點擊成功");
    event.preventDefault(); // 阻止表單的默認提交行為

    createUserWithEmailAndPassword(auth, email, passwordValue)
      .then(() => {
        console.log("註冊成功，導航到首頁");
        navigate("/");
      })
      .catch((error) => {
        console.log(error);

        switch (error.code) {
          case "auth/email-already-in-use":
            setErrorMessage("信箱已存在");
            break;
          case "auth/invalid-email":
            setErrorMessage("信箱格式不正確");
            break;
          case "auth/weak-password":
            setErrorMessage("密碼強度不足");
            break;
          default:
        }
      });
  };

  // type 真假值的切換，以改變輸入匡在偽元素 focus 時的樣式
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
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="請輸入帳號或電子信箱"
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
                value={passwordValue}
                onChange={(e) => {
                  setPasswordValue(e.target.value);
                }}
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

            {errorMessage && <div>{errorMessage}</div>}

            <Button
              label={"註冊"}
              fontSize={"18px"}
              color={"#ffffff"}
              fontWeight={"400"}
              backgroundColor={"#FEBC57"}
              buttonWidth={"50px"}
              buttonHeight={"30px"}
              marginTop={"20px"}
              onClick={handleSignUp}
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
