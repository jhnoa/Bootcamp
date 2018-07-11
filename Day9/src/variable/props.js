// @flow
import type {Props} from '../types/Props';

let initialProps: Props = {
  ToDoList: [
    {
      id: 432,
      text: 'Do This',
      isDone: false,
    },
    {
      id: 123,
      text: 'Do That',
      isDone: true,
    },
  ],
  ToDoText: '',
  ToDoFilter: '',
};

export default initialProps;
