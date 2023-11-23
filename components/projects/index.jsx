'use client';
import { useState } from 'react';
import styles from './style.module.scss';
import Titles from './titles';
import Descriptions from './descriptions';

const data = [
    {
        title: "Sculpted Threads",
        description: "Fullstack Developer Web Developer",
        speed: 0.5
    },
    {
        title: "Zivri.me",
        description: "Threejs and fullstack Web developer",
        speed: 0.5
    },
    {
        title: "MLSAKIIT",
        description: "Web Development Lead",
        speed: 0.67
    },
    {
        title: "TEDxKIITUNIVERSITY",
        description: "Frontend Web Developer",
        speed: 0.8
    },
    {
        title: "MSCKIIT",
        description: "Technical Executive",
        speed: 0.8
    },
    {
        title: "Scrapyard",
        description: "Wordpress designer and developer",
        speed: 0.8
    }
]

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState(null)
    return (
        <div className={styles.container}>
            <Titles data={data} setSelectedProject={setSelectedProject}/>
            <Descriptions data={data} selectedProject={selectedProject}/>
        </div>
<div className={styles.container}>
            <Titles data={data} setSelectedProject={setSelectedProject}/>
            <Descriptions data={data} selectedProject={selectedProject}/>
        </div>
    )
}

