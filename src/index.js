// dispatch(addPerson_ac({name:'Ali'}));
import { addPerson_ac, removePerson_ac } from './personActions';
import store from './store';

const unsubscribe = store.subscribe(() => {
  console.log('My Store', store.getState());
});
let id = 1;
store.dispatch(addPerson_ac({ id: id++, name: 'Ali', age: 30, isHappy: true }));
store.dispatch(addPerson_ac({ id: id++, name: 'Alaa', age: 40, isHappy: true }));
store.dispatch(removePerson_ac(2))
unsubscribe();
store.dispatch(addPerson_ac({ id: id++, name: 'Ahmad', age: 40, isHappy: true }));
