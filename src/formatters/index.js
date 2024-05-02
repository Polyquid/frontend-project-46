import genStylishFormat from './genStylishFormat.js';
import genPlainFormat from './genPlainFormat.js';
import genJSONFormat from './genJSONformat.js';

const mappingFormat = {
  stylish: (dataOfDiff) => genStylishFormat(dataOfDiff, 0),
  plain: (dataOfDiff) => genPlainFormat(dataOfDiff, []),
  json: (dataOfDiff) => genJSONFormat(dataOfDiff),
};

const useFormatterForData = (dataOfDiff, format) => {
  const formattedData = mappingFormat[format](dataOfDiff);
  return formattedData;
};

export default useFormatterForData;
