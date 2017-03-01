import { expect } from 'chai';
import { fileParse} from './../src/extract';

describe('Extract', () => {
  it('fileParse should return an array', () => {
    const list = fileParse('./*.js');

    expect(list).to.be.an('array');
  });
});
