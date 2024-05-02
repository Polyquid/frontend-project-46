import _ from 'lodash';

const genDataOfDiff = (file1, file2) => {
  const keys1 = Object.keys(file1);
  const keys2 = Object.keys(file2);
  const mergedKeys = _.union(keys1, keys2);
  const sortedMergedKeys = _.sortBy(mergedKeys);

  const dataOfDiff = sortedMergedKeys.map((key) => {
    const currValue1 = file1[key];
    const currValue2 = file2[key];
    if (_.isObjectLike(currValue1) && _.isObjectLike(currValue2)) {
      return {
        key,
        type: 'nested',
        children: genDataOfDiff(currValue1, currValue2),
      };
    }
    if (!Object.hasOwn(file1, key)) {
      return {
        key,
        type: 'added',
        value: currValue2,
      };
    }
    if (!Object.hasOwn(file2, key)) {
      return {
        key,
        type: 'deleted',
        value: currValue1,
      };
    }
    if (currValue1 !== currValue2) {
      return {
        key,
        type: 'changed',
        values: [currValue1, currValue2],
      };
    }
    return {
      key,
      type: 'unchanged',
      value: currValue1,
    };
  });
  return dataOfDiff;
};

export default genDataOfDiff;
