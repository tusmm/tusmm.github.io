import React from 'react';
import './Footer.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faCertificate } from '@fortawesome/free-solid-svg-icons';

const Footer: React.FC = () => {
    return (
        <div className="footer">
            <div className="footer-links">
                <a href="https://github.com/tusmm" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} 
                        size="2x"
                        className="icon"
                    />
                </a>
                <a href="https://www.linkedin.com/in/ryan-ong1" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} 
                        size="2x" 
                        className="icon"
                    />
                </a>
                <a href="https://www.credly.com/users/ryan-ong.fa14b113" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faCertificate} 
                        size="2x" 
                        className="icon"
                    />
                </a>
            </div>
        </div>
    );
}

export default Footer;