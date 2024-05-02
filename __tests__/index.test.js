import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const jsonFilePath1 = getFixturePath('file1.json');
const jsonFilePath2 = getFixturePath('file2.json');
const yamlFilePath1 = getFixturePath('file1.yaml');
const ymlFilePath2 = getFixturePath('file2.yml');
const table = [
  {
    format: 'stylish',
    expectFile: fs.readFileSync(getFixturePath('expectStylish.txt'), 'utf8'),
    jsonReject: genDiff(jsonFilePath1, jsonFilePath2),
    yamlReject: genDiff(yamlFilePath1, ymlFilePath2),
  },
  {
    format: 'plain',
    expectFile: fs.readFileSync(getFixturePath('expectPlain.txt'), 'utf8'),
    jsonReject: genDiff(jsonFilePath1, jsonFilePath2, 'plain'),
    yamlReject: genDiff(yamlFilePath1, ymlFilePath2, 'plain'),
  },
  {
    format: 'json',
    expectFile: fs.readFileSync(getFixturePath('expectJSON.txt'), 'utf8'),
    jsonReject: genDiff(jsonFilePath1, jsonFilePath2, 'json'),
    yamlReject: genDiff(yamlFilePath1, ymlFilePath2, 'json'),
  },
];

test.each(table)('$format', ({ expectFile, jsonReject, yamlReject }) => {
  expect(jsonReject).toEqual(expectFile);
  expect(yamlReject).toEqual(expectFile);
});
