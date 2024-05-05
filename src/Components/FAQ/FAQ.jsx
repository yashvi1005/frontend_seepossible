import React, { useState } from "react";
import style from "./FAQ.module.css";
import Footer from "../Footer/Footer";

const FAQ = ({ faqs }) => {
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (index) => {
    setExpandedSections({
      ...expandedSections,
      [index]: !expandedSections[index],
    });
  };

  return (
    <>
      <div className={style["faqs-container"]}>
        <hr className={style["faqs-separator"]} />
        <div className={style["faqs-title"]}>
          <h2 className={style["faqs-title"]}>FAQs for Buying</h2>
          <h2 className={style["faqs-title"]}>x</h2>
        </div>
        <hr className={style["faqs-separator"]} />
        {faqs.map((faq, index) => (
          <div key={index} className={style["faq-section"]}>
            <button
              className={style["faq-toggle"]}
              onClick={() => toggleSection(index)}
            >
              <div className={style["faq-question"]}>
                <h6 className={style["faq-question-title"]}>{faq.question}</h6>
                {expandedSections[index] ? "x" : "+"}
              </div>
            </button>
            {expandedSections[index] && (
              <div className={style["faq-answer"]}>{faq.answer}</div>
            )}
            <hr className={style["faqs-separator"]} />
          </div>
        ))}
      </div>
    </>
  );
};

export default FAQ;
