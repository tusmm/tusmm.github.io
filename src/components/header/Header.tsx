import React from "react";
import "./Header.css";
import Footer from "../footer/Footer";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

const Header: React.FC = () => {
    return (
        <div className="header">
            <div className="header-footer">
                <div className="text-and-resume">
                    <div className="header-text">
                        <h1>Ryan Ong</h1>
                        <p>Application Developer - Cloud Consultant</p>
                    </div>
                    <div className="resume-button">
                        <a target="_blank" rel="noopener noreferrer" href={require(`../../assets/Ryan_Ong_Resume.pdf`)}
                            download="Ryan Ong - Resume.pdf">
                                Resume <FontAwesomeIcon icon={faDownload} />
                        </a>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
};

export default Header;
