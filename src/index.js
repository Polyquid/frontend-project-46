import genDataOfDiff from './modules/genDataOfDiff.js';
import useFormatterForData from './modules/useFormatterForData.js';

export default (parsedFile1, parsedFile2, format = 'stylish') => {
  const dataOfDiff = genDataOfDiff(parsedFile1, parsedFile2);
  return useFormatterForData(dataOfDiff, format);
};
