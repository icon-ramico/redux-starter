import { addPerson, removePerson, getPersonID, getPersonName } from './types';

export const addPerson_ac = person => {
  return {
    type: addPerson,
    payload: person,
  };
};

export const get_person_id_ac = id => {
  return {
    type: getPersonID,
    payload: id,
  };
};
export const getPersonName_ac = name => {
  return {
    type: getPersonName,
    payload: name,
  };
};

export const removePerson_ac = id => {
  return { type: removePerson, payload: id };
};

