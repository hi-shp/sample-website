import React from "react";
import "./Nav.css";

export const Nav = () => {
  const handleClick = () => {
    // 페이지 상단으로 스크롤 이동
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // 페이지 새로고침
    setTimeout(() => {
      window.location.reload();
    }, 500); // 스크롤 이동 후 약간의 지연을 두어 새로고침
  };

  return (
    <div className="nav">
      <div className="home" onClick={handleClick}>TechSol</div>
    </div>
  );
};
