import React, { useState } from "react";
import "./Intro.css";
import Modal from "./Modal"; // Modal 컴포넌트 import

export const Intro = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // 모달 상태 관리

  const openModal = () => {
    // Google Analytics 이벤트 전송 (무료로 사용하기 클릭)
    if (window.gtag) {
      window.gtag('event', 'click', {
        'event_category': 'Button',
        'event_label': 'Free Use Clicked',
        'value': 1
      });
    }
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false); // 모달 닫기

  return (
    <div className="I-screen">
      <div className="I-view">
        <div className="I-frame">
          <div className="I-text-wrapper">Take a Solution</div>
          <p className="I-AI">
            <span className="I-span">
              테크솔은 이공계열 대학생들을 위한
              <br />
              AI 문제풀이 서비스입니다
              <br />
              기존의 문제풀이 기능만 있는 것이 아니라
              <br />
            </span>
            <span className="I-text-wrapper-2">문제풀이에 최적화</span>
            <span className="I-span">
              되어있는 다양한 기능들로 <br />
              효율적인 학습환경을 제공해드립니다
              <br />
              지금 사용해보세요
            </span>
          </p>
        </div>
        <div className="I-frame-wrapper">
          <div className="I-div-wrapper" onClick={openModal} style={{ cursor: 'pointer' }}>
            <div className="I-div">
              무료로 사용하기
            </div>
          </div>
        </div>
      </div>
      <img className="I-img" alt="intro Img" src="intro.png" />
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};
