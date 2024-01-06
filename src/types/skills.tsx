export interface ISkillItem {
    logo: string;
    name: string;
}

export interface ISkillCategory {
    name: string;
    items: ISkillItem[];
}