import React, { useState } from 'react';
import './FAQ.css'; // Assumed to be the CSS file

const FAQ = () => {
  const [toggleStates, setToggleStates] = useState({
    aboutUs: false,
    question1: false,
    question2: false,
    question3: false,
    question4: false,
  });

  const handleToggle = (question) => {
    setToggleStates({
      ...toggleStates,
      [question]: !toggleStates[question],
    });
  };

  return (
    <div className="faq-container">
      <div className="faq">
        <div className="faq-item">
          <button onClick={() => handleToggle('aboutUs')} className="faq-question">
            About Us
          </button>
          {toggleStates.aboutUs && (
            <div className="faq-answer">
              <div className="faq-item">
                <p>4 articles in this topic</p>
              </div>
              <div className="faq-item">
                <button onClick={() => handleToggle('question1')} className="faq-question">
                  How does Parkname separate itself from other domain name parking companies?
                </button>
                {toggleStates.question1 && (
                  <div className="faq-answer">
                    Your domains are a valuable online property. As in any investment, you want the most efficient, easy way to make sure your property is going to be profitable. Do you own more than 1,000 domains? As a professional domainer, you will find everything you need through Parkname to generate maximum profits from your domain portfolio.
                  </div>
                )}
              </div>
              <div className="faq-item">
                <button onClick={() => handleToggle('question2')} className="faq-question">
                  Is Parkname Parking actually free?
                </button>
                {toggleStates.question2 && (
                  <div className="faq-answer">
                    Yes, Parkname offers free parking services with the option to upgrade for more features.
                  </div>
                )}
              </div>
              <div className="faq-item">
                <button onClick={() => handleToggle('question3')} className="faq-question">
                  What do you do?
                </button>
                {toggleStates.question3 && (
                  <div className="faq-answer">
                    Parkname specializes in domain name parking, helping users monetize their unused domains by displaying relevant ads.
                  </div>
                )}
              </div>
              <div className="faq-item">
                <button onClick={() => handleToggle('question4')} className="faq-question">
                  When was Parkname first founded?
                </button>
                {toggleStates.question4 && (
                  <div className="faq-answer">
                    Parkname was founded in 2010 and has been growing ever since.
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
