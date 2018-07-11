// @flow

type EventType = Map<string, Map<number, Function>>;
export default class EventEmiter {
  array: EventType = new Map();
  id = 0;
  addListener(key: string, value: Function) {
    let listeners = this.array.get(key);
    if (!listeners) {
      listeners = new Map();
      this.array.set(key, listeners);
    }
    listeners.set(this.id, value);
    this.id++;
  }
  emit(key: string) {
    let listeners = this.array.get(key);
    if (listeners) {
      for (let [id, event] of listeners) {
        event();
      }
    }
  }
  remove(id: number) {
    for (let [, event] of this.array) {
      if (event.get(id)) {
        event.delete(id);
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

event.remove(2);

event.emit('Call Incoming');
