import React from 'react';
import { useSelector } from 'react-redux';
import ContactListItem from '../ContactListItem/ContactListItem';
import styles from './ContactList.module.css';

function ContactList() {
  const contacts = useSelector((state) => state.contacts.entities);
  const filter = useSelector((state) => state.filter);
  const normalizedFilter = filter.toLowerCase();

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <ul className={styles.contactList}>
      {filteredContacts.map((contact) => (
        <ContactListItem key={contact.id} contact={contact} />
      ))}
    </ul>
  );
}

export default ContactList;
