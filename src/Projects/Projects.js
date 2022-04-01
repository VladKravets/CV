import React from 'react';
import style from './Projects.module.css'
import styleContainer from "../comman/styles/Container.module.css";
import {Project} from "./Project/Project";

export const Projects = () => {
    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <h2 className={style.title}>My projects</h2>
                <div className={style.projects}>
                    <Project/>
                    <Project/>
                </div>
            </div>
        </div>
    );
};

