import React, { useEffect } from "react";
import "./Function.css";

export const Function = () => {

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("show");
                    }
                });
            },
            { threshold: 0.1 } // 요소가 10% 보일 때 애니메이션 실행
        );

        const elements = document.querySelectorAll(".f-frame-wrapper");
        elements.forEach((el) => observer.observe(el));

        // Clean up the observer on unmount
        return () => {
            elements.forEach((el) => observer.unobserve(el));
        };
    }, []);

    const scrollToPriceSection = () => {
        const priceSection = document.getElementById("price-section");

        // Google Analytics 이벤트 전송 (버튼 클릭)
        if (window.gtag) {
            window.gtag('event', 'go_to_use', {
                'event_category': 'Button',
                'event_label': 'Go to Price Section',
                'value': 1
            });
        }

        if (priceSection) {
            priceSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="function">
            <p className="f-text">문제를 풀어주는 것이 다가 아닙니다</p>

            <div className="f-frame">
                <div className="f-frame-wrapper">
                    <div className="f-div">
                        <img className="f-element" alt="Element" src="func1.png" />
                        <div className="f-frame-2">
                            <div className="f-text-wrapper-2">문제를 저장해 과목별로 돌아보기</div>
                            <p className="f-p">
                                질문했던 문제들을 다시 꺼내보고 싶지 않으셨나요?
                                <br />
                                과목별 단원별 내가 원하는대로 폴더를 만들어 복습하기 좋아요
                            </p>
                        </div>
                    </div>
                </div>
                <div className="f-frame-wrapper">
                    <div className="f-div">
                        <img className="f-element" alt="Element" src="func2.png" />
                        <div className="f-frame-2">
                            <div className="f-text-wrapper-2">AI가 만들어준 쪽지시험지로 집중공부</div>
                            <p className="f-p">
                                선택한 문제들을 바탕으로 시험지를 생성해줘요
                                <br />
                                시험치기 전 마지막으로 공부를 잘 했는지 테스트해봐요
                            </p>
                        </div>
                    </div>
                </div>
                <div className="f-frame-wrapper">
                    <div className="f-div">
                        <img className="f-element" alt="Element" src="func3.png" />
                        <div className="f-frame-2">
                            <div className="f-text-wrapper-2">관련 개념부터 차근차근</div>
                            <p className="f-p">
                                문제를 풀기 위해 기본이 되는 개념부터 학습할 수 있어요
                                <br />
                                도움이 되는 영상 및 강의 추천까지 한눈에 확인해요
                            </p>
                        </div>
                    </div>
                </div>
                <div className="f-frame-wrapper">
                    <div className="f-div">
                        <img className="f-element" alt="Element" src="func4.png" />
                        <div className="f-frame-2">
                            <div className="f-text-wrapper-2">솔뮤니티에서 풀이법 공유하기</div>
                            <p className="f-p">
                                테크솔 커뮤니티를 통해 다른 사람들은 어떻게 풀었는지 확인해요
                                <br />
                                같은 학교 사람들에게 시험에 관한 정보를 얻을 수도 있어요
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="f-frame-6">
              <button className="f-button" onClick={scrollToPriceSection}>이용하러 가기</button>
            </div>
        </div>
    );
};
