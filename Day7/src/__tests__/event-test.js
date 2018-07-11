import event from '../event';
import type {State} from '../types/state';

it('should return 0', () => {
  let state: State = {number: 2};
  let a: State = event['inc'](state);
  expect(a).toEqual({number: 3});
});
