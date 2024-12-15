import React, { useState, useEffect } from "react";
import styles from "../FAQ/FAQ.module.css";

const FAQ = () => {
  const [faqs, setFaqs] = useState([]);

  // Fetch FAQs from the backend
  useEffect(() => {
    fetch("https://localhost:7140/api/Faq/GetAllFAQ")
      .then((res) => res.json())
      .then((data) => setFaqs(data.map(faq => ({ ...faq, isOpen: false })))) // Add isOpen state
      .catch((error) => console.error("Error fetching FAQs:", error));
  }, []);

  // Toggle specific FAQ
  const toggleAnswer = (index) => {
    setFaqs((prevFaqs) =>
      prevFaqs.map((faq, i) =>
        i === index ? { ...faq, isOpen: !faq.isOpen } : faq
      )
    );
  };

  return (
    <div className={styles["faqPage"]}>
        <div className={styles["faqDescriptionSection"]}>
            <h2>Често задавани въпроси</h2>
            <p>
              Често задавани въпроси (FAQ) са списък с най-популярните въпроси и техните отговори, които помагат на потребителите бързо да намерят информация. 
              Те улесняват достъпа до решения на често срещани проблеми и спестяват време на всички страни.
            </p>
        </div>

      {/* FAQ List */}
      <div className={styles.faqList}>
        {faqs.map((faq, index) => (
          <div key={faq.id} className={styles["faq-item"]}>
            <div
              className={styles["faq-question"]}
              onClick={() => toggleAnswer(index)}
            >
              {faq.question}
              <span
                className={`${styles["faq-icon"]} ${
                  faq.isOpen ? styles["rotate"] : ""
                }`}
              >
                {faq.isOpen ? "−" : "+"}
              </span>
            </div>
            {faq.isOpen && (
              <div className={`${styles["faq-answer"]} ${styles.show}`}>
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
