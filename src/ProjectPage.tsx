import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { IProject } from "./interfaces/IProject";
import "./ProjectPage.css";
import { projectData } from "./data/projectData";

function ProjectPage() {
    const navigate = useNavigate();
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // app is Home page
    const goToApp = () => {
        navigate("/");
    }

    // apply an underline if link is present and width is <= 768px
    const applyUnderline = (url: string | undefined) => {
        if (url && windowWidth <= 768) {
            return { textDecoration: 'underline' };
        } else if (url && windowWidth > 768) {
            return { textDecoration: 'none' };
        }
        return {};
    };

    return (
        <div className="project-page">
            <div className="project-page-container">

                <div className="home-button">
                    <button onClick={goToApp} className="project-home-button">Go to Home</button>
                </div>
                <div className="table-title">
                    <h1>Projects</h1>
                </div>
                <div className="table-subtitle">
                    <p>A list of all projects academic and personal.</p>
                </div>
                <div className="project-table-container">
                    <table className="project-table">
                        <thead>
                            <tr>
                                <th>Year</th>
                                <th>Project</th>
                                <th>Technologies</th>
                                <th>Link</th>
                            </tr>
                        </thead>
                        <tbody>
                            {projectData.map((project: IProject, index: number) => (
                                <tr key={index}>
                                    <td>{project.year}</td>
                                    <td>
                                        {project.url ? (
                                            <a href={project.url} target="_blank" rel="noreferrer" 
                                                className="project-title-link"
                                                style={applyUnderline(project.url)}
                                            >
                                                {project.title}
                                            </a>
                                        ) : (
                                            project.title
                                        )}
                                    </td>
                                    <td className="project-technologies">
                                        {project.technologies.map((tech, index) => (
                                            <span key={index} className="project-technology">
                                                {tech}
                                            </span>
                                        ))}
                                    </td>
                                    <td>
                                        {project.url ? (
                                            <a href={project.url} target="_blank" rel="noopener noreferrer">
                                                {new URL(project.url).hostname.replace(/^www\./, '')}
                                            </a>
                                        ) : (
                                            " "
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default ProjectPage;
