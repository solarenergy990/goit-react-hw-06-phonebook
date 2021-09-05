import shortid from 'shortid';
import actionTypes from './types';

const addContact = value => {
  const { name, number } = value;

  return {
    type: actionTypes.ADD_CONTACT,
    payload: {
      id: shortid.generate(),
      name,
      number,
    },
  };
};

const deleteContact = value => {
  // console.log(value);
  return { type: actionTypes.DELETE_CONTACT, payload: { id: value } };
};

const setFilter = value => {
  console.log('setFilter:', value);
  return {
    type: actionTypes.SET_FILTER,
    payload: value,
  };
};

export default { addContact, deleteContact, setFilter };
