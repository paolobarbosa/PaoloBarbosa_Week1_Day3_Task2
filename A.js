const _ = require('lodash');

const arrOne = [{
    id: 20,
    name: 'alex'
}, {
    id: 30,
    name: 'alina'
}];

const arrTwo = [{
    id: 40,
    name: 'hello'
}, {
    id: 30,
    name: 'world'
}];

// Define a custom comparator function that compares objects based on their 'id' property.
const customComparator = (obj1, obj2) => obj1.id === obj2.id;

// Find the symmetric difference between arrOne and arrTwo using the custom comparator.
const symmetricDifference = _.xorWith(arrOne, arrTwo, customComparator);

console.log('Symmetric Difference:');
console.log(symmetricDifference);

// Find the elements from arrOne that have the same 'id' as the elements in arrTwo.
const recalls = _.intersectionWith(arrOne, arrTwo, customComparator);

console.log('Recalls:');
console.log(recalls);
