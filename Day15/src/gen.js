// @flow

import fetch from 'node-fetch';

type Action =
  | {
      type: 'WAIT';
      ms: number;
    }
  | {
      type: 'FETCH';
      url: string;
    };

function* getUserRepos(userID: string) {
  yield {type: 'WAIT', ms: 200};
  let repos = yield {
    type: 'FETCH',
    url: `https://api.github.com/users/${userID}/repos`,
  };
  yield {type: 'WAIT', ms: 300};
  return repos.map((repo: Object): string => repo.name);
}

type Response = {
  done: boolean;
  value: Action | null;
};

function run(fn) {
  return new Promise((resolve, reject) => {
    function doThing(object: Response) {
      let {done, value} = object;

      if (value && done !== true) {
        if (value.type === 'WAIT') {
          setTimeout(() => {
            let obj = fn.next();
            doThing({...obj});
          }, value.ms);
        } else if (value.type === 'FETCH') {
          return fetch(value.url)
            .then((res) => {
              return res.json();
            })
            .then((res) => {
              let obj = fn.next(res);
              doThing({...obj});
            })
            .catch((err) => console.log(err));
        }
      } else {
        return resolve(value);
      }
    }
    doThing({...fn.next()});

    // res = fn.next();
    // console.log(res);
  });
}

let promise: Promise<mixed> = run(getUserRepos('jhnoa'));

promise.then((result) => {
  console.log(result);
});
