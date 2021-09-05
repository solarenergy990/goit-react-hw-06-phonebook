import React from 'react';
import ContactForm from '../ContactForm/ContactForm';
import ContactsList from '../ContactsList/ContactsList';
import Filter from '../Filter/Filter';

// import { connect } from 'react-redux'
import { useSelector, useDispatch } from 'react-redux';
import appActions from '../../redux/app/actions';

const App = () =>
  // {
  //   // contacts,
  //   // filter,
  //   // onHandleSubmit,
  //   // onDeleteContact,
  //   // onChangeFilter,
  // },
  {
    const contacts = useSelector(state => state.appState.contacts);
    const filter = useSelector(state => state.appState.filter);
    const dispatch = useDispatch();

    const onHandleSubmit = contact => dispatch(appActions.addContact(contact));
    const onDeleteContact = contactId =>
      dispatch(appActions.deleteContact(contactId));
    const onChangeFilter = value => dispatch(appActions.setFilter(value));

    return (
      <div>
        <h2>Phonebook</h2>
        <ContactForm onSubmit={onHandleSubmit} />

        <h2>Contacts</h2>
        <Filter value={filter} onChange={onChangeFilter} />
        <ContactsList
          contacts={getVisibleContacts(contacts, filter)}
          onContactDelete={onDeleteContact}
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

// const mapStateToProps = state => {
//   return {
//     contacts: state.appState.contacts,
//     filter: state.appState.filter,
//   };
// };

// const mapDispatchToProps = dispatch => ({
//   onHandleSubmit: value => dispatch(appActions.addContact(value)),
//   onDeleteContact: value => dispatch(appActions.deleteContact(value)),
//   onChangeFilter: value => dispatch(appActions.setFilter(value)),
// });

export default App;
