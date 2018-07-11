function compareObject(one, two) {
  if (JSON.stringify(one).length === JSON.stringify(two).length) {
    for (key of Object.keys(one)) {
      if ((key !== undefined || key !== null) && one[key] !== two[key]) {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
}

let one = {
  name: 'johan',
  id: 1,
};
let two = {
  name: 'linda',
  id: 2,
};
let three = {
  id: 1,
  name: 'johan',
};
console.log(compareObject(one, three));
