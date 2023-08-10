import { hello } from '../src/hello_world';

describe('test hello', () => {
  it('should return hello world', () => {
    expect.assertions(1);
    expect(hello()).toBe('Hello world!');
  });
});
