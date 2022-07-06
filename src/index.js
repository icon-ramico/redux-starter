console.log('-----------------------Object Adjust------------------------------');

const ali = { name: 'Ali' };
const ali2 = { name: 'Ali' };

// NO:
const aliCopy = ali;
aliCopy.name = 'Alaa';

const updatedAli_assign = Object.assign({}, ali2, { age: 30 });

// recommended
const updatedAli_spread = { ...ali2, age: 40 };

console.log('incorrect update ali', { ali, aliCopy });
console.log('correct update ali', { ali2, updatedAli_assign, updatedAli_spread });

console.log('-----------------------Array Adjust------------------------------');

const arr1 = [1, 2, 3];

// Add

const arr2 = [4, ...arr1];
const arr3 = [...arr1, 4];

const index = arr1.indexOf(2);
const arr4 = [...arr1.slice(0, index), 4, ...arr1.slice(index)];

console.log('Array begin', arr2);
console.log('Array end', arr3);
console.log('Array middle', arr4);

// Remove
const arr5 = arr1.filter(e => 2 !== e);
console.log('Array remove', arr5);

// update

const arr6 = arr1.map(e => (2 === e ? 20 : e));
console.log('Array update', arr6);