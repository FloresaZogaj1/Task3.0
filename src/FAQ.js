import React, { useState } from 'react';
import { FaUserCircle } from 'react-icons/fa'; 
import { IoIosArrowDown, IoIosArrowForward } from 'react-icons/io'; 
import './FAQ.css';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const questions = [
    {
      question: 'How does Parkname separate itself from other domain name parking companies?',
      answer: 'Your domains are a valuable online property. As in any investment, you want the most efficient, easy way to make sure your property is going to be profitable. Do you own more than 1,000 domains? As a professional domainer, you will find everything you need through Parkname to generate maximum profits from your domain portfolio.',
    },
    { question: 'Is Parkname Parking actually free?', answer: 'Yes, Parkname Parking is free to use.' },
    { question: 'What do you do?', answer: 'We provide domain parking services to help you earn from your unused domains.' },
    { question: 'When was Parkname first founded?', answer: 'Parkname was founded in 2010.' },
  ];

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq">
      <div className="faq-header">
        <div className="header-title">
          <FaUserCircle className="faq-icon" />
          <h2>About Us</h2>
        </div>
        <span>4 articles in this Topic</span>
      </div>
      {questions.map((item, index) => (
        <div key={index} className="faq-item">
          <div className="faq-question" onClick={() => toggleAnswer(index)}>
            <span>{item.question}</span>
            {activeIndex === index ? <IoIosArrowDown /> : <IoIosArrowForward />}
          </div>
          {activeIndex === index && <div className="faq-answer">{item.answer}</div>}
        </div>
      ))}
    </div>
  );
};

export default FAQ;