import React from "react";
import SkillBlock from "./skills/skill-block";
import Card from "./card";
import {
    сategories,
} from "../data/skills";

const Skills = () => {
    return (
        <Card title={'Мои навыки'}>
            <SkillBlock
                categories={сategories}
            />
        </Card>
    );
};

export default Skills;