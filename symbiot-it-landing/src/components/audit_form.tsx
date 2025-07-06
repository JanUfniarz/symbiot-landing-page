import React, { useState } from "react";
import {handleSubmit} from "../logic/audit_form_submit";

const AuditForm = () => {
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");

  const styles = {
    wycenaContainer: {
      maxWidth: '600px',
      margin: '0 auto',
      padding: '40px',
      borderRadius: '8px',
      backgroundColor: 'var(--gray-4)',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    h2: {
      textAlign: 'center' as 'center',
      marginBottom: '30px',
      color: 'var(--gray-9)',
    },
    form: {
      display: 'flex',
      flexDirection: 'column' as 'column',
    },
    formGroup: {
      marginBottom: '20px',
    },
    label: {
      marginBottom: '8px',
      fontWeight: 'bold',
      color: 'var(--gray-9)',
    },
    input: {
      width: '100%',
      padding: '12px',
      border: '1px solid var(--gray-9)',
      borderRadius: '4px',
      fontSize: '16px',
      background: 'var(--color-background)'
    },
    textarea: {
      width: '100%',
      padding: '12px',
      border: '1px solid var(--gray-9)',
      borderRadius: '4px',
      fontSize: '16px',
      minHeight: '120px',
      resize: 'vertical' as 'vertical',
      background: 'var(--color-background)'
    },
    button: {
      padding: '12px 20px',
      border: 'none',
      borderRadius: '4px',
      backgroundColor: 'var(--green-9)',
      color: 'var(--color-background)',
      fontSize: '16px',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
    },
  };

  return <><br/>
    <div style={styles.wycenaContainer}>
      <h2 style={styles.h2}>Wycena</h2>
      <form style={styles.form} onSubmit={(e) => {
        e.preventDefault();
        handleSubmit({email, description})
      }}>
        <div style={styles.formGroup}>
          <label htmlFor="email" style={styles.label}>Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="description" style={styles.label}>Opis Problemu</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            style={styles.textarea}
          />
        </div>
        <button type="submit" style={styles.button}>Wyślij</button>
      </form>
    </div>
  </>;
};

export default AuditForm;
