import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaGlobe } from "react-icons/fa";

import "./Footer.css";

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="footer-social">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <FaFacebook />
                </a>

                <a href="https://x.com" target="_blank" rel="noopener noreferrer">
                    <FaTwitter />
                </a>

                <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaInstagram />
                </a>

                <a href="https://uescuravalera.es" target="_blank" rel="noopener noreferrer">
                    <FaGlobe />
                </a>
            </div>

            <p className="footer-text">
                © {new Date().getFullYear()} IES Cura Valera
            </p>
        </footer>
    );
};

export default Footer;
