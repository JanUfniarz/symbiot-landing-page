import React from 'react';
import styles from './Mission.module.css';
import content  from './Mission_content.json';

const Mission = () => <>
    <hr className={styles.divider} />
    <section className={styles.missionContainer}>
        <h2 className={styles.missionTitle}>{content.title}</h2>
        <p className={styles.missionParagraph}>{content.paragraph}</p>
    </section>
    <hr className={styles.divider} />
</>

export default Mission;
