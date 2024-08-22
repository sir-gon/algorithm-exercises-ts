import { nullable } from '.';

export const matrix = (
  m: number,
  n: number,
  init: nullable<number>
): number[][] => {
  const result = [];
  for (let i = 0; i < n; i++) {
    result.push(new Array(m).fill(init));
  }

  return result;
};

export default { matrix };
