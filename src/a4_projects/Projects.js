import React from 'react'
import styles from './Projects.module.scss';
import {Project} from "./project/Project";
import Title from "../common/components/title/Title";
import imgOne from './../assets/images/gallery-photo-1.jpg'
import imgTwo from '../assets/images/gallery-photo-2.jpg'
import imgThree from '../assets/images/gallery-photo-3.jpg'
import imgFour from '../assets/images/gallery-photo-4.jpg'
import imgFive from '../assets/images/gallery-photo-5.jpg'
import imgSix from '../assets/images/gallery-photo-6.jpg'
import imgSeven from '../assets/images/gallery-photo-7.jpg'
import imgEight from '../assets/images/gallery-photo-8.jpg'


function Projects() {
    return (
        <div className={styles.projectsBlock} id='portfolio'>
            <div className={styles.projectsContainer}>
                <Title title={'My portfolio'}/>
                <div className={styles.projects}>
                    <Project
                        title={"To do list"}
                        img={imgOne}
                        description={"TS, Redux, RestAPI, Thunk,Material UI, Unit Tests"}
                        link={"https://vladkravets.github.io/Todolist/"}/>
                    <Project
                        title={"play-cards"}
                        img={imgTwo}
                        description={"My first project with React/Redux/TS.I left It here as a memory."}
                        link={"https://vladkravets.github.io/play-cards/"}/>
                    <Project
                        title={"the social network"}
                        img={imgThree}
                        description={"TS, Redux, RestAPI, Thunk,ANT Design, Unit Tests"}
                        link={"https://vladkravets.github.io/login"}/>

                    <Project
                        title={"future project"}
                        img={imgFour}
                        description={"...in progress"}
                        link={"link #6"}/>

                    <Project
                        title={"Weather app"}
                        img={imgFive}
                        description={'React/Redux,RestAPI.My project on which I practiced a request to the server and its processing'}
                        link={"https://vladkravets.github.io/Weather-app/"}/>

                    <Project
                        title={"PIZZA-app "}
                        img={imgSix}
                        description={"...in progress"}
                        link={"https://vladkravets.github.io/Pizza-App/"}/>
                    <Project
                        title={"future project "}
                        img={imgSeven}
                        description={"...in progress"}
                        link={"link #2"}/>
                    <Project
                        title={"future project "}
                        img={imgEight}
                        description={"...in progress"}
                        link={"link #2"}/>
                </div>
            </div>
        </div>
    );
}

export default Projects;