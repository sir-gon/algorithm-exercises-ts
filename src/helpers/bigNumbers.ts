export const bigNum = (strNumber: string, base = 10): number[] => {
  const result = [];
  let i;

  for (i = 0; i < strNumber.length; i++) {
    result.push(parseInt(strNumber.charAt(i), base));
  }

  return result;
};

export const bigSum = (strNumberA: string, strNumberB: string): string => {
  const result = [];

  const a = bigNum(strNumberA).reverse();
  const b = bigNum(strNumberB).reverse();

  let sum = 0;
  let carry = 0;
  let digit = 0;

  // adjust numbers length
  if (a.length > b.length) {
    for (let i = b.length; i < a.length; i++) {
      b.push(0);
    }
  } else if (b.length > a.length) {
    for (let i = a.length; i < b.length; i++) {
      a.push(0);
    }
  }

  // do the sum
  for (let i = 0; i < a.length; i++) {
    sum = a[i] + b[i] + carry;

    if (sum < 10) {
      digit = sum;
      carry = 0;
    } else {
      digit = Math.floor(sum % 10);
      carry = Math.floor(sum / 10);
    }

    result.push(digit);
  }
  if (carry > 0) result.push(carry);

  return result
    .reverse()
    .reduce((previous, current) => `${previous}${current}`, '');
};

export const bigSumMany = (strNumberArr: string[]): string => {
  let result = '0';

  for (let i = 0; i < strNumberArr.length; i++) {
    result = bigSum(result, strNumberArr[i]);
  }

  return result;
};

export default {
  bigNum,
  bigSum,
  bigSumMany
};
