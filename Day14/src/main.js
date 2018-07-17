// @flow

type Sleep = (ms: number) => Promise<void>;

let sleep: Sleep = (ms: number) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
};

export default sleep;
