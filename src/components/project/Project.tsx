import React from "react";
import "./Project.css";

import { IProject } from "../../interfaces/IProject";


const Project: React.FC<{ project: IProject }> = ({ project }) => {
    return (
        <div className="project">
            <a target="_blank" rel="noopener noreferrer" href={project.url} className="project-link">
                <div className="project-image">
                    <img 
                        src={require(`../../assets/${project.image}`)}
                        alt={project.title} 
                    />
                </div>
                <div className="project-details">
                    <div className="project-title">
                        {project.title}
                    </div>
                    <div className="project-description">
                        {project.description}
                    </div>
                    <div className="project-technologies">
                        {project.technologies.map((tech, index) => (
                            <span key={index} className="project-technology">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </a>
        </div>
    );
};

export default Project;
