import React from 'react';
import styles from './Mission.module.css';
import content  from './Mission_content.json';
import BacklightHeader from "../../../../shared_components/BacklightHeader/BacklightHeader";

const Mission = () => <>
    <hr className={styles.divider} />
    <section className={styles.container}>
        <BacklightHeader>{content.title}</BacklightHeader>
        <p className={styles.paragraph}>{content.paragraph}</p>
    </section>
    <hr className={styles.divider} />
</>

export default Mission;
