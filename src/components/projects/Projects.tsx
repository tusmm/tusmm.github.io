import React from "react";
import "./Projects.css";

import Project from "../project/Project";
import { projectData } from "../../data/projectData";

const Projects: React.FC = () => {
    const projectCount = 4; // Number of projects to display
    const displayedProjects = projectData.slice(0, projectCount);

    return (
        <div className="projects">
            {displayedProjects.map((project, index) => (
                <Project key={index} project={project} />
            ))} 
        </div>
    );
};

export default Projects;