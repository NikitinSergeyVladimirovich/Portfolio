import React from "react";
import WorkExperienceBlock from "./work-experience/work-experience-block";
import Card from "./card";
import {
    workExperience,
} from "../data/work";

const WorkExperience = () => {
    return (
        <Card title={'Опыт работы'}>
            <WorkExperienceBlock 
                jobs={workExperience}
            />
        </Card>
    );
};

export default WorkExperience;