// @flow
import fs from 'fs';
let readdir = (fileName: string) => {
  return new Promise((resolve, reject) => {
    fs.readdir(fileName, (error, result) => {
      if (error) {
        reject(error);
      }
      resolve(result);
    });
  });
};

let testPromise = readdir('../');
testPromise.then((result) => {
  console.log(result);
});
