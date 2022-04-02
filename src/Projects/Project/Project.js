import React from 'react';
import style from './Project.module.css'

export const Project = () => {
    return (
        <div className={style.project}>
            <div className={style.imageProject}>
                <a className={style.buttonProject} href="#">Посмотреть</a>
            </div>
            <h3 className={style.title}>Название проекта</h3>
            <p className={style.description}>Краткое описание</p>
        </div>
    );
};

