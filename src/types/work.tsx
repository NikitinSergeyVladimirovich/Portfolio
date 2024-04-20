type BlockTechnology = {
    Frontend: string[];
} | {
    Backend: string[];
} | {
    Инструменты: string[];
};

export interface IWorkExperience {
    description: string;
    logo: string;
    name: string;
    technology: Array<String>;
    time: string;
    blockTechnologyShort?: Array<Object>;
    blockTechnologyDescription?: Array<Array<String>>;
    blockTechnology: BlockTechnology[];
    projectsUnderDevelopment?: Array<string>;
    projectsUnderDevelopmentDiscription?: Array<string>;
};