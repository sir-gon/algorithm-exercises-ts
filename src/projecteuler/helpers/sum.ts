export const sum = (numList: number[] = []): number => {
  if (numList?.length === 0) return 0;
  return numList.reduce((previous, current) => previous + current, 0);
};

export default { sum };
