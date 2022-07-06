/*
{
  persons:[{},{}]
}
*/

const addPerson = 'ADD_PERSON'; // UPPER_SNAKE

const addPerson_ac = person => {
  return {
    type: addPerson,
    payload: person,
  };
};

const personReducer = (state = { persons: [] }, action) => {
  switch (action.type) {
    case addPerson:
      return { ...state, persons: [...state.persons, action.payload] };
    default:
      return state;
  }
};

import { createStore } from 'redux';

const store = createStore(personReducer);
