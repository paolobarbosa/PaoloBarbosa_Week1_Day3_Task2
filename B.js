// array_operations.js

const _ = require('lodash');

// a. Get All Tables Matching Storage Values
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

const matchingTables = _.flatMap(arr, (item) => {
  if (str.includes(item.storageVal)) {
    return item.table;
  }
  return [];
});

console.log('Matching Tables:');
console.log(matchingTables);

// b. Flatten an Array
const a = [['E'], ['F']];
const flattenedArray = _.flatten(a);

console.log('Flattened Array:');
console.log(flattenedArray);

// c. Combine Arrays with Duplicates Removed
const t1 = ['E', 'F'];
const t2 = ['F', 'G'];

const combinedArray = _.union(t1, t2);

console.log('Combined Array:');
console.log(combinedArray);

// d. Create a Search Box on Array of Objects
const objectsArray = [
  { name: 'John', age: 30 },
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 35 },
  // Add more objects to the array
];

function updateResults(query) {
  const filteredArray = objectsArray.filter(item =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );

  console.log('Search Results:');
  console.log(filteredArray);
}

// Simulate a search query (replace this with actual user input)
const searchQuery = 'Al';
updateResults(searchQuery);
