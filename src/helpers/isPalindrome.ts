export const isPalindrome = (n: number): boolean =>
  n.toString().split('').reverse().join('') === n.toString();

export default { isPalindrome };
