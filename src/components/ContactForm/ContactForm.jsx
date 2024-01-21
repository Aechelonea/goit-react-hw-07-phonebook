import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';
import styles from './ContactForm.module.css';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addContact({ name, phone }));
    setName('');
    setPhone('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.contactForm}>
      <label className={styles.label}>
        Name:
        <input
          type="text"
          value={name}
          className={styles.input}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </label>
      <label className={styles.label}>
        Phone:
        <input
          type="tel"
          value={phone}
          className={styles.input}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
      </label>
      <button type="submit" className={styles.button}>Add Contact</button>
    </form>
  );
}
