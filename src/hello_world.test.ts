import { describe, expect, it } from '@jest/globals';

import { hello } from './hello_world';

describe('test hello', () => {
  it('should return hello world', () => {
    expect.assertions(1);
    expect(hello()).toBe('Hello world!');
  });
});
