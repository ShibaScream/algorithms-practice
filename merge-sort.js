const merge = function(array, p, q, r) {
  const lowHalf = [];
  const highHalf = [];

  let k = p;
  let i;
  let j;
  for (i = 0; k <= q; i++, k++) {
    lowHalf[i] = array[k];
  }
  for (j = 0; k <= r; j++, k++) {
    highHalf[j] = array[k];
  }

  k = p;
  i = 0;
  j = 0;

  while (i < lowHalf.length && j < highHalf.length) {
    if (lowHalf[i] < highHalf[j]) {
      array[k] = lowHalf[i++];
    } else {
      array[k] = highHalf[j++];
    }
    k++;
  }

  while (i < lowHalf.length) {
    array[k++] = lowHalf[i++];
  }

  while (j < highHalf.length) {
    array[k++] = highHalf[j++];
  }
};

// Takes in an array and recursively merge sorts it
const mergeSort = function(array, p, r) {
  if (r - p > 0) {
    const q = Math.floor((r + p) / 2);
    mergeSort(array, p, q);
    mergeSort(array, q + 1, r);
    merge(array, p, q, r);
  }
};

const array = [14, 7, 3, 12, 9, 11, 6, 2];
mergeSort(array, 0, array.length - 1);
console.log('Array after sorting: ' + array);
//Program.assertEqual(array, [2, 3, 6, 7, 9, 11, 12, 14]);
