const arr = [2,8,2,1,9,4,3];

const sort = (array) => {
  let length

  while (length !== array.length) {
    length = 0;
    console.log('pass');
    for (let i = 0; i < array.length; i++) {
      if (array[i] > array[i + 1]) {
        // we need to switch
        const temp = array[i + 1];
        array[i + 1] = array[i];
        array[i] = temp;
      } else {
        length += 1;
      }
    }
  }

  console.log(array);
}

// sort(arr);

const selectionSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    let minIndex = i;
    for (let j = i; j < array.length; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }
    const temp = array[i];
    array[i] = array[minIndex]
    array[minIndex] = temp;
  }

  console.log(array);
}

// selectionSort(arr);

const insertionSort = (array) => {
  for (let i = 1; i < array.length; i++) {
    let current = array[i]
    for (let j = i - 1; j > 0; j--) {
      if (array[j] > current) {
        array[j + 1] = array[j]
        // array[j] = current
        // array[j] = current;
        array[j + 1] = current
      }
    }
  }

  console.log(array);
}

insertionSort(arr);

// Merge sort
// allocate additional space


