import { nullable } from './nullable';

export const matrix = (
  m: number,
  n: number,
  init: nullable<number>
): nullable<number>[][] => {
  const result = [];
  for (let i = 0; i < n; i++) {
    result.push(new Array<nullable<number>>(m).fill(init));
  }

  return result;
};

export default { matrix };
