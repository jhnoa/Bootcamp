// @flow

function printObjectValueFromArray(arrayOfObject, property) {
  result = [];
  for (let object of arrayOfObject) {
    result.push(object[property]);
  }
  return result;
}
array = [
  {
    name: 'johan',
    status: true,
  },
  {
    name: 'jessica',
    status: true,
  },
  {
    name: 'renata',
    status: false,
  },
];

console.log(printObjectValueFromArray(array, 'name'));
