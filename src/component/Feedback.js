import React, { useState } from "react";
import "./Feedback.css";

const Feedback = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [phone, setPhone] = useState('');
  const [feedback, setFeedback] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Google Analytics 이벤트 전송 (폼 제출)
    if (window.gtag) {
      window.gtag('event', 'feedback_submit', {
        'event_category': 'Feedback Form',
        'event_label': 'Form Submitted',
        'value': 1
      });
    }

    // 폼 데이터를 서버로 제출하는 로직
    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch("/", {
        method: "POST",
        body: new URLSearchParams(formData).toString(),
      });

      if (response.ok) {
        setSubmitted(true); // 제출 성공 시 메시지 표시
      } else {
        console.error("폼 제출에 실패했습니다.", response.statusText);
      }
    } catch (error) {
      console.error("네트워크 요청 중 오류가 발생했습니다.", error);
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
          className="contact" 
          onSubmit={handleSubmit} 
          name="feedback" 
          method="POST" 
          data-netlify="true"
        >
          {/* Netlify에서 폼을 인식하도록 하는 숨겨진 필드 */}
          <input type="hidden" name="form-name" value="feedback" />

          <div className="contact-form">
            <div className="row-field">
              <div className="name-field">
                <label htmlFor="name">
                  <span>이름 </span>
                  <span className="span6">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="name-input"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              <div className="age-field">
                <label htmlFor="age">나이</label>
                <input
                  type="number"
                  id="age"
                  name="age"
                  className="age-input"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  min="0"
                />
              </div>
            </div>

            <div className="email-field">
              <label htmlFor="email">
                <span>이메일 </span>
                <span className="span6">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="email-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="contact-field">
              <label htmlFor="phone">휴대폰</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="phone-input"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>

            <div className="message-field">
              <label htmlFor="feedback">
                <span>메세지 </span>
                <span className="span6">*</span>
              </label>
              <textarea
                id="feedback"
                name="feedback"
                className="message-input"
                rows={12}
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                required
              />
            </div>

            <div className="checkbox-field">
              <input
                id="discount-info"
                name="discount-info"
                className="discount-info"
                type="checkbox"
              />
              <label htmlFor="discount-info">
                테크솔 정식 출시 시 할인코드 및 알림 이메일로 받기
              </label>
            </div>

            <div className="submit-button">
              <button className="submit" type="submit">
                <b className="b6">보내기</b>
              </button>

              {submitted && <p className="submit-message">제출되었습니다. 감사합니다!</p>}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Feedback;
