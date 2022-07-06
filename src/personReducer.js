import { addPerson, removePerson, getPersonID } from './types';

const initialState = { loading: true, persons: [],err:'' };

const personReducer = (state = initialState, action) => {
  switch (action.type) {
    case addPerson:
      return { ...state, loading: false, persons: [...state.persons, action.payload] };
    case removePerson:
      return { ...state, loading: false, persons: state.filter(e => action.payload === e.id) };
    case PersonError:
      return { ...state, loading: false, err: action.payload};
    case getPersonID:
      return { ...state, loading: false, data: state.filter(p => p.id === action.payload) };
    default:
      return initialState;
  }
};

export default personReducer;

