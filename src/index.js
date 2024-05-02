import genDataOfDiff from './modules/genDataOfDiff.js';
import useFormatterForData from './formatters/index.js';
import readLocalFile from './modules/readLocalFile.js';
import parseFile from './parsers/index.js';

export default (filepath1, filepath2, format = 'stylish') => {
  const { file: file1, formatFile: formatFile1 } = readLocalFile(filepath1);
  const { file: file2, formatFile: formatFile2 } = readLocalFile(filepath2);
  const parsedFile1 = parseFile(file1, formatFile1);
  const parsedFile2 = parseFile(file2, formatFile2);
  const dataOfDiff = genDataOfDiff(parsedFile1, parsedFile2);
  return useFormatterForData(dataOfDiff, format);
};
