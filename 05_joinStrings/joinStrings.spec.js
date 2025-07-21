const values = require('./joinStrings')

describe('step 2', () => {
  test('firstName is Myo Myat', () => {
    expect(values.firstName).toEqual('Myo Myat');
  });
  test('lastName is Han', () => {
    expect(values.lastName).toEqual('Han');
  });
  test('thisYear is 2025', () => {
    expect(values.thisYear).toEqual(2025);
  });
  test('birthYear is 1993', () => {
    expect(values.birthYear).toEqual(1993);
  });
  test('greeting is properly output', () => {
    expect(values.greeting).toEqual('Hello! My name is Myo Myat Han and I am 32 years old.');
  });
});

describe('step 3', () => {
  test('fullName is Myo Myat Han', () => {
    expect(values.fullName).toEqual('Myo Myat Han');
  });
  test('age is 32', () => {
    expect(values.age).toEqual(32);
  });
});
