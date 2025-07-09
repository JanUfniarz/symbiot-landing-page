import React from 'react';
import styles from './AboutUs.module.css';
import content from './AboutUs_content.json';
import BacklightHeader from "../../../../shared_components/BacklightHeader/BacklightHeader";

const AboutUs: React.FC = () => <section className={styles.aboutUs}>
    <BacklightHeader>{content.title}</BacklightHeader>
    <div className={styles.team}> {
        content.members.map((member, index) => (
            <div key={index} className={styles.teamMember}>
                <img src={member.image_src} alt={member.image_alt} className={styles.image} />
                <h3 className={styles.name}>{member.name}</h3>
                <p className={styles.memberTitle}>{member.title}</p>
                <p className={styles.description}>{member.description}</p>
            </div>
        ))
    } </div>
</section>

export default AboutUs;
