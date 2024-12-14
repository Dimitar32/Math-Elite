import React from "react";
import { FaCogs, FaLightbulb, FaGraduationCap } from "react-icons/fa";
import "../OurMission/OurMission.jsx";

const OurMission = () => {
    return (
        <div className="mission-page">
            {/* Hero Section */}
            <div className="hero-section">
                <h1>Съвременно практическо обучение</h1>
                <p>
                    Нашата платформа се стреми да промени начина, по който учениците
                    изучават математика, като предлага алтернативен и ефективен подход
                    към ученето. Ние вярваме, че всеки може да обикне математиката и да
                    постигне успех!
                </p>
            </div>

            {/* Features Section */}
            <div className="features-icons">
                <div className="feature-item">
                    <FaCogs className="feature-icon" />
                    <h3>Практически умения</h3>
                    <p>
                        Ученето чрез решаване на задачи и прилагане на концепции
                        подпомага развитието на практически умения.
                    </p>
                </div>
                <div className="feature-item">
                    <FaLightbulb className="feature-icon" />
                    <h3>Иновации</h3>
                    <p>
                        Нашата платформа включва интерактивни материали, за да направи
                        ученето по-забавно и ефективно.
                    </p>
                </div>
                <div className="feature-item">
                    <FaGraduationCap className="feature-icon" />
                    <h3>Постоянна подкрепа</h3>
                    <p>
                        Осигуряваме насоки и подкрепа на учениците през цялото им
                        математическо пътуване.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default OurMission;
