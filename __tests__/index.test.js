import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import genDiff from '../src/index.js';
import readLocalFile from '../src/modules/readLocalFile.js';
import parseFile from '../src/modules/parseFile.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

test('genDiff, expect flat structure, format - "plain", read local file', () => {
  const expectFixturePath = getFixturePath('expectFlat.txt');
  const expectFile = fs.readFileSync(expectFixturePath, 'utf8');
  const filePath1 = getFixturePath('file1.json');
  const filePath2 = getFixturePath('file2.json');
  const { file: file1, formatFile: formatFile1 } = readLocalFile(filePath1);
  const { file: file2, formatFile: formatFile2 } = readLocalFile(filePath2);
  const parsedFile1 = parseFile(file1, formatFile1);
  const parsedFile2 = parseFile(file2, formatFile2);
  const rejectFile = genDiff(parsedFile1, parsedFile2);
  expect(rejectFile).toEqual(expectFile);
});
