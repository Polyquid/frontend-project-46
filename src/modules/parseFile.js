const mapping = {
  json: (file) => JSON.parse(file),
  yaml: () => console.log('\nНадо дописать \n'),
  yml: () => console.log('\nНадо дописать \n'),
};

const parseFile = (file, formatFile) => mapping[formatFile](file);

export default parseFile;
