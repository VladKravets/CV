import React from 'react';
import style from './Project.module.scss'

export const Project = (props) => {
    return (
        <div className={style.project}>
            <div className={style.imageProject} style={props.style}>
                <a className={style.buttonProject} href="#">Посмотреть</a>
            </div>
            <div className={style.projectInfo}>
            <h3 className={style.title}>{props.title}</h3>
            <span className={style.description}>{props.description}</span>
            </div>
        </div>
    );
};

