import React from "react";
import clock from "../picture/icons8-time.png";
import member from "../picture/icons8-member.png";

const TimeAndMember = ({ time, servings }) => {
  return (
    <div className="time-member">
      <ul>
        <li>
          <img src={clock} alt="時間圖示" />
          <span>{time}</span>
        </li>
        <li>
          <img src={member} alt="人數圖示" />
          <span>{servings}</span>
        </li>
      </ul>
    </div>
  );
};

export default TimeAndMember;
