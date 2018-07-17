// @flow
import fs from 'fs';
let denodeify = (fn: Function) => {
  return (arg) => {
    return new Promise((resolve, reject) => {
      fn(arg, (error, result) => {
        if (error) {
          reject(error);
        }
        resolve(result);
      });
    });
  };
};

let testPromise = denodeify(fs.readdir);
testPromise('../').then((result) => {
  console.log(result);
});
