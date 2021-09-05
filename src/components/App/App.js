import React from 'react';
import ContactForm from '../ContactForm/ContactForm';
import ContactsList from '../ContactsList/ContactsList';
import Filter from '../Filter/Filter';
// import initialContacts from '../../contacts.json';
// import shortid from 'shortid';
import { connect, useDispatch } from 'react-redux';
import appActions from '../../redux/app/actions';

// import useLocalStorage from '../../hooks/useLocalStorage';

const App = ({
  contacts,
  filter,
  onHandleSubmit,
  deleteContact,
  changeFilter,
}) => {
  // const dispatch = useDispatch();
  // const [contacts, setContacts] = useLocalStorage('contacts', initialContacts);
  // const [filter, setFilter] = useState('');

  // const addContact = data => {
  //   const { name, number } = data;

  //   const contact = {
  //     id: shortid.generate(),
  //     name,
  //     number,
  //   };

  //   const checkedContactNames = contacts.map(contact => {
  //     return contact.name.toLowerCase();
  //   });

  //   if (!checkedContactNames.includes(name.toLowerCase())) {
  //     setContacts(prevContacts => {
  //       return [...prevContacts, contact];
  //     });
  //   } else {
  //     alert(`${name} is already in contacts`);
  //   }
  // };

  // const deleteContact = contactId => {
  //   setContacts(contacts.filter(contact => contact.id !== contactId));
  // };

  // const changeFilter = evt => {
  //   setFilter(evt.currentTarget.value);
  // };

  // const visibleContacts = getVisibleContacts();

  return (
    <div>
      <h2>Phonebook</h2>
      <ContactForm onSubmit={value => onHandleSubmit(value)} />

      <h2>Contacts</h2>
      <Filter value={filter} onChange={changeFilter} />
      <ContactsList
        contacts={getVisibleContacts(contacts, filter)}
        onContactDelete={deleteContact}
      />
    </div>
  );
};

const getVisibleContacts = (contacts, filter) => {
  if (!filter) {
    return contacts;
  }

  const normalizedFilter = filter.toLowerCase();

  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter),
  );
};

const mapStateToProps = state => {
  // console.log(state);
  return {
    contacts: state.appState.contacts,
    filter: state.appState.filter,
  };
};

const mapDispatchToProps = dispatch => ({
  onHandleSubmit: value => dispatch(appActions.addContact(value)),
  deleteContact: value => dispatch(appActions.deleteContact(value)),
  changeFilter: value => dispatch(appActions.setFilter(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
