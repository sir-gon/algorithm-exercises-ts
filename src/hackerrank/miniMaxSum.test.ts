import { miniMaxSum } from './miniMaxSum';

describe('miniMaxSum', () => {
  it('miniMaxSum test case 0', () => {
    expect.assertions(1);

    expect(() => {
      miniMaxSum([]);
    }).toThrow('Empty input');
  });

  it('miniMaxSum test case 0', () => {
    expect.assertions(2);

    const tests = [
      { input: [1, 2, 3, 4, 5], answer: '10 14' },
      { input: [5, 4, 3, 2, 1], answer: '10 14' }
    ];

    for (const test of tests) {
      expect(miniMaxSum(test.input)).toBe(test.answer);
    }
  });
});
