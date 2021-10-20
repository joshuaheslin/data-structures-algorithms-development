const checkPalindrome = (str) => {
  const newString = str;
  let mergedString = '';

  for (let j = Object.values(newString.length) - 1; j >= 0; j--) {
      mergedString += newString[j]
  }

  console.log(mergedString, newString)
  return mergedString === newString;
}

const toMap = (str) => {
  const object = {}
  Array.from(str).map((s,i) => {
      object[i] = s;
  })
  return object;
}


/**
* @param {string} s
* @return {boolean}
*/
var validPalindrome = function(s) {
  // go through array and remove 1 char
  // then take the new string and check if it can be a palindrome
  // if true return
  
  const result = checkPalindrome(s);
  if (result) return result;
  
  for (let i = 0; i < s.length; i++) {
      const str = toMap(s);
      console.log('str', str)
      delete str[i]
      console.log(str)
      
      if (checkPalindrome(str)) return true;
  }
  return false
};