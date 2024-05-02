import _ from 'lodash';

const buildSpaces = (depth, type) => {
  const space = '  '.repeat(depth);
  switch (type) {
    case 'added':
      return `${space}+ `;
    case 'deleted':
      return `${space}- `;
    case 'changed':
      return [`${space}- `, `${space}+ `];
    case 'unchanged':
      return `${space}  `;
    case 'nested':
      return `${space}  `;
    default:
      return `${space}`;
  }
};

const genNestedFormattedValue = (node, depth) => {
  const nestedFormattedValue = Object
    .entries(node)
    .map(([key, value]) => {
      if (_.isObjectLike(value)) {
        return `${buildSpaces(depth + 1, 'nested')}${key}: ${genNestedFormattedValue(value, depth + 2)}`;
      }
      return `${buildSpaces(depth + 1, 'nested')}${key}: ${value}`;
    });

  return ['{', nestedFormattedValue.join('\n'), `${buildSpaces(depth - 1, 'nested')}}`].join('\n');
};

const genStylishFormat = (dataOfDiff, depth) => {
  const res = dataOfDiff.map((node) => {
    if (node.type === 'nested') {
      const { children } = node;
      const formattedChildren = genStylishFormat(children, depth + 2).join('\n');
      const space = buildSpaces(depth + 1, node.type);
      return `${space}${node.key}: {\n${formattedChildren}\n${space}}`;
    }
    if (node.type === 'changed') {
      const [value1, value2] = node.values;
      const [space1, space2] = buildSpaces(depth + 1, node.type);
      const isNestedValue1 = _.isObjectLike(value1);
      const corrValue1 = isNestedValue1 ? genNestedFormattedValue(value1, depth + 2) : value1;
      const isNestedValue2 = _.isObjectLike(value2);
      const corrValue2 = isNestedValue2 ? genNestedFormattedValue(value2, depth + 2) : value2;
      return `${space1}${node.key}: ${corrValue1}\n${space2}${node.key}: ${corrValue2}`;
    }
    const isNestedValue = _.isObjectLike(node.value);
    const value = isNestedValue ? genNestedFormattedValue(node.value, depth + 2) : node.value;
    return `${buildSpaces(depth + 1, node.type)}${node.key}: ${value}`;
  });
  return res;
};

export default (dataOfDiff, depth) => {
  const res = genStylishFormat(dataOfDiff, depth);
  return ['{', ...res, '}'].join('\n');
};
