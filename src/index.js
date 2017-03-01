// @flow
import extract from './extract';

const docurize = (path: string) => {
  const ast = extract(path);

  const newAst = ast.map(e => e.map(element => {
    const filtered = element.value.split('\n').filter(e => e.match(/@[a-zA-Z\s]+/));

    return filtered.map(e => {
      const keyPair = e.replace('*', ' ').trim().split(/(@.*? )/);
      return {
        [keyPair[1].replace('@', ' ').trim()]: keyPair[2]
      }
    })
  }));
};

module.exports = docurize;