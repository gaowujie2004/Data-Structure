const { reorderList } = require('../recursive');
const { data } = require('./mock-data');

function sum(n1, n2) {
  return n1 + n2;
}

test('adds 1 + 2 to equal 3', () => {
  expect({}).toEqual(Object.create({ name: 'G' }));
});

test('2、对象深度比较', () => {
  expect({ n: 'g', a: 19 }).toEqual({ a: 19, n: 'g' });
});
