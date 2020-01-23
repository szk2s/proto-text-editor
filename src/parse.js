class Declaration {
  constructor (word) {
    this.word = word;
  }
}

class Variable {
  constructor (word) {
    this.word = word;
  }
}

const convert = (word) => {
  switch (word) {
    case 'const':
    case 'let':
      return new Declaration(word);
    default:
      return new Variable(word);
  }
};

export const parse = (words) => words.map(convert);
