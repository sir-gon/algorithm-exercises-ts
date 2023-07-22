import { logger as console } from '../../logger';

import { gradingStudents } from './gradingStudents';

describe('gradingStudents', () => {
  it('gradingStudents Test case 0', () => {
    expect.assertions(1);

    const input = [73, 67, 38, 33];
    const solutionFound = [75, 67, 40, 33];

    const calculated = gradingStudents(input);

    console.log(`gradingStudents Test case 0: ${calculated}`);

    expect(calculated).toStrictEqual(solutionFound);
  });
});
