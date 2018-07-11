// @flow

type EventType = Map<string, Set<Function>>;
export default class EventEmiter {
  array: EventType = new Map();

  addListener(key: string, value: Function) {
    let listeners = this.array.get(key);
    if (!listeners) {
      listeners = new Set();
      this.array.set(key, listeners);
    }
    listeners.add(value);
  }
  emit(key: string) {
    let listeners = this.array.get(key);
    if (listeners) {
      for (let event of listeners) {
        event();
      }
    }
  }
}

let event = new EventEmiter();

event.addListener('Call Incoming', () => {
  console.log('swert');
});
event.addListener('Call Incoming', () => {
  console.log('Hi Owner, Call Incoming...');
});
event.addListener('Call Incoming', () => {
  console.log('Hi Owner, Call ...');
});
event.addListener('Call Incoming', () => {
  console.log('Hi Owner, ...');
});

event.emit('Call Incoming');
