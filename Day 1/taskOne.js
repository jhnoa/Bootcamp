function doubleTheArray(number) {
  result = [];
  for (let i of number) {
    result.push(i * 2);
  }
  return result;
}

array = doubleTheArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0, -1]);

console.log(array);
