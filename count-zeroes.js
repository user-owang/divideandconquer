function countZeroes(arr) {
  let n = findBreak(arr);
  if ((n = -1)) {
    return 0;
  }
  return arr.length - n;
}

function findBreak(arr) {
  let left = 0;
  let right = arr.length - 1;
  if (arr[0] === 0) {
    return 0;
  } else if (arr[right] === 1) {
    return -1;
  }
  while (left > right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === 0) {
      if (arr[mid - 1] === 1) {
        return mid;
      }
      right = mid - 1;
    } else if (arr[mid] === 1) {
      if (arr[mid + 1] === 0) {
        return mid + 1;
      }
      left = mid + 1;
    }
  }
}

module.exports = countZeroes;
