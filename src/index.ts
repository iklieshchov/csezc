
export type GreetingsType = 'short' | 'long';

export const hello = (name: string, greetingsType: GreetingsType = 'long') => {
  switch(greetingsType) {
    case 'short': {
      return `Hi ${name}!`;
    }
    case 'long': {
      return `Hello ${name}!`;
    }
  }
};
