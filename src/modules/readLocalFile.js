import path from 'path';
import fs from 'fs';

const { cwd } = process;
const currentWorkDirectory = cwd();

export default (filepath) => {
  const currPath = filepath.startsWith('/') ? filepath : path.resolve(currentWorkDirectory, filepath);
  const formatFile = path.extname(currPath).slice(1);
  const file = fs.readFileSync(currPath);
  return { file, formatFile };
};
