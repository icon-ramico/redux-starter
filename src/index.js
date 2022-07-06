import { compose, pipe } from 'lodash/fp';
// npm i lodash.

console.log('-----------------------Functional programming------------------------------');

const str = '     JavaScript        ';
const trim = str => str.trim();
const wrapInDiv = str => `<div>${str}</div>`;
const toLowerCase = str => str.toLowerCase();

// 2 parameters
function add(a, b) {
  return a + b;
}
// HOR Highier Order Functions
function x(a) {
  return function (b) {
    return a + b;
  };
}
{
  /* <list data="aaa"> */
}

const y = x(5)(6);
console.log('add', add(5, 6), 'y', y);

const res1 = wrapInDiv(toLowerCase(trim(str))); // nesting/Object Composition

const transform = compose(wrapInDiv, toLowerCase, trim);

const res2 = transform(str);

const transform2 = pipe(trim, toLowerCase, wrapInDiv);

const res3 = transform2(str);

console.log('example 1', { res1, res2, res3 });

// const wrapInSpan = str => `<span>${str}</span>`;
// const wrap = (type, str) => `<${type}>${str}</${type}>`;

const wrap = type => str => `<${type}>${str}</${type}>`;

const transform3 = pipe(trim, toLowerCase, wrap('div'));
const res4 = transform3(str);
console.log({ res4 });

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
