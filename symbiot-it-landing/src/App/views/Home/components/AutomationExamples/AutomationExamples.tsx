import React from 'react';
import styles from './AutomationExamples.module.css';
import content from './AutomationExamples_content.json';
import BacklightHeader from "../../../../shared_components/BacklightHeader/BacklightHeader";

const AutomationExamples = () => <div className={styles.container}>
    <BacklightHeader>{ content.header }</BacklightHeader>
    <div className={styles.scrollContainer}> {
        content.examples.map((example, index) => (
            <div className={styles.card} key={index}>
                <div className={styles.imagePlaceholder}></div>
                <h3>{example.title}</h3>
                <p>{example.description}</p>
            </div>
        ))
    } </div>
</div>

export default AutomationExamples;
