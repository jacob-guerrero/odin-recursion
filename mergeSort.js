function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const min = 0;
  const max = arr.length;

  const mid = (min + max) / 2;
  const left = arr.slice(min, mid);
  const right = arr.slice(mid, max);

  const minLeft = mergeSort(left);
  const maxRigth = mergeSort(right);
  return merge(minLeft, maxRigth);
}

function merge(min, max) {
  let result = [];
  let i = 0,
    j = 0;

  while (i < min.length && j < max.length) {
    if (min[i] < max[j]) {
      result.push(min[i]);
      i++;
    } else {
      result.push(max[j]);
      j++;
    }
  }

  for (; i < min.length; i++) {
    result.push(min[i]);
  }
  for (; j < max.length; j++) {
    result.push(max[j]);
  }

  return result;
}

const unsortedArray = [5, 3, 8, 6, 2, 7, 4, 1];
const sortedArray = mergeSort(unsortedArray);
console.log(sortedArray);
