import React from "react";

const Button = ({
  label,
  buttonWidth,
  buttonHeight,
  fontSize,
  backgroundColor,
  borderRadius,
  color,
  icon,
  fontWeight,
  marginTop,
  onClick,
}) => {
  const buttonStyle = {
    display: "flex",
    fontWeight: fontWeight ? fontWeight : "600",
    justifyContent: "center",
    padding: "0px 6px",
    alignItems: "center",
    cursor: "pointer",
    border: "1px solid #cececd",
    borderRadius: borderRadius ? borderRadius : "6px",
    color: color,
    width: buttonWidth ? buttonWidth : "165px",
    height: buttonHeight ? buttonHeight : "50px",
    fontSize: fontSize,
    backgroundColor: backgroundColor,
    marginTop: marginTop,
  };

  const iconStyle = {
    marginRight: "5px",
    width: fontSize ? fontSize : "24px", // 如果 size 存在，則使用 size，否則使用 '24px'
    height: fontSize ? fontSize : "24px", // 如果 size 存在，則使用 size，否則使用 '24px'
  };

  return (
    <button style={buttonStyle} onClick={onClick}>
      {icon && <img src={icon} className="icon" style={iconStyle} />}
      {label}
    </button>
  );
};

export default Button;
