const buildSpaces = (depth, type = 'root') => {
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
    default:
      return '';
  }
};

const mappingFormat = {
  json: (dataOfDiff) => {
    const res = dataOfDiff.flatMap((node, index, nodes) => {
      const currFormattedNode = [];
      if (index === 0) {
        currFormattedNode.push('{');
      }
      if (node.type !== 'changed') {
        currFormattedNode.push(`${buildSpaces(1, node.type)}${node.key}: ${node.value}`);
      } else {
        const [value1, value2] = node.values;
        const [space1, space2] = buildSpaces(1, node.type);
        currFormattedNode.push(`${space1}${node.key}: ${value1}`);
        currFormattedNode.push(`${space2}${node.key}: ${value2}`);
      }
      if (index === nodes.length - 1) {
        currFormattedNode.push('}');
      }
      return currFormattedNode;
    });
    return res;
  },
};

const useFormatterForData = (dataOfDiff, format) => {
  const res = mappingFormat[format](dataOfDiff);
  return res.join('\n');
};

export default useFormatterForData;
