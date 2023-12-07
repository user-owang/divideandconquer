function findFloor(arr, num) {
  let left = 0;
  let right = arr.length - 1;
  if (num >= arr[right]) {
    return arr[right];
  }
  if (num < arr[0]) {
    return -1;
  }
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === num) {
      return num;
    } else if (arr[mid] < num) {
      if (arr[mid + 1] > num) {
        return arr[mid];
      }
      left = mid + 1;
    } else {
      if (arr[mid - 1] <= num) {
        return arr[mid - 1];
      }
      right = mid - 1;
    }
  }
}

module.exports = findFloor;
