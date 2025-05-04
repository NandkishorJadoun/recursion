function merge(leftArr, rightArr) {
  const mergedArr = [];
  let i = 0;
  let j = 0;
  while (i < leftArr.length && j < rightArr.length) {
    if (leftArr[i] < rightArr[j]) {
      mergedArr.push(leftArr[i]);
      i++;
    } else {
      mergedArr.push(rightArr[j]);
      j++;
    }
  }

  // check for remaining items in array

  while (i < leftArr.length) {
    mergedArr.push(leftArr[i]);
    i++;
  }

  while (j < rightArr.length) {
    mergedArr.push(rightArr[j]);
    j++;
  }

  return mergedArr;
}

function mergeSort(array) {
  if (array.length <= 1) return array;

  const leftArr = array.slice(0, array.length / 2);
  const rightArr = array.slice(array.length / 2, array.length);

  const left = mergeSort(leftArr);
  const right = mergeSort(rightArr);

  return merge(left, right);
}

console.log(mergeSort([105, 79, 100, 110])); // [ 79, 100, 105, 110 ]
console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1])); // [ 0, 1, 1,  2,3, 5, 8, 13 ]
