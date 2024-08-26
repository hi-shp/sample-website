import React, { useState } from "react";
import "./Feedback.css";

const Feedback = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // 폼 데이터를 처리하기 위한 JavaScript 예제
    const form = e.target;
    const formData = new FormData(form);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => setSubmitted(true))
      .catch((error) => alert(error));

    // Google Analytics 이벤트 전송 (폼 제출)
    if (window.gtag) {
      window.gtag('event', 'feedback_submit', {
        'event_category': 'Feedback Form',
        'event_label': 'Form Submitted',
        'value': 1
      });
    }
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
          name="feedback" 
          method="POST" 
          data-netlify="true" 
          onSubmit={handleSubmit}
        >
          {/* Netlify에서 폼을 인식하도록 하는 숨겨진 필드 */}
          <input type="hidden" name="form-name" value="feedback" />

          <p>
            <label>이름 <input type="text" name="name" required /></label>
          </p>
          <p>
            <label>이메일 <input type="email" name="email" required /></label>
          </p>
          <p>
            <label>나이 <input type="number" name="age" min="0" /></label>
          </p>
          <p>
            <label>휴대폰 <input type="tel" name="phone" /></label>
          </p>
          <p>
            <label>메세지 <textarea name="feedback" rows="5" required></textarea></label>
          </p>
          <p>
            <button type="submit">보내기</button>
          </p>
        </form>

        {submitted && <p className="submit-message">제출되었습니다. 감사합니다!</p>}
      </div>
    </div>
  );
};

export default Feedback;
