function sortedFrequency(arr, num) {
  if (findFirst(arr, num) === -1 || findLast(arr, num) === -1) {
    return -1;
  }
  return findLast(arr, num) - findFirst(arr, num) + 1;
}

function findFirst(arr, num) {
  let left = 0;
  let right = arr.length - 1;
  if (arr[0] === num) {
    return 0;
  }
  if (arr[right] < num || arr[0] > num) {
    return -1;
  }
  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] < num) {
      left = mid;
    } else if (arr[mid] > num) {
      right = mid;
    } else if (arr[mid] === num) {
      while (arr[mid - 1] === num || !arr[mid - 1]) {
        mid -= 1;
      }
      return mid;
    }
  }
  return -1;
}

function findLast(arr, num) {
  let left = 0;
  let right = arr.length - 1;
  if (arr[right] === num) {
    return right;
  }
  if (arr[right] < num || arr[0] > num) {
    return -1;
  }
  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] < num) {
      left = mid;
    } else if (arr[mid] > num) {
      right = mid;
    } else if (arr[mid] === num) {
      while (arr[mid + 1] === num || !arr[mid + 1]) {
        mid += 1;
      }
      return mid;
    }
  }
  return -1;
}

module.exports = sortedFrequency;
