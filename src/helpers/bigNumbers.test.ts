import { bigNum, bigSum, bigSumMany } from './bigNumbers';

describe('bigNumber operations', () => {
  it('bigNum examples', () => {
    expect.assertions(4);

    expect(bigNum('2')).toStrictEqual([2]);
    expect(bigNum('122')).toStrictEqual([1, 2, 2]);
    expect(bigNum('1234567890')).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
    expect(
      bigNum('12345678901234567890123456789012345678901234567890')
    ).toStrictEqual([
      /* eslint-disable prettier/prettier */
      1, 2, 3, 4, 5, 6, 7, 8, 9, 0,
      1, 2, 3, 4, 5, 6, 7, 8, 9, 0,
      1, 2, 3, 4, 5, 6, 7, 8, 9, 0,
      1, 2, 3, 4, 5, 6, 7, 8, 9, 0,
      1, 2, 3, 4, 5, 6, 7, 8, 9, 0
      /* eslint-enable prettier/prettier */
    ]);
  });

  it('bigSum examples', () => {
    expect.assertions(5);

    expect(bigSum('2', '2')).toBe('4');
    expect(bigSum('12', '12')).toBe('24');
    expect(bigSum('249', '654')).toBe('903');
    expect(bigSum('3491', '854')).toBe('4345');
    expect(bigSum('12345678901234567890', '12345678901234567890')).toBe(
      '24691357802469135780'
    );
  });

  it('bigSumMany examples', () => {
    expect.assertions(5);

    expect(bigSumMany(['2', '2'])).toBe('4');
    expect(bigSumMany(['123', '321'])).toBe('444');

    expect(bigSumMany(['2', '2', '2'])).toBe('6');

    expect(bigSumMany(['349', '854', '213', '543'])).toBe('1959');

    expect(
      bigSumMany([
        '12345678901234567890',
        '12345678901234567890',
        '12345678901234567890',
        '12345678901234567890'
      ])
    ).toBe('49382715604938271560');
  });
});
