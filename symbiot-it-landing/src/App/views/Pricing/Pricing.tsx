import React from "react";
import AuditForm from "./components/AuditForm/AuditForm";
import styles from './Pricing.module.css';
import content from './Pricing_content.json'

const Pricing = () => <>
    <br/>
    <div className={styles.introContainer}>
        <p className={styles.introText}>{content.intro}</p>
    </div>
    <AuditForm/>
</>

export default Pricing;