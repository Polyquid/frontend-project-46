import _ from 'lodash';

const genDataOfDiff = (file1, file2) => {
  const keys1 = Object.keys(file1);
  const keys2 = Object.keys(file2);
  const mergedKeys = _.union(keys1, keys2);
  const sortedMergedKeys = _.sortBy(mergedKeys);

  const dataOfDiff = sortedMergedKeys.map((key) => {
    const currValue1 = file1[key];
    const currValue2 = file2[key];
    const currNode = {};
    currNode.key = key;
    if (!Object.hasOwn(file1, key)) {
      currNode.value = currValue2;
      currNode.type = 'added';
    } else if (!Object.hasOwn(file2, key)) {
      currNode.value = currValue1;
      currNode.type = 'deleted';
    } else if (currValue1 !== currValue2) {
      currNode.values = [currValue1, currValue2];
      currNode.type = 'changed';
    } else {
      currNode.value = currValue1;
      currNode.type = 'unchanged';
    }
    return currNode;
  });
  return dataOfDiff;
};

export default genDataOfDiff;
