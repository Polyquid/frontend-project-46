import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import genDiff from '../src/index.js';
import readLocalFile from '../src/modules/readLocalFile.js';
import parseFile from '../src/parsers/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

test('genDiff\nformat - "stylish"\n.json', () => {
  const expectFixturePath = getFixturePath('expectStylish.txt');
  const expectFile = fs.readFileSync(expectFixturePath, 'utf8');
  const filePath1 = getFixturePath('file1.yaml');
  const filePath2 = getFixturePath('file2.yml');
  const { file: file1, formatFile: formatFile1 } = readLocalFile(filePath1);
  const { file: file2, formatFile: formatFile2 } = readLocalFile(filePath2);
  const parsedFile1 = parseFile(file1, formatFile1);
  const parsedFile2 = parseFile(file2, formatFile2);
  const rejectFile = genDiff(parsedFile1, parsedFile2);
  expect(rejectFile).toEqual(expectFile);
});

test('genDiff\nformat - "stylish"\n.yaml && .yml', () => {
  const expectFixturePath = getFixturePath('expectStylish.txt');
  const expectFile = fs.readFileSync(expectFixturePath, 'utf8');
  const filePath1 = getFixturePath('file1.yaml');
  const filePath2 = getFixturePath('file2.yml');
  const { file: file1, formatFile: formatFile1 } = readLocalFile(filePath1);
  const { file: file2, formatFile: formatFile2 } = readLocalFile(filePath2);
  const parsedFile1 = parseFile(file1, formatFile1);
  const parsedFile2 = parseFile(file2, formatFile2);
  const rejectFile = genDiff(parsedFile1, parsedFile2);
  expect(rejectFile).toEqual(expectFile);
});

test('genDiff\nformat - "plain"\n.json', () => {
  const expectFixturePath = getFixturePath('expectPlain.txt');
  const expectFile = fs.readFileSync(expectFixturePath, 'utf8');
  const filePath1 = getFixturePath('file1.yaml');
  const filePath2 = getFixturePath('file2.yml');
  const { file: file1, formatFile: formatFile1 } = readLocalFile(filePath1);
  const { file: file2, formatFile: formatFile2 } = readLocalFile(filePath2);
  const parsedFile1 = parseFile(file1, formatFile1);
  const parsedFile2 = parseFile(file2, formatFile2);
  const rejectFile = genDiff(parsedFile1, parsedFile2, 'plain');
  expect(rejectFile).toEqual(expectFile);
});

test('genDiff\nformat - "plain"\n.yaml && .yml', () => {
  const expectFixturePath = getFixturePath('expectPlain.txt');
  const expectFile = fs.readFileSync(expectFixturePath, 'utf8');
  const filePath1 = getFixturePath('file1.yaml');
  const filePath2 = getFixturePath('file2.yml');
  const { file: file1, formatFile: formatFile1 } = readLocalFile(filePath1);
  const { file: file2, formatFile: formatFile2 } = readLocalFile(filePath2);
  const parsedFile1 = parseFile(file1, formatFile1);
  const parsedFile2 = parseFile(file2, formatFile2);
  const rejectFile = genDiff(parsedFile1, parsedFile2, 'plain');
  expect(rejectFile).toEqual(expectFile);
});
