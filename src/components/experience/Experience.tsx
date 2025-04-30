import React from 'react';
import './Experience.css';
import { IExperience } from '../../interfaces/IExperience';

const Experience: React.FC<{ experience: IExperience }> = ({ experience }) => {
    return (
        <div className="experience">
            <a href={experience.url} className="experience-link">
                <div className="experience-timeline">
                    <div className="experience-date">
                        {experience.date}
                    </div>
                    <div className="experience-location">
                        {experience.location}
                    </div>
                </div>
                <div className="experience-details">
                    <div className="experience-role-name">
                        {experience.role}
                    </div>
                    <div className="experience-business-name">
                        {experience.businessName}
                    </div>
                    <div className="experience-description">
                        {experience.description}
                    </div>
                    <div className="experience-technologies">
                        {experience.technologies.map((tech, index) => (
                            <span key={index} className="experience-technology">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </a>
        </div>
    );
}

export default Experience;