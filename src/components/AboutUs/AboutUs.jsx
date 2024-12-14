import React from "react";
import "../AboutUs/AboutUs.css";

const AboutUs = () => {
    return (
        <div className="about-page">
            {/* Hero Section */}
            <div className="hero-section">
                <h1>Кои сме ние</h1>
                <p>
                    Добре дошли в MathElite - платформа, създадена от студенти за
                    студенти, с цел да вдъхновява и предоставя иновативни методи за
                    изучаване на математика.
                </p>
            </div>

            {/* About Content Section */}
            <div className="about-content">
                <div className="about-text">
                    <h2>За мен</h2>
                    <p>
                        Казвам се Йордан и съм студент в <strong>ППМГ Гео Милев</strong>,
                        където развих любовта си към математиката. Участвал съм в
                        състезания и надпревари по математика, което ми помогна да
                        изградя солидни основи.
                    </p>
                    <p>
                        В момента уча <strong>информатика</strong> в
                        <strong> Пловдивския университет</strong>, като комбинирам
                        знанията си по математика с тези в компютърните науки. Създадох
                        MathElite, за да помогна на учениците да постигнат успехи в
                        математиката и отвъд.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
