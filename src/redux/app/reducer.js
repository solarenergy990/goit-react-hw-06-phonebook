import actionTypes from './types';
import initialContacts from '../../contacts.json';
import { combineReducers } from 'redux';

const contacts = (state = [...initialContacts], { type, payload }) => {
  switch (type) {
    case actionTypes.ADD_CONTACT: {
      const checkedContactNames = state.map(contact => {
        return contact.name.toLowerCase();
      });
      if (!checkedContactNames.includes(payload.name.toLowerCase())) {
        return [...state, payload];
      } else {
        alert(`${payload.name} is already in contacts`);
        return state;
      }
    }

    case actionTypes.DELETE_CONTACT: {
      return state.filter(contact => contact.id !== payload.id);
    }

    default:
      return state;
  }
};

const filter = (state = '', { type, payload }) => {
  switch (type) {
    case actionTypes.SET_FILTER: {
      return payload;
    }
    default:
      return state;
  }
};

export default combineReducers({ contacts, filter });
