import React from 'react';
import content from './Solutions_content.json';
import styles from './Solutions.module.css';

const Solutions: React.FC = () => <section className={styles.solutionsSection}>
    <h2 className={styles.title}>Nasze Rozwiązania</h2>
    <div className={styles.solutionsContainer}> {
        content.map((solution, index) => (
            <div key={index} className={styles.solutionCard}>
                <h3>{solution.title}</h3>
                <p>{solution.description}</p>
            </div>
        ))
    } </div>
</section>

export default Solutions
