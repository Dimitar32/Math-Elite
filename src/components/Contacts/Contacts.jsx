import React from "react";
import styles from "./Contacts.module.css";

const Contacts = () => {
  return (
    <div className={styles.contactsContainer}>
      {/* Info Section */}
      <div className={styles.infoSection}>
        {/* Working Hours */}
        <div className={styles.workingHours}>
          <h3>Работно време на контактния център:</h3>
          <p><strong>9:00 - 19:30</strong> понеделник - петък</p>
          <p><strong>8:30 - 18:00</strong> събота и неделя</p>
        </div>
        <div className={styles.workingHours}>
          <h3>Работно време на администрацията:</h3>
          <p><strong>10:00 - 19:00</strong> понеделник - петък</p>
        </div>

        {/* Contact Details */}
        <div className={styles.contactDetails}>
          <h3>Контакти:</h3>
          <p>+359 888 123 456</p>
          <p>info@mathelite.bg</p>
        </div>

        {/* Address */}
        <div className={styles.contactDetails}>
          <h3>Адрес:</h3>
          <p>София, ж.к. Младост 4,<br />бул. Александър Малинов №78<br />П.К.: 1799</p>
          {/* <button className={styles.mapButton}>Намерете ни на картата</button> */}
        </div>
      </div>

{/* 
      <div className={styles.mapSection}>
        <iframe
          title="Google Maps"
          src="https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=SoftUni"
          allowFullScreen
        ></iframe>
      </div> */}

      {/* Contact Form Section */}
      <div className={styles.contactFormSection}>
        <h2>Пишете ни</h2>
        <form className={styles.contactForm}>
          {/* Title */}
          <div className={styles.inputGroup}>
            <label htmlFor="title">Заглавие</label>
            <input type="text" id="title" placeholder="Въведете заглавие" />
          </div>

          {/* Email */}
          <div className={styles.inputGroup}>
            <label htmlFor="email">Имейл адрес</label>
            <input type="email" id="email" placeholder="Вашият имейл" />
          </div>

          {/* Message */}
          <div className={styles.inputGroup}>
            <label htmlFor="message">Съобщение</label>
            <textarea id="message" placeholder="Въведете съобщението си"></textarea>
          </div>

          <button type="submit" className={styles.submitButton}>
            Изпрати
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contacts;
