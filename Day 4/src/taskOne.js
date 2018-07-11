//@flow
class DataStore {
  constructor() {
    this.data = {};
  }

  get(key) {
    return this.data[key];
  }
  set(key, value) {
    this.data[key] = value;
  }
  forEach(fn) {
    fn(this.data);
    // for (let d in this.data) {
    //   fn(d, this.data[d]);
    // }
  }
}

let d = new DataStore();
d.set('a', 1);
d.set(2, 3);
d.set(true, 2);
console.log(d.get('a')); // 1
console.log(d.get('b')); // undefined
console.log(d.get(2)); // 3
console.log(d.get(true)); // 2
d.forEach(loopStore);
// 2 3
// a 1
// true 2

function loopStore(store) {
  for (let d in store) {
    console.log(d, store[d]);
  }
}
