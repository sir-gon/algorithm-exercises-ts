export const bigNum = (strNumber: string, base = 10): number[] => {
  const result = [];
  let i;

  for (i = 0; i < strNumber.length; i++) {
    result.push(parseInt(strNumber.charAt(i), base));
  }

  return result;
};

export const bigNumToString = (number: number[]): string => {
  return number.reduce((a, b) => `${a}${b}`, '');
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

  return [...result]
    .reverse()
    .reduce((previous, current) => `${previous}${current}`, '');
};

export const bigSumMany = (strNumberArr: string[]): string => {
  let result = '0';

  for (const number of strNumberArr) {
    result = bigSum(result, number);
  }

  return result;
};

export const bigMultiplyRowToBigNum = (
  strNumber: string,
  multiplierDigit: number
): number[] => {
  const number = bigNum(strNumber).reverse();
  const result = [];

  let mul = 0;
  let carry = 0;
  let digit = 0;

  for (const multiplicand of number) {
    mul = multiplicand * multiplierDigit + carry;

    if (mul < 10) {
      digit = mul;
      carry = 0;
    } else {
      digit = Math.floor(mul % 10);
      carry = Math.floor(mul / 10);
    }

    result.push(digit);
  }
  if (carry > 0) result.push(carry);

  return result.reverse();
};

export const bigMultiplyRowToString = (
  strNumber: string,
  multiplierDigit: number
): string =>
  bigMultiplyRowToBigNum(strNumber, multiplierDigit).reduce(
    (previous, current) => `${previous}${current}`,
    ''
  );

export const bigMultiply = (
  strMultiply: string,
  strNumMultiplier: string
): string => {
  const result: string[] = [];
  const collector: number[][] = [];

  const bigNumMultiplier = bigNum(strNumMultiplier).reverse();

  for (let i = 0; i < bigNumMultiplier.length; i++) {
    collector.push([]);
    collector[i] = [];

    // padding position by row
    for (let j = 0; j < i; j++) {
      collector[i].push(0);
    }

    // Product of multiply digits as rows by every multiplier digit
    collector[i] = collector[i].concat(
      bigMultiplyRowToBigNum(strMultiply, bigNumMultiplier[i]).reverse()
    );

    // Transform row of digits to string
    result[i] = [...collector[i]]
      .reverse()
      .reduce((previous, current) => `${previous}${current}`, '');
  }
  return bigSumMany(result);
};

export const bigPower = (strBase: string, intExp: number): string => {
  let result = '1';

  for (let i = 0; i < intExp; i++) {
    result = bigMultiply(result, strBase);
  }

  return result;
};

export const bigFactorial = (number: number): string => {
  // check number as int

  let acum = '1';

  for (let multiplier = 1; multiplier <= number; multiplier++) {
    acum = bigMultiply(acum, `${multiplier}`);
  }

  return acum;
};

export default {
  bigNum,
  bigSum,
  bigSumMany,
  bigMultiplyRowToBigNum,
  bigMultiplyRowToString,
  bigMultiply,
  bigPower,
  bigFactorial
};
