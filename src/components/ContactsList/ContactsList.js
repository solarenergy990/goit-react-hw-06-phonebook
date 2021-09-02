import React from 'react';
import PropTypes from 'prop-types';
import ContactListItem from '../ContactsList/ContactListItem/ContactListItem';
import s from './ContactsLIst.module.css';

const ContactsList = ({ contacts, onContactDelete, children }) => {
  return (
    <div className={s.contacts}>
      {children}
      <ul>
        {contacts.map(contact => {
          const { id, name, number } = contact;

          return (
            <ContactListItem
              key={id}
              contactName={name}
              contactNumber={number}
              onClickRemove={() => onContactDelete(id)}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default ContactsList;

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
  onContactDelete: PropTypes.func.isRequired,
};
