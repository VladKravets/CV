import React from 'react';
import style from './Skills.module.css'
import styleContainer from '../comman/styles/Container.module.css'
import {Skill} from "./Skill/Skill";

export const Skills = () => {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <h2 className={style.title}>Skills</h2>
                <div className={style.skills}>
                    <Skill title={'React'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dolor, doloribus laudantium minus officia quae repellat tenetur ut veniam! Cupiditate eligendi eos totam? Architecto, deleniti id in ipsa placeat voluptatum.'}/>
                    <Skill title={'JavaScript'} description={'\'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dolor, doloribus laudantium minus officia quae repellat tenetur ut veniam!'}/>
                    <Skill title={'HTML/CSS'} description={' Cupiditate eligendi eos totam? Architecto, deleniti id in ipsa placeat voluptatum.'}/>
                </div>
            </div>
        </div>
    );
};

