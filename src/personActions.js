import * as actions from './types';

export const addPerson_ac = person => ({
  type: actions.ADD_PERSON,
  payload: person,
});

export const get_person_id_ac = id => ({
  type: actions.GET_PERSON_ID,
  payload: id,
});

export const getPersonName_ac = name => ({
  type: actions.GET_PERSON_NAME,
  payload: name,
});

export const removePerson_ac = id => ({ type: actions.REMOVE_PERSON, payload: id });
