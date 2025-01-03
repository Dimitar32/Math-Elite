import React, { useState, useEffect, useRef } from "react";
import { useNavigate, Link } from 'react-router-dom';
import MathEliteLogo from "./MathEliteLogo.png";
import "./Header.css";

const Header = () => {
    const navigate = useNavigate();
    const [isStudentsOpen, setIsStudentsOpen] = useState(false);
    const [isCompetitionOpen, setIsCompetitionOpen] = useState(false);
    const dropdownRef = useRef(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState(null);
    const [dropdownOpen, setDropdownOpen] = useState(false);
  
    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        const loginStatus = localStorage.getItem("isLoggedIn");
    
        if (storedUser && loginStatus === "true") {
          setUser(JSON.parse(storedUser));
          setIsLoggedIn(true);
        }
    }, []);
  
    const handleLogout = () => {
        localStorage.removeItem("user");
        localStorage.removeItem("isLoggedIn");
        setIsLoggedIn(false);
        setUser(null);
        navigate("/");
    };
    
    const handleGradeClick = (grade) => {
        if (isLoggedIn) {
          // Navigate to tasks if logged in
          navigate(`/tasks?grade=${grade}`);
        } else {
          // Redirect to login page if not logged in
          navigate("/loginOrRegistration");
        }
    };

      const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
      };
    

    const handleLogin = () => {
        setIsLoggedIn(!isLoggedIn); // Toggles login state for testing
    };


    // Toggle dropdown for "За ученици"
    const toggleStudentsDropdown = () => setIsStudentsOpen(!isStudentsOpen);
    const toggleCompetitionDropdown = () => setIsCompetitionOpen(!isCompetitionOpen);


    // Close dropdown when clicking outside
    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                // setIsStudentsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleOutsideClick);
        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, []);

    return (
        <header className="header">
            <div className="header-left">
                <div className="logo">
                    {/* <img src={MathEliteLogo} alt="MathElite Logo" /> */}
                    {/* <span>MathElite</span> */}
                    <h1 className="mathelite-heading">MathElite</h1>

                </div>
            </div>
            <nav className="nav">
                <ul>
                    <li><Link to="/">Начало</Link></li>
                    <li ref={dropdownRef}>
                        <span
                            className="dropdown-toggle"
                            onClick={toggleStudentsDropdown}
                        >
                            За ученици
                        </span>
                        {isStudentsOpen && (
                                <div className="dropdown-menu">
                                    <div className="dropdown-section">
                                    <h4>Начален етап</h4>
                                    <ul>
                                        {[1, 2, 3, 4].map((grade) => (
                                        <li key={grade}
                                            onClick={() => handleGradeClick(grade)}>
                                            {grade} клас
                                        </li>
                                        ))}
                                    </ul>
                                    </div>
                                    <div className="dropdown-section">
                                    <h4>Прогимназиален етап</h4>
                                    <ul>
                                        {[5, 6, 7].map((grade) => (
                                        <li key={grade}
                                            onClick={() => handleGradeClick(grade)}>
                                            {grade} клас
                                        </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="dropdown-footer">
                                    <a href="#all-classes" className="footer-link">Всички класове</a>
                                </div>
                            </div>
                        )}
                    </li>
                    <li><a href="#individual">Индивидуални уроци</a></li>
                    <li ref={dropdownRef}>
                        <span
                            className="dropdown-toggle"
                            onClick={toggleCompetitionDropdown}
                        >
                            Състезания
                        </span>
                        {isCompetitionOpen && (
                            <div className="dropdown-menu">
                                <div className="dropdown-section">
                                    <h4>Задачи от състезания за: </h4>
                                    <ul>
                                        {[1, 2, 3, 4].map((grade) => (
                                        <li key={grade}>
                                            {grade} клас
                                        </li>
                                        ))}
                                    </ul>
                                    </div>
                                    <div className="dropdown-section">
                                    <ul>
                                        {[5, 6, 7].map((grade) => (
                                        <li key={grade}>
                                            {grade} клас
                                        </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        )}
                    </li>
                    <li><Link to="/mission">Нашата мисия</Link></li>
                    <li><Link to="/about">Кои сме ние</Link></li>
                    <li><Link to="/contacts">Контакти</Link></li>
                </ul>
            </nav>
            <div className="header-right">
                <button className="search-button">🔍</button>
                {/* {!isLoggedIn ? (
                    <button className="login-button" onClick={() => navigate("/loginOrRegistration")}> ВХОД </button>
                ) : (
                    <div className="profile">
                        <img
                            src="https://via.placeholder.com/40" // Replace with actual profile picture URL
                            alt="Profile"
                            className="profile-img"
                        />
                    </div>
                )} */}
                
                {!isLoggedIn ? (
                    <button className="login-button" onClick={() => navigate("/loginOrRegistration")}>
                    ВХОД
                    </button>
                ) : (
                    <div className="profile" onClick={() => setDropdownOpen(!dropdownOpen)}>
                    <img
                        src="https://via.placeholder.com/40" // Replace with actual profile image
                        alt="Profile"
                        className="profile-img"
                    />
                    {dropdownOpen && (
                        <div className="profile-dropdown">
                            <button onClick={() => navigate("/profile")} className="dropdown-item">
                                Твоят профил
                            </button>
                            <button onClick={() => navigate("")} className="dropdown-item">
                                Твоите обучения
                            </button>
                            <button onClick={() => navigate("/faq")} className="dropdown-item">
                                Често задавани въпроси
                            </button>
                            <button onClick={() => navigate("/guidePage")} className="dropdown-item">
                                Наръчник
                            </button>
                            <button onClick={handleLogout} className="dropdown-item">
                                Изход
                            </button>
                        </div>
                    )}
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
