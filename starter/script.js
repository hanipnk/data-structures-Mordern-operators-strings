'use strict';

// Data needed for a later exercise
//const flights =
//'_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  //openingHours : openingHours <--- Old way
  //ES6 enhanced object literals
  openingHours,

  // order: function (starterIndex, mainIndex) {
  //   return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  // },
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  // I can remove 'function' with ES6 enhanced object literals

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with${ing1},${ing2} and ${ing3}`);
  },
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

// Coding Challenge #4
// document.body.append(document.createElement('textarea'));
// document.body.append(document.createElement('button'));

// document.querySelector('button').addEventListener('click', function () {
//   const text = document.querySelector('textarea').value;
//   //console.log(text);
//   const rows = text.split('\n');
//

//
//   for (const [i, row] of rows.entries()) {
//     const [first, second] = row.toLowerCase().trim().split('_');
//     //console.log(first, second);
//     const output = `${first}${second.replace(
//       second[0],
//       second[0].toUpperCase()
//     )}`;
//     console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
//   }
// });

// document.body.append(document.createElement('textarea'));
// document.body.append(document.createElement('button'));

// document.querySelector('button').addEventListener('click', function () {
//   const text = document.querySelector('textarea').value;
//   //console.log(text);
//   const rows = text.split('\n');
//   //console.log(rows);
//   for (const [i, row] of rows.entries()) {
//     console.log(i, row);
//     const [first, second] = row.toLowerCase().trim().split('_');
//     const output = `${first}${second[0].toUpperCase()}${second.slice(1)}`;
//     console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
//   }
// });

// document.body.append(document.createElement('textarea'));
// document.body.append(document.createElement('button'));

// document.querySelector('button').addEventListener('click', function () {
//   const text = document.querySelector('textarea').value;
//   const rows = text.split('\n');
//   for (const [i, row] of rows.entries()) {
//     //console.log(i, row);
//     const [first, second] = row.toLowerCase().trim().split('_');
//     const output = `${first}${second[0].toUpperCase() + second.slice(1)}`;
//     console.log(output.padEnd(20), '✅'.repeat(i + 1));
//   }
// });

// document.body.append(document.createElement('textarea'));
// document.body.append(document.createElement('button'));

// document.querySelector('button').addEventListener('click', function () {
//   const text = document.querySelector('textarea').value;
//   const rows = text.split('\n');
//   for (const [i, row] of rows.entries()) {
//     const [first, second] = row.toLowerCase().trim().split('_');
//     const output = `${first}${second[0].toUpperCase() + second.slice(1)}`;
//     console.log(output.padEnd(20), '✅'.repeat(i + 1));
//   }
// });

/*
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

const cutStr = str => str.slice(0, 3).toLocaleUpperCase();
for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  const output = `${type.startsWith('_Delayed') ? '🔴' : ''} ${type.replaceAll(
    '_',
    ' '
  )} from ${cutStr(from)} to ${cutStr(to)} (${time.replace(
    ':',
    'h'
  )})`.padStart(50);
  console.log(output);
}

// const getCode = str => str.slice(0, 3).toUpperCase();

// for (const flight of flights.split('+')) {
//   const [type, from, to, time] = flight.split(';');
//   const output = `${type.startsWith('_Delayed') ? '🔴' : ''}${type.replaceAll(
//     '_',
//     ' '
//   )} from ${getCode(from)} to ${getCode(to)} (${time.replace(
//     ':',
//     'h'
//   )})`.padStart(50);
//   console.log(output);
// }

*/

/*
// Split and Join
console.log('a+very+nice+string'.split('+'));
console.log('Jonas Schmedtmann'.split(' '));

const [firstName, lastName] = 'Jonas Schmedtmann'.split(' ');

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(' ');
  //console.log(names);  // --> ["jessica", "ann", "smith", "davis"]
  const namesUpper = [];
  for (const n of names) {
    //namesUpper.push(n[0].toUpperCase() + n.slice(1));    ----> same result as one below
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  //console.log(namesUpper); // ---> ["Jessica", "Ann", "Smith", "Davis"]
  console.log(namesUpper.join(' '));
};
capitalizeName('jessica ann smith davis');
capitalizeName('jonas schmedtmann');

// Padding
const message = 'Go to gate 23!';
console.log(message.padStart(20, '+').padEnd(30, '+')); // ---> 25 = 'length of strings' , '+' = 'adding '+' to fill up with'
console.log('Jonas'.padStart(20, '+').padEnd(30, '+'));

const maskCreditCard = function (number) {
  const str = number + ''; // if one of the operands of plus sign is a string, it will convert all the operands to a string
  //const str = String(number) ---> same as one above
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};
console.log(maskCreditCard(456789123));
console.log(maskCreditCard(43378463864647384));
console.log(maskCreditCard('45643213654654654564'));

// Repeat
const message2 = 'Bad weather... All Departures Delayed... ';
console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line${'🔥'.repeat(n)}`);
};
planesInLine(5);
planesInLine(3);
planesInLine(12);

*/

/*
// Working with Strings - Part 2
const airline = 'TAP Air Portugal';
console.log(airline.toLowerCase());
console.log(airline.toUpperCase());
console.log('jonas'.toUpperCase());

//Fix capitalization in name
const passenger = 'jOnAS'; // Jonas
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

const correctNames = function (names) {
  const lowerName = names.toLowerCase();
  const lastName =
    lowerName[0].toUpperCase() + lowerName.slice(1, lowerName.indexOf(',')); //----> does not incluse ','
  const firstName = lowerName.slice(lowerName.indexOf(','));
  const capfirstName = firstName[1].toUpperCase() + firstName.slice(2);
  console.log(`${lastName},${capfirstName}`);

  //return console.log(lastName + capfirstName);
  // firstName = firstName[0].toUpperCase;
  //console.log(lastName,firstName);
  //return console.log(finalNames);
};
correctNames('park,heeyoung');
correctNames('o,woong');
correctNames('park,seoju');

// Comparing email
const email = 'hello@jonas.io';
const loginEmail = '  Hello@Jonas.Io \n';

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim(); //  ----> removing the spaces and '\'
// console.log(trimmedEmail);

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);

// Replacing
const priceGB = '288,97$';
const priceUS = priceGB.replace('$', '&').replace(',', '.');
console.log(priceUS);

const announcement =
  'All passengers come to boarding door 23. Boarding door 23!';

console.log(announcement.replace('door', 'gate'));
console.log(announcement.replaceAll('door', 'gate'));

console.log(announcement.replace(/door/g, 'gate')); // 'g' stands for global to change all 'door'occurance to gate

// Booleans
const plane = 'Airbus A320neo';
console.log(plane.includes('A320'));
console.log(plane.includes('Boeing'));
console.log(plane.startsWith('Ai'));

if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
  console.log('Part of the NEW Airbus family');
}

//Practice exercise
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are NOT allowed on board');
  } else {
    console.log('Welcome on board');
  }
};
checkBaggage('I have a laptop, some Food and a pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');

*/

/*
//Working with Strings - Part1
const airline = `TAP Air Portugal`;
const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('8737'[0]);

console.log(airline.length);
console.log('B737'.length);

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('Portugal'));

console.log(airline.slice(4));
console.log(airline.slice(4, 7)); // length of string will be 'end -' 'beginning' = '3'
// it contains 4 to 6  DOES NOT include 7

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));
console.log(airline.slice(-1));

const checkMiddleSeat = function (seat) {
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') console.log('You got the middle seat');
  else console.log('You got lucky');
};
//B and E are middle seats
checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

console.log(new String('jonas'));
console.log(typeof new String('jonas')); //----> Object
console.log(typeof new String('jonas').slice(1)); // --->'onas'

*/

/*

//Coding Challenge #3

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

// 1)
const events = [...new Set(gameEvents.values())];
console.log(events);

// 2)

gameEvents.delete(64);
console.log(gameEvents);

// 3)

const average = 90 / gameEvents.size;
console.log(`An event happened, on average, every ${average} mimutes`);

const time = [...gameEvents.keys()].pop(); // ---> 'pop()' to only retrieve last elements of the array which is '92'
console.log(time);
console.log(
  `An event happened, on average, every ${time / gameEvents.size} mimutes`
);

// 4)
for (const [key, value] of gameEvents) {
  key <= 45 && console.log(`[First Half]${key}: ${value}`);
  key >= 45 && console.log(`[Second Half]${key}: ${value}`);
}

for (const [min, event] of gameEvents) {
  const half = min <= 45 ? `FIRST` : `SECOND`;
  console.log(`[${half} HALF]${min} : ${event}`);
}

*/
/*

// Map : Iteration
const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct!'],
  [false, 'Try again!'],
]);
console.log(question);

//Convert object to map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

//Quiz app
console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}:${value}`);
}
//const answer = Number(prompt('Your answer'));
const answer = 3;
console.log(answer);
console.log(question.get(question.get('correct') === answer));
// if (answer === 3) console.log(question.get(true));
// else console.log(question.get(false));

//Convert Map to Array
console.log([...question]);
//console.log(question.entries());  => same as 'console.log([...question]);'
console.log([...question.keys()]);
console.log([...question.values()]);

*/

/*
//Maaps : Fundamentals
const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
console.log(rest.set(2, 'Lisbon, Portugal'));

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open')
  .set(false, 'We are closed');

console.log(rest.get('name'));
console.log(rest.get(true));
//console.log(rest.get('1'));  ->'undefined' because 'data type' matters in map to call out.
console.log(rest.get(1));

const time = 21;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('categories'));
rest.delete(2);

const arr = [1, 2];
rest.set(arr, 'Test');
rest.set(document.querySelector('h1'), 'Heading');
//rest.clear();
console.log(rest.size);

console.log(rest.get(arr));

*/

/*
// Sets
const ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);

console.log(ordersSet);

console.log(new Set('Jonas'));

console.log(ordersSet.size);
console.log(ordersSet.has('Pizza'));
console.log(ordersSet.has('Bread'));
ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread');
ordersSet.delete('Risotto');
//ordersSet.clear();
console.log(ordersSet);

for (const order of ordersSet) console.log(order);

// Example

const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);
console.log(
  new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
);

console.log(new Set('HeeyoungPark').size);
*/

/*
// Property Names
const properties = Object.keys(openingHours); // keys = properties in objects
console.log(properties); // -> (3) ["thu", "fri", "sat"]

let openStr = `we are open on ${properties.length} days: `;
for (const day of properties) {
  openStr = openStr + `${day}, `;
}
console.log(openStr);

//Property VALUES
const values = Object.values(openingHours);
console.log(values);

// Entire Object
const entries = Object.entries(openingHours);
console.log(entries);

for (const [day, { open, close }] of entries) {
  console.log(`On ${day} we open at ${open} and close at ${close}`);
}
*/
/*

//Optional Chaining

// I want to know if ( 'a' && 'b' ) is exist, if yes - > console.log('c')
if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);

//WITH optional chaining  (?.)
console.log(restaurant.openingHours.mon?.open);
// If before '?.' exists, then excute after '?.'
// If before '?.' does not exist, 'undefined' will be returned immediately
console.log(restaurant.openingHours?.mon?.open);

// Example of optional chaining  (with Nullish operator '??' )
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`on ${day}, we open at ${open}`);
}

// Optional chaining (?.) in Methods

console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');
// if before '?.' exist, excute after '?.'
// if before '?.' does not exist return after '??' (if it is null or undefined NOT '0')

// Optional chaining (?.) in Arrays
const users = [
  {
    name: 'Jonas',
    email: 'hello@jonas.io',
  },
];
//const users = [];
console.log(users[0]?.name ?? 'User array empty');

// without using Optional chaining (?.)
if (users.length > 0) console.log(users[0].name);
else console.log('user array empty');

*/

// 'For of loop'

/*

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
for (const item of menu) console.log(item);

for (const [i, el] of menu.entries()) {
  // to see the current index of each elements
  // Destructuring of the array  'const [i, el]'
  console.log(i);
  console.log(`${i + 1}:${el}`);
}

console.log([...menu.entries()]);

*/

/*

restaurant.numGuests = 0; // since '0' is faulsy value, result will be '10'

const guests = restaurant.numGuests || 10;
console.log(guests);

// Nullish -> null and undefined (NOT 0 or '')
// Only null and undefined would be considered as faulsy values
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);



console.log('-------------OR--------------');
//Use ANY data type, return ANY data type, short-circuiting

// short-circuiting -> if the first value is a truthy value, i will immediately return the first value
console.log(3 || 'Jonas');
console.log('' || 'Jonas');
console.log(true || 0);
console.log(undefined || null);
// even though 'null' is a faulty value since undefined is also a faulty value and the first value,
// it just immediately return the second value.

console.log(undefined || 0 || '' || 'Hello' || 23 || null);
//it returns the first truthy value in this chain of OR operations. ('Hello')

restaurant.numGuests = 0; // since '0' is faulsy value, result will be '10'
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log('-------------AND--------------');

console.log(0 && 'Jonas'); // result of '0'
console.log(7 && 'Jonas'); // 'Jonas'
console.log('Hello' && 23 && null && 'jonas'); //null
// every value has to bo the truthy values with'&&'. it stops curcuiting when faulsy value comes 'null'

// Practical example
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}
// if restaurant.orderPizza is exist, return ->restaurant.orderPizza('mushrooms', 'spinach');

restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');
// if first operand is true (restaurant.orderPizza), execute code in the second operand -> restaurant.orderPizza('mushrooms', 'spinach');


/////////////////////////////////////////////////////////////////////////////////////////////

// 1) Destructuring (Arrays)
//SPREAD, because it's on the RIGHT side of '='
const arr = [1, 2, ...[3, 4]];

// REST, because it's LEFT dife of '='
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

//Using SPREAD and REST operator at the same time

const [pizza, , risotto, ...otherFood] = [
  // have to create new variable names and followed by the order of arrays (in arrays)
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

// Destructuring (Objects)
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// 2) Functions

const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum = sum + numbers[i];
  console.log(sum);
};

add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const x = [23, 5, 7];
add(...x); // SPREAD operator

restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
restaurant.orderPizza('mushrooms');



// Spread Operator (similar to destructuring but does not create new variables.)

const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr]; // taking all the elements out of the array and write it manually
//const newArr1 = [1, 2, arr]; // without '...' (3) [1, 2, Array(3)]
console.log(newArr);
//console.log(newArr1);

console.log(...newArr); // Same result of the one below
console.log(1, 2, 7, 8, 9);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

//Copy array

const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);

//Join 2 arrays

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

//Iterables: arrays, strings, maps, sets, NOT objects
const str = 'Jonas';
const letters = [...str, ' ', 'S.'];
console.log(letters);
console.log(...str);
//console.log(`${...str} Schmedtmann`);  // it will not be working => Uncaught SyntaxError: Unexpected token '...'
//Multiple values separated by a comma are usually only expected when we pass arguments into a function, or when we build a new array.

//Real-world example
const ingredients = [
  // prompt("Let's make pasta! Ingredient 1?"),
  // prompt('Ingredient2?'),
  // prompt('Ingredient3?'),
];
console.log(ingredients);

restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]); // old way
restaurant.orderPasta(...ingredients); // with spread operator

//Objects

const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };

console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);



// Destructuring Objects

restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del sole,21',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({ address: 'Via del sole,21', starterIndex: 1 });

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

// Changing the property names to others
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// Setting Default values and changing the property names together

const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

//Mutating Variables

let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b);

// Nested Objects

const {
  fri: { open: o, close: c },
} = openingHours;

console.log(o, c);


// Destructuring Arrays

const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

//Switching Variables

// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);

//console.log(restaurant.order(2, 0));

//Receive 2 return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

//Nested destructuring

const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);
const [i, , [j, k]] = nested;
console.log(i, j, k);

//Default values

const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);

*/

/*
// Coding Challenge # 1

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const [players1, players2] = game.players;

console.log(players1, players2);

const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

const [gk2, ...fieldPlayers2] = players2;
console.log(gk2, fieldPlayers2);

const allplayers = [...players1, ...players2];
console.log(allplayers);

const players1Final = [...players1, 'Thiago', 'Coutingo', 'Perisic'];
console.log(players1Final);

const { team1 } = game.odds;
console.log(team1);

const { team2 } = game.odds;
console.log(team2);

const { x: draw } = game.odds;
console.log(draw);

// const {                                               <- solution
//   odds: { team1, x: draw, team2 },
// } = game;
// console.log(team1, draw, team2);

const printGoals = function (...playerNames) {
  const total = playerNames.length;
  for (let i = 0; i < playerNames.length; i++) {
    console.log(playerNames[i]);
  }
  console.log(total);
};
printGoals(...game.scored);

team1 < team2 && console.log('Team 1 is more likely to win');
team1 > team2 && console.log('Team 1 is more likely to win');

*/

/*

// Coding Challenge #2

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
//const entry = Object.entries(game.scored);
//console.log(entry);
// for (const [goals, player] of entry) {
//   console.log(goals);
//   const numgoals = Number(goals);
//   console.log(`Goal ${numgoals + 1} : ${player}`);
// }

for (const [goals, player] of game.scored.entries()) {
  // if I want to get 'index' of 'game.scored' I use 'entries()'
  console.log(` Goal ${goals + 1} : ${player}`);
}

const odds = Object.values(game.odds);
let average = 0;
for (const odd of odds) {
  average = average + odd;
}
average = average / odds.length;
console.log(average);

const oddaverage = Object.values(game.odds);
console.log(oddaverage);

let sum = 0;
for (let i = 0; i < oddaverage.length; i++) {
  sum = sum + oddaverage[i];
}
sum = sum / oddaverage.length;

console.log(sum);

// const eachodd = Object.entries(game.odds);
// console.log(eachodd);

// for (const [team, point] of eachodd) {
//   console.log(`Odd of victory ${team}, ${point}`);
// }

for (const [team, odd] of Object.entries(game.odds)) {
  //console.log(team, odd);
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`; // '[]' for variable name
  console.log(`Odd of ${teamStr} : ${odd}`);
}

const scorers = {}; // how to add elements into the empty object? -> objectName.key(propertyname) = value
//scorers.id = 1;
//console.log(scorers);
for (const player of game.scored) {
  //console.log(player);
  scorers[player] ? scorers[player]++ : (scorers[player] = 1); // I use '[]' for variables otherwise '.'
}
console.log(scorers);

// BONUS
// So the solution is to loop over the array, and add the array elements as object properties, and then increase the count as we encounter a new occurence of a certain element
// const scorers = {};
// for (const player of game.scored) {
//   scorers[player] ? scorers[player]++ : (scorers[player] = 1);
// }


*/
