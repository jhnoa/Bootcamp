// @flow

// type Call = {
//   type: 'Incoming' | 'Outgoing' | 'Missed',
//   phoneNumber: string,
//   timestamp: string,
// };

function createCallLog() {
  let callLog = [];
  return {
    add: (type, phoneNumber) => {
      let now = new Date('02/22/2001');
      callLog.push({type, phoneNumber, now});
    },
    recentCall: () => callLog[callLog.length - 1],
  };
}

let log = createCallLog();
log.add('Incoming', '081617353000');
console.log(log.recentCall());
