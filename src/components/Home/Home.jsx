import React from "react";
import "./Home.css";
import { FaCalculator, FaRocket, FaAward } from "react-icons/fa";

const Home = () => {
    return (
        <div className="home-page">
            {/* Hero Section */}
            <div className="hero-section">
                <h1>Добре дошли в MathElite</h1>
                <p>
                    Превърнете ученето на математика в приключение! Нашата платформа
                    предоставя ефективен, иновативен и забавен начин за усвояване на
                    математическите умения.
                </p>
                <button className="cta-button">Научете повече</button>
            </div>

            {/* Features Section */}
            <div className="features-section">
                <h2>Какво предлагаме</h2>
                <div className="features">
                    <div className="feature">
                        <FaCalculator className="feature-icon" />
                        <h3>Интерактивни уроци</h3>
                        <p>
                            Нашите уроци включват практични примери и интерактивни задачи,
                            за да направим ученето лесно и интересно.
                        </p>
                    </div>
                    <div className="feature">
                        <FaRocket className="feature-icon" />
                        <h3>Индивидуален подход</h3>
                        <p>
                            Всеки ученик получава персонализиран план за обучение,
                            съобразен с нивото и целите му.
                        </p>
                    </div>
                    <div className="feature">
                        <FaAward className="feature-icon" />
                        <h3>Постигане на резултати</h3>
                        <p>
                            С MathElite ще постигнете увереност и високи резултати в
                            математиката!
                        </p>
                    </div>
                </div>
            </div>

            {/* Call-to-Action Section */}
            <div className="cta-section">
                <h2>Готови ли сте да започнете?</h2>
                <p>Присъединете се към MathElite и започнете вашето пътешествие към успеха в математиката!</p>
                <button className="cta-button">Регистрирайте се сега</button>
            </div>
        </div>
    );
};

export default Home;
