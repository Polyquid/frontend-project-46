import genStylishFormat from './genStylishFormat.js';
import genPlainFormat from './genPlainFormat.js';

const mappingFormat = {
  stylish: (dataOfDiff) => genStylishFormat(dataOfDiff, 0),
  plain: (dataOfDiff) => genPlainFormat(dataOfDiff, []),
};

const useFormatterForData = (dataOfDiff, format) => {
  const formattedData = mappingFormat[format](dataOfDiff, 0);
  return formattedData.join('\n');
};

export default useFormatterForData;
