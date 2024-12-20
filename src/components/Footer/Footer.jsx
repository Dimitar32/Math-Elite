import React from "react";
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa"; // Import social media icons
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                {/* Social Media Section */}
                <div className="footer-section">
                    <h4>Социални мрежи</h4>
                    <div className="social-icons">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <FaFacebook className="social-icon" />
                            Facebook
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <FaInstagram className="social-icon" />
                            Instagram
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin className="social-icon" />
                            LinkedIn
                        </a>
                    </div>
                </div>

                {/* Useful Links Section */}
                <div className="footer-section">
                    <h4>Полезни линкове</h4>
                    <ul>
                        <li><Link to="/faq">Често задавани въпроси</Link></li>
                        <li><Link to="/guidePage">Наръчник</Link></li>
                        <li><a href="#terms">Общи условия</a></li>
                        <li><a href="#privacy">Лични данни</a></li>
                    </ul>
                </div>

                {/* Contact Section */}
                <div className="footer-section">
                    <h4>Контакти</h4>
                    <ul>
                        <li>Email: info@mathelite.bg</li>
                        <li>Phone: +359 888 123 456</li>
                        <li>Address: София, България</li>
                    </ul>
                </div>
            </div>

            {/* Copyright Section */}
            <div className="footer-bottom">
                <p>© 2024 MathElite. Всички права запазени.</p>
            </div>
        </footer>
    );
};

export default Footer;
