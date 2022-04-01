import React from 'react';
import style from './Project.module.css'
import {Button} from "../../comman/Button/Button";

export const Project = () => {
    return (
        <div className={style.project}>
            Тут будет картинка
            <Button name={'Смотреть'}/>
            <div className={style.description}>
                <h3 className={style.title}>Название проекта</h3>
                <p className={style.text}>Краткое описание</p>
            </div>
        </div>
    );
};

