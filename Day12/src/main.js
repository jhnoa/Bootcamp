// @flow

import fetch from 'node-fetch';

let doFetch = (url: string): Promise<any> => {
  console.log('doFetch');
  return fetch(url);
};

let git: Promise<Response> = fetch(
  'https://api.github.com/users/mozilla/repos',
);
let subscribersPromise = git
  .then((gitHeader) => {
    return gitHeader.json();
  })
  .then((gitBody: Array<{subscribers_url: string}>) => {
    let subscribersURL: Array<string> = [];

    for (let url of gitBody) {
      subscribersURL.push(url.subscribers_url);
    }
    return subscribersURL;
  })
  .then((urlList) => {
    let urlPromise: Array<Promise<*>> = [];
    for (let url of urlList) {
      urlPromise.push(doFetch(url));
    }
    return urlPromise;
  })
  .then((urlPromise) => {
    return Promise.all(urlPromise).then((arrayContent: Array<Object>) => {
      let subscribersContentPromiseArray: Array<Object> = [];
      for (let index of arrayContent.keys()) {
        subscribersContentPromiseArray.push(arrayContent[index].json());
      }
      return subscribersContentPromiseArray;
    });
  })
  .then((subscribersContentPromiseArray) => {
    return Promise.all(subscribersContentPromiseArray).then(
      (arrayArrayContent: Array<Array<{login: string}>>) => {
        console.log(arrayArrayContent);
        let bigArray = 0;
        for (let arrayContent of arrayArrayContent) {
          bigArray += arrayContent.length;
        }
        return bigArray;
      },
    );
  })
  .then((numb) => {
    console.log(numb);
  })
  .catch((error) => {
    console.log(error);
  });
