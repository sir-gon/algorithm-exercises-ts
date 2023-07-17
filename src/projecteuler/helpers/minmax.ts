export const minimum = (a: number, b: number): number => {
  if (a < b) {
    return a;
  }
  return b;
};

export const maximum = (a: number, b: number): number => {
  if (a > b) {
    return a;
  }
  return b;
};

export default { minimum, maximum };
