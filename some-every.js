
function hasOddNumber(arr) {
    return arr.some(function (number) {
        return number % 2 !== 0;
      });
}

function hasAZero(num) {
    const numStr = num.toString();
  
    return numStr.includes('0');
}

function hasOnlyOddNumbers(arr) {
    return arr.every(function (number) {
        return number % 2 !== 0;
      });
}

function hasNoDuplicates(arr) {
    const uniqueValues = {};

    for (const value of arr) {
      if (uniqueValues[value]) {
        return false; 
      }
  
      uniqueValues[value] = true;
    }

    return true;
}

function hasCertainKey(arr, key) {
    return arr.every(function (obj) {
        return obj.hasOwnProperty(key);
      });
}

function hasCertainValue(arr, key, searchValue) {
    return arr.every(function (obj) {
        return obj[key] === searchValue;
      });
}
