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
      // console.log(length, array);
    }
  }

  console.log(array);
}

sort(arr);