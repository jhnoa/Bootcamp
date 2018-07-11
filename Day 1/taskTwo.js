function arrayComparison(firstArray, secondArray) {
  // true == same, false == different
  if (Array.isArray(firstArray) && Array.isArray(secondArray)) {
    // both array
    if (firstArray.length == secondArray.length) {
      // same length check content
      for (var i = 0; i < firstArray.length; i++) {
        if (firstArray[i] != secondArray[i]) {
          return false;
        }
      }
      // content checked
      return true;
    } else {
      return false;
    }
  } else if (firstArray === secondArray) {
    return true;
  } else {
    return false;
  }
}
console.log(arrayComparison([1, 2, 3], [1, 2, 3])); // true
console.log(arrayComparison([1, 2, 3], [1, 2, 3, 4])); // false
console.log(arrayComparison([1, 2, 3], [2, 3, 4])); // false
console.log(arrayComparison([1, 2, 3], 2)); // false
console.log(arrayComparison(2, [1, 2, 3])); // false
console.log(arrayComparison(1, 1)); // true
console.log(arrayComparison(1, 2)); // false
console.log(arrayComparison("a", "a")); // true
console.log(arrayComparison("a", "b")); // false
console.log("ini cuman ngetes");
