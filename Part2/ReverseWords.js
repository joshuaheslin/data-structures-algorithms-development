/**
 * @param {string} s
 * @return {string}
 */
 var reverseWords = function(s) {
  let array = s.replace(/ /g, ' ').split(' ')
  
  let map = new Map();
  
  for (let i = 0; i < array.length; i++) {
       map.set(i, array[i]);
  }

  let newString = ''
  for (let i = array.length - 1; i >= 0; i--){
      const item = map.get(i);
      if (item) {
          newString += item
          newString += ' '
      }
  }

  return newString.trim();
};