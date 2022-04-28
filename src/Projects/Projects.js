import React from 'react';
import style from './Projects.module.scss'
import styleContainer from "../comman/styles/Container.module.css";
import imageSocialNetwork from '../assets/images/socialNetwork.webp'
import imageTodoList from '../assets/images/todoList.jpg'
import {Title} from "../comman/components/Title/Title";
import {Project} from "./Project/Project";

export const Projects = () => {

    const socialNetStyle = {
        backgroundImage: `url(${imageSocialNetwork})`
    }
    const todoListStyle = {
        backgroundImage: `url(${imageTodoList})`
    }

    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <Title title={'My projects'}/>
                <div className={style.projects}>
                    <Project style={socialNetStyle} title={'Social network'} description={'asdasdsadasd'}/>
                    <Project style={todoListStyle} title={'To do list'} description={'asdasdsadasd'}/>
                </div>
            </div>
        </div>
    );
};

