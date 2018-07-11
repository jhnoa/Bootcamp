// @flow

function createCounter(start) {
  let count = start || 0;

  return {
    inc: (number) => {
      count += number || 1;
    },
    dec: (number) => {
      count -= number || 1;
    },
    getCounter: () => count,
  };
}
let c = createCounter(29);

console.log(c.getCounter());
c.inc(2);
console.log(c.getCounter());
c.inc();
console.log(c.getCounter());
c.dec(2);
console.log(c.getCounter());
c.dec();
console.log(c.getCounter());
