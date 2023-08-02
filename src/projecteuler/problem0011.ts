import { logger as console } from '../logger';
import { maximum } from './helpers';

function problem0011(_squareMatrix: number[][], _interval: number): number {
  let max = 0;

  const quadrantSize = _interval;
  const matrixLimit = _squareMatrix.length - (_interval - 1);

  for (let i = 0; i < matrixLimit; i++) {
    for (let j = 0; j < matrixLimit; j++) {
      let verticalAcum = 1;
      let horizontalAcum = 1;
      let diag1Acum = 1;
      let diag2Acum = 1;
      console.debug(`start point: i ${i}, j: ${j}`);
      for (let k = 0; k < quadrantSize; k++) {
        console.debug(`vertical coordinate: (i, j) = (${i + k}, ${j})`);
        console.debug(`horizontal coordinate: (i, j) = ($i}, ${j + k})`);
        console.debug(`diag1 coordinate: (i, j) = (${i + k}, ${j + k})`);
        console.debug(
          `diag2 coordinate: (i, j) = (${i + k}, ${j + (quadrantSize - 1) - k})`
        );

        verticalAcum *= _squareMatrix[i + k][j];
        horizontalAcum *= _squareMatrix[i][j + k];
        diag1Acum *= _squareMatrix[i + k][j + k];
        diag2Acum *= _squareMatrix[i + k][j + (quadrantSize - 1) - k];

        max = maximum(verticalAcum, max);
        max = maximum(horizontalAcum, max);
        max = maximum(diag1Acum, max);
        max = maximum(diag2Acum, max);
      }
    }
  }

  console.log(`Maximum product: ${max}`);

  return max;
}

export default problem0011;
export { problem0011 };
