import React, { useState } from "react";
import {handleSubmit} from "./AuditForm_logic";
import styles from './AuditForm.module.css';

const AuditForm = () => {
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");

  return <><br/>
    <div className={styles.wycenaContainer}>
      <h2 className={styles.h2}>Wycena</h2>
      <form className={styles.form} onSubmit={(e) => {
        e.preventDefault();
        handleSubmit({email, description})
      }}>
        <div className={styles.formGroup}>
          <label htmlFor="email" className={styles.label}>Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className={styles.input}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="description" className={styles.label}>Opis Problemu</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            className={styles.textarea}
          />
        </div>
        <button type="submit" className={styles.button}>Wyślij</button>
      </form>
    </div>
  </>;
};

export default AuditForm;
