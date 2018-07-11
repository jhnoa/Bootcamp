function compare(one, two) {
  if (JSON.stringify(one).length === JSON.stringify(two).length) {
    if (Array.isArray(one) && Array.isArray(two)) {
      return compareArray(one, two);
    } else if (typeof one == 'object' && typeof two == 'object') {
      return compareObject(one, two);
    }
    return false;
  } else {
    return false;
  }
}

function compareObject(one, two) {
  for (key of Object.keys(one)) {
    if (typeof (one[key] === 'object')) {
      return compare(one[key], two[key]);
    } else if ((key !== undefined || key !== null) && one[key] !== two[key]) {
      return false;
    }
  }
  return true;
}

function compareArray(one, two) {
  for (var i = 0; i < one.length; i++) {
    if (typeof (one[key] === 'object')) {
      return compare(one[key], two[key]);
    }
    if (one[i] !== two[i]) {
      return false;
    }
  }

  return true;
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

console.log(compare(one, two));
console.log(compare(one, three));
console.log(compare(three, two));
console.log(compare(three, [12, 34, 56]));
console.log(compare([1, 2, 3, 4, 5, 6], two));
console.log(compare([1, 2, 3, 4], [4, 3, 2, 1]));
console.log(compare([1, 2, 3], [1, 2, 3]));
console.log(compare({}, {}));
console.log(compare([], []));
