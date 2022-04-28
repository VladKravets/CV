import React from 'react';
import style from './Projects.module.css'
import styleContainer from "../comman/styles/Container.module.css";
import {Project} from "./Project/Project";
import {Title} from "../comman/components/Title/Title";

export const Projects = () => {
const socialNetStyle={
    backdropImage:'url(' + imgUrl + ')'
}
    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <Title title={'My projects'}/>
                <div className={style.projects}>
                    <Project title={'Social network'} description={'asdasdsadasd'}/>
                    <Project title={'To do list'} description={'asdasdsadasd'}/>
                </div>
            </div>
        </div>
    );
};

