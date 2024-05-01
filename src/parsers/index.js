import yaml from 'js-yaml';

const mapping = {
  json: (file) => JSON.parse(file),
  yaml: (file) => yaml.load(file),
};

const parseFile = (file, formatFile) => mapping[formatFile === 'yml' ? 'yaml' : formatFile](file);

export default parseFile;
