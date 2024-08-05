/**
 * @link Problem definition [[docs/hackerrank/interview_preparation_kit/miscellaneous/flipping-bits.md]]
 */

const __BINARY_BASE__ = 2;
const __NUMBER_SIZE_IN_BITS__ = 32;

export function flippingBits(n: number): number {
  let n_binary_str = n.toString(__BINARY_BASE__);
  n_binary_str = n_binary_str.padStart(__NUMBER_SIZE_IN_BITS__, '0');

  let result_bin_str = '';

  n_binary_str.split('').forEach((bin_digit) => {
    if (bin_digit == '1') {
      result_bin_str += '0';
    } else {
      result_bin_str += '1';
    }
  });

  return parseInt(result_bin_str, __BINARY_BASE__);
}

export default { flippingBits };
