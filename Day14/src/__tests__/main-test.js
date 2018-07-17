// @flow

import sleep from '../main';

it('should resolve', (done) => {
  let time = Date.now();
  let wait = sleep(500);
  wait.then(() => {
    expect(Date.now() - time).toBeGreaterThanOrEqual(500);
    done();
  });
});
