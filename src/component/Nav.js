import { useNavigate } from 'react-router-dom';
import React from "react";
import "./Nav.css";

export const Nav = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    // 페이지 상단으로 스크롤 이동
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // 현재 페이지로 다시 네비게이트 (새로고침처럼 보이게 함)
    setTimeout(() => {
      navigate(0); // 리액트 라우터 v6에서는 navigate(0)로 현재 경로를 다시 로드
    }, 500); // 스크롤 이동 후 약간의 지연을 두어 네비게이트
  };

  return (
    
    <div className="nav">
      <div className="home" onClick={handleClick}>TechSol</div>
    </div>
  );
};
