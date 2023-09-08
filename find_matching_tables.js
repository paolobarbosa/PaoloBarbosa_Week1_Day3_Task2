const _ = require('lodash');

const str = ['u', 'ec'];
const arr = [
  {
    storageVal: 'u',
    table: ['E', 'F']
  },
  {
    storageVal: 'data',
    table: ['E', 'F']
  },
  {
    storageVal: 'ec',
    table: ['E']
  }
];

// Use _.flatMap to collect the tables based on matching storageVal
const matchingTables = _.flatMap(arr, (item) => {
  if (str.includes(item.storageVal)) {
    return item.table;
  }
  return [];
});

console.log('Matching Tables:');
console.log(matchingTables);
