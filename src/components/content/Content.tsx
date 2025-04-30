import React from "react";
import { useNavigate } from "react-router-dom";
import "./Content.css";

import About from "../about/About";
import Experiences from "../experiences/Experiences";
import Projects from "../projects/Projects";


const Content: React.FC = () => {
    const navigate = useNavigate();

    const goToProjectPage = () => {
        navigate("/projects");
    }

    return (
        <div className="container">
            <div className="content">
                <div className="content-container">
                    <About />
                    <Experiences />
                    <Projects />
                    <div>
                        <button onClick={goToProjectPage} className="button">View All Projects</button>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Content;