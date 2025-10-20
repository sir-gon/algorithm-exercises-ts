export const product = (numList: number[] = []): number => {
  if (numList?.length === 0) return 0;
  return numList.reduce((previous, current) => previous * current, 1);
};

export default { product };
