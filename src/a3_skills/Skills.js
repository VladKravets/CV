import React from 'react'
import styles from './Skills.module.scss';
import Skill from "./skill/Skill";
import Title from "../common/components/title/Title";
import {faBriefcase, faLaptopCode, faTasks} from "@fortawesome/free-solid-svg-icons";
import {faSketch} from "@fortawesome/free-brands-svg-icons";
import {imagesDesignBlock, imagesDevBlock, imagesFoundBlock, imagesTestBlock} from "./images-for-skills/images";

function Skills() {

    return (
        <div className={styles.skillsBlock} id='skills'>
            <div className={styles.skillsContainer}>
                <Title title={'My Skills'}/>
                <div className={styles.skills}>
                    <Skill title={'DEVELOPMENT'} images={imagesDevBlock} titleIcon={faLaptopCode}/>
                    <Skill title={'FOUNDATION'} images={imagesFoundBlock} titleIcon={faBriefcase}/>
                    <Skill title={'TESTING'} images={imagesTestBlock} titleIcon={faTasks}/>
                    <Skill title={'DESIGN'} images={imagesDesignBlock} titleIcon={faSketch}/>
                </div>
            </div>
        </div>
    );
}

export default Skills