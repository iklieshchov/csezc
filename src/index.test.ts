import { hello } from './index';

describe('index', () => {

  it('say hello', () => {
    expect(hello('Ihor')).toEqual('Hello Ihor!');
  });
});
