/**
 * @link Problem definition [[docs/hackerrank/interview_preparation_kit/stacks_and_queues/balanced-brackets.md]]
 */

const __YES__ = 'YES';
const __NO__ = 'NO';

export function isBalancedCompute(s: string): boolean {
  const pairs: Record<string, string> = { '{': '}', '(': ')', '[': ']' };
  const brackets: string[] = [];

  for (const letter of s.split('')) {
    if (letter in pairs) {
      brackets.push(letter);
    } else if (
      brackets.length > 0 &&
      pairs[brackets[brackets.length - 1]] === letter
    ) {
      brackets.pop();
    } else {
      return false;
    }

    console.debug(letter);
  }

  return brackets.length <= 0;
}

export function isBalanced(s: string): string {
  return isBalancedCompute(s) ? __YES__ : __NO__;
}

export default { isBalanced };
