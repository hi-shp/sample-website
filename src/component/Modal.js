import React, { useState } from "react";
import "./Modal.css"; // 모달 스타일을 포함할 CSS 파일
import PropTypes from "prop-types";

const Modal = ({ isOpen, onClose }) => {
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        // Google Analytics 이벤트 전송 (이메일 제출)
        if (window.gtag) {
            window.gtag('event', 'submit', {
                'event_category': 'Form',
                'event_label': 'Email Submitted',
                'value': 1
            });
        }

        console.log({ email });
        setSubmitted(true);
    };

    if (!isOpen) return null; // 모달이 열려있지 않으면 아무것도 렌더링하지 않음

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <img src="apologize.png" alt="Apologize" />
                <button className="modal-close" onClick={onClose}>X</button>
                <h2>개발중</h2> {/* 공통 제목 */}
                <p className="modal-contents">
                    현재 테크솔은 개발 중에 있습니다<br />
                    관심을 가져주신 것에 진심으로 감사드립니다<br />
                    빠른 시일 내에 좋은 서비스를 제공하기 위해 최선을 다하고 있습니다<br />
                    <div className="m-highlight">
                    아래에 이메일을 알려주시면 서비스 정식 출시 후 감사한 마음을 담아 <br />
                    ***할인코드를 보내드리려 합니다***<br />
                    </div>
                    
                    여러분들의 응원과 피드백에 항상 귀기울이고 있습니다!
                </p>
                
                {/* 이메일 입력 폼 */}
                <form onSubmit={handleSubmit}>
                    <div className="modal-email">
                        <input
                            type="email"
                            id="email"
                            className="email-input"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                         {/* 이미지 버튼 */}
                        <img 
                            src="submit-button.png" 
                            alt="Submit" 
                            className="submit-image"
                            onClick={handleSubmit}
                        />
                    </div>
                </form>

                {submitted && <p className="submitted-message">제출되었습니다. 감사합니다!</p>}
            </div>
        </div>
    );
};

Modal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default Modal;
