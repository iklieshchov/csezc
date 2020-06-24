import { hello } from './index';

describe('index', () => {

  it('say default hello', () => {
    expect(hello('Ihor')).toEqual('Hello Ihor!');
  });
  
  it('say long hello', () => {
    expect(hello('Ihor', 'long')).toEqual('Hello Ihor!');
  });

  it('say short hello', () => {
    expect(hello('Ihor', 'short')).toEqual('Hi Ihor!');
  });
});
