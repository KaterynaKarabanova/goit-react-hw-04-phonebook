import { ContactForm } from './ContactsForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList/ContactList';

import React, { useState, useEffect } from 'react';

export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');
  useEffect(() => {
    if (JSON.parse(window.localStorage.getItem('Contacts'))?.length) {
      setContacts(JSON.parse(window.localStorage.getItem('Contacts')));
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem('Contacts', JSON.stringify(contacts));
  }, [contacts]);

  const onFormSubmit = e => {
    e.preventDefault();
    const name = e.target.elements.name.value;
    const number = e.target.elements.number.value;
    if (contacts.find(el => el.name === name)) {
      alert(`${name} is already in contacts`);
      return;
    }
    setContacts(prevContacts => [
      ...prevContacts,
      { name: name, number: number, id: `${Date.now()}` },
    ]);
  };

  const onSearch = () => {
    return contacts.filter(el =>
      el.name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  const onDelete = id => {
    setContacts(prev => prev.filter(el => el.id !== id));
  };

  return (
    <div
      style={{
        height: '100vh',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <h1>Phonebook</h1>
      <ContactForm onFormSubmit={onFormSubmit} />
      <h2>Contacts</h2>
      <Filter onChange={setFilter} />
      <ContactList contacts={onSearch()} onDelete={onDelete} />
    </div>
  );
};
