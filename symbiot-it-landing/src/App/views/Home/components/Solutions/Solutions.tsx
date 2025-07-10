import React from 'react';
import content from './Solutions_content.json';
import styles from './Solutions.module.css';
import BacklightHeader from "../../../../shared_components/BacklightHeader/BacklightHeader";

const Solutions: React.FC = () => <section className={styles.section}>
    <BacklightHeader>{ content.header }</BacklightHeader>
    <div className={styles.container}>
        {content.solutions.map((solution, index) => (
            <div key={index} className={styles.card}>
                <h3>{solution.title}</h3>
                <p>{solution.description}</p>
            </div>
        ))}
    </div>
</section>

export default Solutions