import React, { useState, useEffect, useRef } from "react";
import { Link } from 'react-router-dom';
import MathEliteLogo from "./MathEliteLogo.png";
import "./Header.css";

const Header = () => {
    const [isStudentsOpen, setIsStudentsOpen] = useState(false);
    const dropdownRef = useRef(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = () => {
        setIsLoggedIn(!isLoggedIn); // Toggles login state for testing
    };


    // Toggle dropdown for "За ученици"
    const toggleStudentsDropdown = () => setIsStudentsOpen(!isStudentsOpen);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsStudentsOpen(false);
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
                    <img src={MathEliteLogo} alt="MathElite Logo" />
                    <span>MathElite</span>
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
                                    <h4>Начални класове</h4>
                                    <ul>
                                        <li><a href="#class1">1 клас</a></li>
                                        <li><a href="#class2">2 клас</a></li>
                                        <li><a href="#class3">3 клас</a></li>
                                        <li><a href="#class4">4 клас</a></li>
                                    </ul>
                                </div>
                                <div className="dropdown-section">
                                    <h4>Средни класове</h4>
                                    <ul>
                                        <li><a href="#class5">5 клас</a></li>
                                        <li><a href="#class6">6 клас</a></li>
                                        <li><a href="#class7">7 клас</a></li>
                                    </ul>
                                </div>
                                <div className="dropdown-footer">
                                    <a href="#all-classes" className="footer-link">Всички класове</a>
                                </div>
                            </div>
                        )}
                    </li>
                    <li><a href="#individual">Индивидуални уроци</a></li>
                    <li><Link to="/mission">Нашата мисия</Link></li>
                    <li><Link to="/about">Кои сме ние</Link></li>
                </ul>
            </nav>
            <div className="header-right">
                <button className="search-button">🔍</button>
                {!isLoggedIn ? (
                    <button className="login-button" onClick={handleLogin}>
                        ВХОД
                    </button>
                ) : (
                    <div className="profile">
                        <img
                            src="https://via.placeholder.com/40" // Replace with actual profile picture URL
                            alt="Profile"
                            className="profile-img"
                        />
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
