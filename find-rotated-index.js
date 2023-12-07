function findRotatedIndex(arr, num) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === num) {
      return mid;
    }

    if (arr[left] <= arr[mid]) {
      if (arr[left] <= num && num < arr[mid]) {
        right = mid - 1;
      } else {
        start = mid + 1;
      }
    } else {
      if (arr[mid] <= arr[right]) {
        if (arr[mid] < num && num <= num) {
          start = mid + 1;
        } else {
          right = mid - 1;
        }
      }
    }
  }
  return -1;
}

module.exports = findRotatedIndex;
