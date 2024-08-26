import React, { useState } from "react";
import "./Price.css";
import Modal from "./Modal"; // Modal 컴포넌트 import
import PropTypes from "prop-types";

const Price = ({ className }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = (label) => {
        // Google Analytics 이벤트 전송 (버튼 클릭)
        if (window.gtag) {
            window.gtag('event', label, {
                'event_category': 'Button',
                'event_label': label,
                'value': 1
            });
        }
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };
    const scrollToCenter = (element) => {
        const container = document.querySelector('.plan-container'); // ID 대신 클래스 사용
        if (!container || !element) return;
    
        const containerWidth = container.offsetWidth;
        const elementWidth = element.offsetWidth;
        const elementOffsetLeft = element.getBoundingClientRect().left - container.getBoundingClientRect().left;
        
        container.scrollTo({
            left: elementOffsetLeft - (containerWidth / 2) + (elementWidth / 2),
            behavior: 'smooth'
        });
    };

    return (
        <div className={`price ${className}`}>
            <p className="text1">
                특별한 감사혜택을 놓치지 마세요!
                <br />
                첫구매 고객님들만 받을 수 있는
                <br />
                <span className="p-highlight">역대급 할인</span>
            </p>
            <p className="text2">
                타사대비 
                <span className="highlight"> 가격은 60% 이상 절감 </span>
                가능하며 
                <br />문제를 푸는 것에 최적화되어있어요
            </p>

            <section className="pricing">
                <div className="pricing-table">
                    <div className="plan-names">
                        <div id="price-section" className={`price ${className}`}>
                            <h1 className="h11">가장 저렴하게 이용할 기회입니다!</h1>
                        </div>
                    <div className="plan-container" id="planContainer">
                        <div className="card basic" onClick={(e) => scrollToCenter(e.currentTarget)}>
                            <div className="plan-intro">
                                <h3 className="plan-title">Basic</h3>
                                <div className="plan-price-container">
                                <h1 className="plan-price">무료</h1>
                                <h3 className="price-duration">/</h3>
                                </div>
                                
                            </div>
                            <div className="feature-dividers" />
                            <div className="plan-features-list">
                                <div className="plan-feature-item">
                                    <img className="check-icon" loading="lazy" alt="Check Icon" src="/check.png" />
                                    <div className="feature-description">사진 질문 하루에 3번 무료</div>
                                </div>
                                <div className="plan-feature-item">
                                    <img className="check-icon" loading="lazy" alt="Check Icon" src="/check.png" />
                                    <div className="feature-description">질문했던 문제 보관함에 저장</div>
                                </div>
                                <div className="plan-feature-item">
                                    <img className="check-icon" loading="lazy" alt="Check Icon" src="/check.png" />
                                    <div className="feature-description">쪽지시험지 한달에 1개 생성</div>
                                </div>
                            </div>
                            <div className="pricebutton wrap1" onClick={() => openModal('start_now')}>
                                지금 시작하기
                            </div>
                        </div>

                        <div className="card standard" onClick={(e) => scrollToCenter(e.currentTarget)}>
                            <div className="plan-intro">
                                <h3 className="plan-title">Standard</h3>
                                <div className="popularity">인기</div>
                                <div className="plan-price-container">
                                    <b className="plan-price">4,900원</b>
                                    <h3 className="price-duration">  /월</h3>
                                </div>
                            </div>
                            <div className="feature-dividers" />
                            <div className="plan-features-list">
                                <div className="plan-feature-item">
                                    <img className="check-icon" loading="lazy" alt="Check Icon" src="/check.png" />
                                    <div className="feature-description">무제한 사진 질문</div>
                                </div>
                                <div className="plan-feature-item">
                                    <img className="check-icon" loading="lazy" alt="Check Icon" src="/check.png" />
                                    <div className="feature-description">질문했던 문제 보관함에 저장</div>
                                </div>
                                <div className="plan-feature-item">
                                    <img className="check-icon" loading="lazy" alt="Check Icon" src="/check.png" />
                                    <div className="feature-description">쪽지시험지 한달에 5개 생성</div>
                                </div>
                                <div className="plan-feature-item">
                                    <img className="check-icon" loading="lazy" alt="Check Icon" src="/check.png" />
                                    <div className="feature-description">관련 개념 바로 소개</div>
                                </div>
                                <div className="plan-feature-item">
                                    <img className="check-icon" loading="lazy" alt="Check Icon" src="/check.png" />
                                    <div className="feature-description">광고 제거</div>
                                </div>
                            </div>
                            <div className="pricebutton wrap2" onClick={() => openModal('pay_4900')}>
                                첫구매 혜택받기
                            </div>
                        </div>

                        <div className="card professional" onClick={(e) => scrollToCenter(e.currentTarget)}>
                            <div className="plan-intro">
                                <h3 className="plan-title">Professional</h3>
                                <div className="plan-price-container">
                                    <b className="plan-price">9,900원</b>
                                    <h3 className="price-duration">  /월</h3>
                                </div>
                            </div>
                            <div className="feature-dividers" />
                            <div className="plan-features-list">
                                <div className="plan-feature-item">
                                    <img className="check-icon" loading="lazy" alt="Check Icon" src="/check.png" />
                                    <div className="feature-description">무제한 사진 질문</div>
                                </div>
                                <div className="plan-feature-item">
                                    <img className="check-icon" loading="lazy" alt="Check Icon" src="/check.png" />
                                    <div className="feature-description">질문했던 문제 보관함에 저장</div>
                                </div>
                                <div className="plan-feature-item">
                                    <img className="check-icon" loading="lazy" alt="Check Icon" src="/check.png" />
                                    <div className="feature-description">저장된 문제 폴더별로 정리</div>
                                </div>
                                <div className="plan-feature-item">
                                    <img className="check-icon" loading="lazy" alt="Check Icon" src="/check.png" />
                                    <div className="feature-description">쪽지시험지 무제한 생성</div>
                                </div>
                                <div className="plan-feature-item">
                                    <img className="check-icon" loading="lazy" alt="Check Icon" src="/check.png" />
                                    <div className="feature-description">관련 개념 바로 소개</div>
                                </div>
                                <div className="plan-feature-item">
                                    <img className="check-icon" loading="lazy" alt="Check Icon" src="/check.png" />
                                    <div className="feature-description">커뮤니티 이용</div>
                                </div>
                                <div className="plan-feature-item">
                                    <img className="check-icon" loading="lazy" alt="Check Icon" src="/check.png" />
                                    <div className="feature-description">광고 제거</div>
                                </div>
                            </div>
                            <div className="pricebutton wrap2" onClick={() => openModal('pay_9900')}>
                                첫구매 혜택받기
                            </div>
                        </div>
                        
                    </div>
                </div>
                </div>
            </section>

            {/* Modal 컴포넌트, isOpen 상태와 onClose 함수를 prop으로 전달 */}
            <Modal isOpen={isModalOpen} onClose={closeModal} />
        </div>
        
    );
};

Price.propTypes = {
    className: PropTypes.string,
};

export default Price;
