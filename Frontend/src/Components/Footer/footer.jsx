import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa'; // Import LinkedIn and GitHub icons
import "./footer.css"
export const Footer = () => {
    return (
        <div className='Footer'>
            <p>Developed by <a  href="https://www.linkedin.com/in/pujan-dev" target="_blank" rel="noopener noreferrer">@PujanDev</a></p>
            <div id='social-media'>
                {/* Social media links */}
                <a href="https://www.linkedin.com/in/pujan-neupane/" target="_blank" rel="noopener noreferrer" className="social-icon">
                    <FaLinkedin size={24} color="#0077b5" />
                </a>
                <a href="https://github.com/Pujan-Dev" target="_blank" rel="noopener noreferrer" className="social-icon">
                    <FaGithub size={24} color="#333" />
                </a>
            </div>
        </div>
    );
};
