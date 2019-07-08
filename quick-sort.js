const swap = function(array, firstIndex, secondIndex) {
  const temp = array[firstIndex];
  array[firstIndex] = array[secondIndex];
  array[secondIndex] = temp;
};

const partition = function(array, p, r) {
  let q = p;
  for (let i = q; i < r; i++) {
    if (array[i] <= array[r]) {
      swap(array, i, q);
      q++;
    }
  }
  swap(array, q, r);
  return q;
};

const quickSort = function(array, p, r) {
  if (r - p > 0) {
    const q = partition(array, p, r);
    quickSort(array, p, q - 1);
    quickSort(array, q + 1, r);
  }
};

const array = [9, 7, 5, 11, 12, 2, 14, 3, 10, 6];
quickSort(array, 0, array.length - 1);
console.log('Array after sorting: ' + array);
// Program.assertEqual(array, [2,3,5,6,7,9,10,11,12,14]);
