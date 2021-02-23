console.log('destructuring');

// const person = {
//     name: 'Joe',
//     location: {
//         city: 'cornwall',
//         temp: -20
//     },
//     hair: 'brown',
//     age: 22
// }

// const {name, age, location} = person

// console.log(`${name} is ${age}.`);

// const book = {
//     title: 'Ego is the enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'penguin'
//     }
// }

// const { name:publisherName = 'Self Published' } = book.publisher;

// console.log(publisherName); //Penguin, Self Published


// Array destructuring

const address = ['666 devils lane', 'Cornwall', 'Ontario', 'zippy'];

const [street, city, state, zip ] = address;


console.log(`You are in ${street} ${city} ${state}`);

const item = ['Coffee', '1.00', '2.00', '2.75'];

const [itemName, , md] = item;

console.log(`a medium ${itemName} costs ${md}`);