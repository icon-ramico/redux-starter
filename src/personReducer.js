import * as actions from './types';

const initialState = { loading: true, persons: [],err:'' };

const personReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.ADD_PERSON:
      return { ...state, loading: false, persons: [...state.persons, action.payload] };
    case actions.REMOVE_PERSON:
      return { ...state, loading: false, persons: state.persons.filter(e => action.payload === e.id) };
    case actions.GET_PERSON_ID:
      return { ...state, loading: false, data: state.persons.filter(p => p.id === action.payload) };
    default:
      return initialState;
  }
};

export default personReducer;

