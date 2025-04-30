import React from "react";
import "./Experiences.css";
import Experience from "../experience/Experience";

import { experienceData } from '../../data/experienceData';


const Experiences: React.FC = () => {
    return (
        <div className="experiences">
            {experienceData.map((exp, index) => (
                <Experience key={index} experience={exp} />
            ))}
        </div>
    );
};

export default Experiences;