// @flow
import esprima from 'esprima';
import fs from 'fs';
import glob from 'glob';

export const fileParse = (path: string): Array<string> => {
  const files = glob.sync(path);

  return files.map(e => fs.readFileSync(e, 'utf-8'));
};

export default (path: string) => {
  const fileData = fileParse(path);

  return fileData.map(e => esprima.parse(e, {
    comment: true,
  }).comments);
};
