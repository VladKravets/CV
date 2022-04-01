import React from 'react';
import styleContainer from "../comman/styles/Container.module.css";
import {Button} from "../comman/Button/Button";
import style from './Work.module.css'


export const Work = () => {
    return (
        <div className={style.workBlock}>
            <div className={styleContainer.container}>
                <h2 className={style.title}>Рассматриваю варианты удаленной работы</h2>
                <Button name={'Нанять меня'}/>
            </div>
        </div>
    );
};

