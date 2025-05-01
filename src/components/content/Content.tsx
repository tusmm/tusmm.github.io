import React from "react";
import "./Content.css";

import About from "../about/About";
import Experiences from "../experiences/Experiences";
import Projects from "../projects/Projects";
import { useRouteHandler } from "../../hooks/useRouterHandler";

const Content: React.FC = () => {
    const { handleRouteChange } = useRouteHandler();

    return (
        <div className="container">
            <div className="content">
                <div className="content-container">
                    <About />
                    <Experiences />
                    <Projects />
                    <div>
                        <button onClick={() => handleRouteChange('/projects')}
                            className="view-projects-button">
                            View All Projects
                        </button>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Content;