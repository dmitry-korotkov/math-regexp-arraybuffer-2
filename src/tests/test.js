import Validator from '../js/app';

test('get error with 4 numbers', () => {
  expect(() => {
    const someName = new Validator();
    someName.validateUsername('v1111as_-yan');
  }).toThrow();
});

test('get error with number in the end', () => {
  expect(() => {
    const someName = new Validator();
    someName.validateUsername('vasyan35');
  }).toThrow();
});

test('get error with wrong symbol in the end', () => {
  expect(() => {
    const someName = new Validator();
    someName.validateUsername('vasyan^');
  }).toThrow();
});

test('get error with number in the begin', () => {
  expect(() => {
    const someName = new Validator();
    someName.validateUsername('1v111as_-yan');
  }).toThrow();
});

test('get error with wrong symbol in the begin', () => {
  expect(() => {
    const someName = new Validator();
    someName.validateUsername('@v111as_-yan');
  }).toThrow();
});

test('get error with wrong symbol', () => {
  expect(() => {
    const someName = new Validator();
    someName.validateUsername('as_-y%an');
  }).toThrow();
});

test('get correct username', () => {
  const someName = new Validator();
  someName.validateUsername('v111as_-yan');
  expect(someName).toEqual({ userName: 'v111as_-yan' });
});
