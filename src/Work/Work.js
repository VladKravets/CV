import React from 'react';
import styleContainer from "../comman/styles/Container.module.css";
import style from './Work.module.css'


export const Work = () => {
    return (
        <div className={style.workBlock}>
            <div className={`${styleContainer.container} ${style.container}`}>
                <h2 className={style.title}>Рассматриваю варианты удаленной работы</h2>
                <a className={style.button} href="#">Нанять меня</a>
            </div>
        </div>
    );
};

