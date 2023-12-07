function findRotationCount(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] < arr[mid - 1]) {
      return mid;
    } else if (arr[left] > arr[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return 0;
}

module.exports = findRotationCount;
