/**
 * @link Problem definition [[docs/hackerrank/implementation/countingValleys.md]]
 */

import { logger as console } from '../../logger';

function countingValleys(steps: number, path: string): number {
  const stepList = path.split('');
  let altitude = 0;
  let valleys = 0;

  console.debug(stepList);

  stepList.forEach((step) => {
    if (step === 'D') {
      if (altitude === 0) {
        valleys += 1;
      }
      altitude -= 1;
    }
    if (step === 'U') {
      altitude += 1;
    }
  });

  return valleys;
}

export default { countingValleys };
export { countingValleys };
