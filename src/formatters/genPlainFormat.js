const genFormattedValue = (value) => {
  if (value === null) {
    return 'null';
  }
  const typeValue = typeof value;
  switch (typeValue) {
    case 'object':
      return '[complex value]';
    case 'string':
      return `'${value}'`;
    default:
      return value;
  }
};

const mappingPlain = {
  added: (node, path) => {
    const currValue = genFormattedValue(node.value);
    const currPath = path.join('.');
    return `Property '${currPath}' was added with value: ${currValue}`;
  },
  deleted: (node, path) => {
    const currPath = path.join('.');
    return `Property '${currPath}' was removed`;
  },
  changed: (node, path) => {
    const currPath = path.join('.');
    const [value1, value2] = node.values;
    const currValue1 = genFormattedValue(value1);
    const currValue2 = genFormattedValue(value2);
    return `Property '${currPath}' was updated. From ${currValue1} to ${currValue2}`;
  },
  unchanged: () => [],
};

const genPlainFormat = (dataOfDiff) => {
  const iter = (data, path = []) => {
    const res = data.flatMap((node) => {
      if (node.type === 'nested') {
        return iter(node.children, [...path, node.key]);
      }
      return mappingPlain[node.type](node, [...path, node.key]);
    });
    return res.join('\n');
  };
  return iter(dataOfDiff, []);
};

export default genPlainFormat;
