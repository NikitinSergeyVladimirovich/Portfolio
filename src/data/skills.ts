import { ISkillCategory } from "../types/skills";
import css from "../images/logo/css.svg";
import docker from "../images/logo/docker.svg";
import figma from "../images/logo/figma.svg";
import github from "../images/logo/github.svg";
import gitlab from "../images/logo/gitlab.svg";
import graphql from "../images/logo/graphql.svg";
import html from "../images/logo/html.svg";
import js from "../images/logo/js.svg";
import mysql from "../images/logo/mysql.svg";
import next from "../images/logo/nextjs.svg";
import nodejs from "../images/logo/node.svg";
import postgres from "../images/logo/postgres.svg";
import react from "../images/logo/react.svg";
import symfony from "../images/logo/symfony.svg";
import terminal from "../images/logo/terminal.svg";
import ts from "../images/logo/ts.svg";
import vscode from "../images/logo/vscode.svg";
import vue from "../images/logo/vue.svg";
import php from "../images/logo/php.svg";
import datagrip from "../images/logo/datagrip.svg";
import grafana from "../images/logo/grafana.svg";
import rabbitmq from "../images/logo/rabbitmq.svg";
import twig from "../images/logo/twig.svg";

export const сategories: ISkillCategory[] = [
    {
        name: "Front-end",
        items: [
            {
                logo: html,
                name: "HTML",
            },
            {
                logo: css,
                name: "CSS",
            },
            {
                logo: js,
                name: "JavaScript",
            },
            {
                logo: ts,
                name: "TypeScript",
            },
            {
                logo: react,
                name: "React.js",
            },
            {
                logo: vue,
                name: "Vue.js",
            },
            {
                logo: next,
                name: "Next.js",
            },
        ],
    },
    {
        name: "Back-end",
        items: [
            {
                logo: nodejs,
                name: "Node.js",
            },
            {
                logo: postgres,
                name: "PostgreSQL",
            },
            {
                logo: mysql,
                name: "MySql",
            },
            {
                logo: symfony,
                name: "Symfony",
            },
            {
                logo: graphql,
                name: "graphQl",
            },
            {
                logo: php,
                name: "PHP",
            },
            {
                logo: twig,
                name: "twig",
            },
        ],
    },
    {
        name: "Инструменты",
        items: [
            {
                logo: terminal,
                name: "Bash",
            },
            {
                logo: docker,
                name: "Docker",
            },
            {
                logo: github,
                name: "GitHub",
            },
            {
                logo: gitlab,
                name: "GitLab",
            },
            {
                logo: figma,
                name: "Figma",
            },
            {
                logo: vscode,
                name: "Visual Studio Code",
            },
            {
                logo: datagrip,
                name: "DataGrip",
            },
            {
                logo: grafana,
                name: "Grafana",
            },
            {
                logo: rabbitmq,
                name: "RabbitMQ",
            },
        ],
    },
];