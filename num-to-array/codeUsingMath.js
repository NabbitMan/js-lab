let num = 9119;

function numToArray (num) {
  let numArray = [];
  while (num != 0) {
    numArray.unshift(num % 10);
    num = Math.trunc(num / 10);
  }
  return numArray;
}

