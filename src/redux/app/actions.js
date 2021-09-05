import { createAction } from '@reduxjs/toolkit';
import shortid from 'shortid';
import actionTypes from './types';

const addContact = createAction(actionTypes.ADD_CONTACT, text => {
  const { name, number } = text;

  return {
    payload: {
      id: shortid.generate(),
      name,
      number,
    },
  };
});

const deleteContact = createAction(actionTypes.DELETE_CONTACT, text => {
  return {
    payload: { id: text },
  };
});

const setFilter = createAction(actionTypes.SET_FILTER);

// const addContact = value => {
//   const { name, number } = value;

//   return {
//     type: actionTypes.ADD_CONTACT,
//     payload: {
//       id: shortid.generate(),
//       name,
//       number,
//     },
//   };
// };

// const deleteContact = contactId => {
//   // console.log(value);
//   return { type: actionTypes.DELETE_CONTACT, payload: { id: contactId } };
// };

// const setFilter = value => {
//   // console.log('setFilter:', value);
//   return {
//     type: actionTypes.SET_FILTER,
//     payload: value,
//   };
// };

const appActions = {
  addContact,
  deleteContact,
  setFilter,
};

export default appActions;
