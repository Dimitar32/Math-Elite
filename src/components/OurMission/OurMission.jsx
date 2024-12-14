import React from "react";
import { FaCogs, FaLightbulb, FaGraduationCap } from "react-icons/fa";
import "../OurMission/OurMission.css";

const OurMission = () => {
    return (
        <div className="mission-container">
          <h1 className="mission-title">Нашата Мисия</h1>
          <p className="mission-description">
            Нашата платформа се стреми да промени начина, по който учениците изучават математика, като предлага алтернативен и ефективен подход към ученето. Ние вярваме, че всеки може да обикне математиката и да постигне успех!
          </p>
          <div className="mission-features">
            <div className="feature-card">
              <FaCogs className="feature-icon" />
              <h2 className="feature-title">Практически умения</h2>
              <p className="feature-description">
                Учението чрез решаване на задачи и прилагане на концепции подпомага развитието на практически умения.
              </p>
            </div>
            <div className="feature-card">
              <FaLightbulb className="feature-icon" />
              <h2 className="feature-title">Иновации</h2>
              <p className="feature-description">
                Нашата платформа включва интерактивни материали, за да направи ученето по-забавно и ефективно.
              </p>
            </div>
            <div className="feature-card">
              <FaGraduationCap className="feature-icon" />
              <h2 className="feature-title">Постоянна подкрепа</h2>
              <p className="feature-description">
                Осигуряваме насоки и подкрепа на учениците през цялото им математическо пътуване.
              </p>
            </div>
          </div>
        </div>
      );
};

export default OurMission;
