import React from 'react';
import styles from './AutomationExamples.module.css';
import content from './AutomationExamples_content.json';

const AutomationExamples = () => <div className={styles.container}>
    <h2>Przykłady automatyzacji AI</h2>
    <div className={styles.scrollContainer}> {
        content.map((example, index) => (
            <div className={styles.card} key={index}>
                <div className={styles.imagePlaceholder}></div>
                <h3>{example.title}</h3>
                <p>{example.description}</p>
            </div>
        ))
    } </div>
</div>

export default AutomationExamples;
