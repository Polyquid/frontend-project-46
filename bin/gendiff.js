#!/usr/bin/env node
import { Command } from 'commander';
import parseFile from '../src/parsers/index.js';
import readLocalFile from '../src/modules/readLocalFile.js';
import genDiff from '../src/index.js';

const program = new Command();

program
  .description('Compares two configuration files and shows a difference.')
  .version('0.0.1', '-v, --version', 'output the current version')
  .option('-f, --format [type]', 'output format')
  .arguments('<filepath1> <filepath2>')
  .action((filepath1, filepath2, option) => {
    const { format } = option;
    const { file: file1, formatFile: formatFile1 } = readLocalFile(filepath1);
    const { file: file2, formatFile: formatFile2 } = readLocalFile(filepath2);
    const parsedFile1 = parseFile(file1, formatFile1);
    const parsedFile2 = parseFile(file2, formatFile2);
    const res = genDiff(parsedFile1, parsedFile2, format);
    console.log(res);
  });

program.parse();
