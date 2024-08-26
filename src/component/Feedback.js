import React, { useState } from "react";
import "./Feedback.css";

const Feedback = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Google Analytics 이벤트 전송 (폼 제출)
    if (window.gtag) {
      window.gtag('event', 'feedback_submit', {
        'event_category': 'Feedback Form',
        'event_label': 'Form Submitted',
        'value': 1
      });
    }

    // Netlify에서 폼 제출을 처리하도록 설정
    const form = e.target;
    const formData = new FormData(form);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => setSubmitted(true))
      .catch((error) => alert(error));
  };

  return (
    <div className="feedback">
      <div className="feedback-content">
        <div className="feedback-title">
          <h1 className="h13">피드백 및 질문하기</h1>
          <h3 className="h35">
            여러분의 의견을 자유롭게 보내주세요
            <br />
            훌륭한 서비스로 보답하겠습니다
          </h3>
        </div>

        <form 
          className="contact" 
          onSubmit={handleSubmit} 
          name="feedback" 
          method="POST" 
          data-netlify="true"
        >
          {/* Netlify에서 폼을 인식하도록 하는 숨겨진 필드 */}
          <input type="hidden" name="form-name" value="feedback" />

          {/* HTML에서 폼 요소를 이미 처리하므로, JS로 따로 폼 요소를 관리하지 않음 */}

          <div className="submit-button">
            <button className="submit" type="submit">
              <b className="b6">보내기</b>
            </button>

            {submitted && <p className="submit-message">제출되었습니다. 감사합니다!</p>}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Feedback;
