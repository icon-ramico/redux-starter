import { compose, pipe } from 'lodash/fp';

const str = '     JavaScript        ';
const trim = str => str.trim();
const wrapInDiv = str => `<div>${str}</div>`;
const toLowerCase = str => str.toLowerCase();

const res1 = wrapInDiv(toLowerCase(trim(str)));

const transform = compose(wrapInDiv, toLowerCase, trim);

const res2 = transform(str);

const transform2 = pipe(trim, toLowerCase, wrapInDiv);

const res3 = transform2(str);

console.log({ res1, res2, res3 });

// const wrapInSpan = str => `<span>${str}</span>`;
// const wrap = (type, str) => `<${type}>${str}</${type}>`;

const wrap = type => str => `<${type}>${str}</${type}>`;

const transform3 = pipe(trim, toLowerCase, wrap('div'));
const res4 = transform3(str);
