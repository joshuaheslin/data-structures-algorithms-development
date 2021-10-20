/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */

 function convertToNumber(str) {
  let number = 0;
     
  for (let i = 0; i < str.length; i++) {
    let unit = Number(str[i])
    let mag = Math.pow(10, (str.length - 1 - i))
    number += unit * mag
  }
  console.log(number)
  return number; 
}

var addStrings = function(num1, num2) {
  const number1 = convertToNumber(num1);
  const number2 = convertToNumber(num2);
  

  return `${number1 + number2}`;
};

console.log(addStrings(num1, num2)) // 134