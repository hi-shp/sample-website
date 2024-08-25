import React from "react";
import "./Nav.css";

export const Nav = () => {

  const handleClick = () => {
    // 클릭 시 이동할 URL을 설정합니다. 예를 들어, "/signup" 페이지로 이동합니다.
    window.location.href = "/signup";
};

  return (
    <div className="nav">
      <div className="home " onClick={handleClick} >TechSol</div>
    </div>
  );
};