function numberToArray(num) {
  return Array.from(String(num));
}

function arrayToNumber(numberArray) {
  return numberArray.join('');
}

console.log(arrayToNumber([1,2,3,4,5]));