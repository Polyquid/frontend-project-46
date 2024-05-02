import yaml from 'js-yaml';

const mapping = {
  json: (file) => JSON.parse(file),
  yaml: (file) => yaml.load(file),
  yml: (file) => mapping.yaml(file),
};

const parseFile = (file, formatFile) => mapping[formatFile](file);

export default parseFile;
