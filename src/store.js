/*
{
  persons:[{id:1},{id:2}]
  books:[{},{}],
  cars:[{},{}],
  anyData:anyType
}
*/

import personReducer from './personReducer';
import { createStore  } from 'redux';

// export
const store = createStore ( personReducer );

export default store;
