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

