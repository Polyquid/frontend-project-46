import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

test('genDiff\nformat - "stylish"\n.json', () => {
  const expectFixturePath = getFixturePath('expectStylish.txt');
  const expectFile = fs.readFileSync(expectFixturePath, 'utf8');
  const filePath1 = getFixturePath('file1.yaml');
  const filePath2 = getFixturePath('file2.yml');
  const rejectFile = genDiff(filePath1, filePath2);
  expect(rejectFile).toEqual(expectFile);
});

test('genDiff\nformat - "stylish"\n.yaml && .yml', () => {
  const expectFixturePath = getFixturePath('expectStylish.txt');
  const expectFile = fs.readFileSync(expectFixturePath, 'utf8');
  const filePath1 = getFixturePath('file1.yaml');
  const filePath2 = getFixturePath('file2.yml');
  const rejectFile = genDiff(filePath1, filePath2);
  expect(rejectFile).toEqual(expectFile);
});

test('genDiff\nformat - "plain"\n.json', () => {
  const expectFixturePath = getFixturePath('expectPlain.txt');
  const expectFile = fs.readFileSync(expectFixturePath, 'utf8');
  const filePath1 = getFixturePath('file1.yaml');
  const filePath2 = getFixturePath('file2.yml');
  const rejectFile = genDiff(filePath1, filePath2, 'plain');
  expect(rejectFile).toEqual(expectFile);
});

test('genDiff\nformat - "plain"\n.yaml && .yml', () => {
  const expectFixturePath = getFixturePath('expectPlain.txt');
  const expectFile = fs.readFileSync(expectFixturePath, 'utf8');
  const filePath1 = getFixturePath('file1.yaml');
  const filePath2 = getFixturePath('file2.yml');
  const rejectFile = genDiff(filePath1, filePath2, 'plain');
  expect(rejectFile).toEqual(expectFile);
});

test('genDiff\nformat - "json"\n.json', () => {
  const expectFixturePath = getFixturePath('expectJSON.txt');
  const expectFile = fs.readFileSync(expectFixturePath, 'utf8');
  const filePath1 = getFixturePath('file1.yaml');
  const filePath2 = getFixturePath('file2.yml');
  const rejectFile = genDiff(filePath1, filePath2, 'json');
  expect(rejectFile).toEqual(expectFile);
});

test('genDiff\nformat - "json"\n.yaml && .yml', () => {
  const expectFixturePath = getFixturePath('expectJSON.txt');
  const expectFile = fs.readFileSync(expectFixturePath, 'utf8');
  const filePath1 = getFixturePath('file1.yaml');
  const filePath2 = getFixturePath('file2.yml');
  const rejectFile = genDiff(filePath1, filePath2, 'json');
  expect(rejectFile).toEqual(expectFile);
});
