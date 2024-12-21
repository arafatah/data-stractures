'use strict';

// Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto', 'Pasta'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};
const newLocal = 'Try again💥';
/*
const nested = [1, 2, [3, 4]];

const [a, , [c, d]] = nested;

const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...newArr);
console.log(1, 2, 7, 8, 9);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];

// Copy array
const mainMenuCopy = [...restaurant.mainMenu];

// Join 2 arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// Iterables: arrays, strings, maps, sets. NOT objects
const str = 'Jonas';
const letters = [...str, ' ', 'S.'];
console.log(letters);
console.log(...str);
// console.log(`${...str} Schmedtmann`);

const ingredients = [
  // prompt("Let's make pasta! Ingredient 1?"),
  // prompt('Ingredient 2?'),
  // prompt('Ingredient 3?'),
];
console.log(ingredients);



// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
restaurant.orderPasta(...ingredients);

// Objects
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);
*/

const italianFoods = new Set([
  'pasta',
  'gnocchi',
  'tomatoes',
  'olive oil',
  'garlic',
  'basil',
]);

const maxicanFoods = new Set([
  'tortillas',
  'beans',
  'rice',
  'tomatoes',
  'avocado',
  'garlic',
]);

const commonFood = italianFoods.intersection(maxicanFoods);
console.log('intersection', commonFood);
console.log([...commonFood]);

/*
// Destructuring
// SPAREAD, because on RIGHT side of =
const arr = [1, 2, ...[3, 4]];
console.log(arr);

// REST, because on LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

// objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// Function
const add = function (...number) {
  let sum = 0;
  for (let i = 0; i < number.length; i++) sum += number[i];
  console.log(sum);
};

add(2, 3);
add(4, 5, 6, 3, 3);

restaurant.orderPizza('Mashroom', "no room", 'khali room')
restaurant.orderPizza('Mashroom');
*/

/*
// Use ANY data type, return ANY data type, short-circuiting
console.log(undefined || "jonass")
console.log('' || "jonass")
console.log(true || 0)
console.log(false || null)

console.log(undefined || 0 || '' ||"Hello" || 23) // resutl will be Hello.


restaurant.numGuest = 23;
const guest1 = restaurant.numGuest ? restaurant.numGuest : 10; 
console.log(guest1)

const guest2 = restaurant.numGuest || 10; 
console.log(guest2)


// Practical example 
if(restaurant.orderPizza){
  restaurant.orderPizza('mashroom', 'spinach'); 
}

restaurant.orderPizza && restaurant.orderPizza('mashroom', 'whatever')



// Nullish operators 
restaurant.numGuest = 0;

const guest = restaurant.numGuest || 10; 
console.log(guest)

// Nullish: null and undefined (not 0 or '')
const guestCorrect = restaurant.numGuest ?? 10; 
console.log(guestCorrect)


const rest1= {
  name: "Capri", 
  numGuests : 20,
}

const rest2 = {
  name: "La Pizzaa", 
  owner: 'Govindo dada'
}; 

rest1.numGuests = rest1.numGuests || 10; 
rest2.numGuests = rest2.numGuests || 10; 

// OR assignment operators
// rest1.numGuests ||= 10; 
// rest2.numGuests ||= 10; 

// Nullish operators
rest1.numGuests ??= 10; 
rest2.numGuests ??= 10; 

// AND assignment operator 
// rest1.owner = rest1.owner && '<ANONYMOUS>';
// rest2.owner = rest2.owner && '<ANONYMOUS>';

rest1.owner &&= '<ANONYMOUS'
rest2.owner &&= '<ANONYMOUS'

console.log(rest1)
console.log(rest2)
*/

/*
Coding Challenge #1
We're building a football betting app (soccer for my American friends �)!
Suppose we get data from a web service about a certain game ('game' variable on 
next page). In this challenge we're gonna work with that data.
Your tasks:
1. Create one player array for each team (variables 'players1' and 
'players2')
// 2. The first player in any player array is the goalkeeper and the others are field 
players. For Bayern Munich (team 1) create one variable ('gk') with the 
goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 
field players
3. Create an array 'allPlayers' containing all players of both teams (22 
players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a 
new array ('players1Final') containing all the original team1 players plus 
'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 
'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player 
names (not an array) and prints each of them to the console, along with the 
number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which 
team is more likely to win, without using an if/else statement or the ternary 
operator.
Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. 
Then, call the function again with players from game.scored
GOOD LUCK 
*/
/*
// challenge 1
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

// const player1 = [game.players[0]];
// const player2 = [game.players[1]];

// 1. Create one player array for each team (variables 'players1' and 'players2')
const [player1, player2] = game.players;
console.log(player1, player2);

// 2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
const [gk, ...fieldPlayers] = player1;
console.log(gk, fieldPlayers);

// 3.Create an array 'allPlayers' containing all players of both teams (22 players)
const allPlayers = [...player1, ...player2];
console.log(player1, player2);

// 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
const players1Final = [...player1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

// 5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2)

// 6. Write a function ('printGoals') that receives an arbitrary number of player names (not an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
const printGoals = function(...players){
  console.log(`${players.length} goals were scored`)
}; 

printGoals('Davies', 'Muller', 'Lewandowski' ,'Kimmich')
printGoals('Davies', 'Muller');
printGoals(...game.scored)


// 7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, without using an if/else statement or the ternary operator.

// Example with ternary operator 
// const winnerTeam = team1 < team2 ? console.log('Team1 is more likely to win') : console.log('Team2 is more likely to win'); 
team1 < team2 && console.log('Team1 is more likely to win')
team1 > team2 && console.log('Team2 is more likely to win')


6.Test data for: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);

for (const [i, el] of menu.entries()) {
  // console.log(item);
  // console.log(`${item[0] +1}: ${item[1]}`);
  console.log(`${i +1}: ${el}`);
}

if (restaurant.openingHours && restaurant.openingHours.mon)
console.log(restaurant.openingHours.mon.open);

// With optional chaining
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
  // console.log(day)
  const open = restaurant.openingHours[day]?.open;
  console.log(
    `On ${day}, ${
      open !== undefined ? `We are open at ${open}` : 'We are closed'
    }`
  );
}

const openingHours = restaurant.openingHours; 

// Properties NAMES
const properties = Object.keys(openingHours);
console.log(properties)

let openStr = `we are open on ${properties.length} days`; 
for(const day of properties){
  openStr +=  ` ${day}, `
}
console.log(openStr); 

// Property VALUES
const values = Object.values(openingHours); 
console.log(values); 

const entries = Object.entries(openingHours)
console.log(entries); 

for (const [key, {open, close}] of entries){ 
  console.log(`One ${key} we are open at ${open} and close at ${close}`)
}
*/

/*
Coding Challenge #2
Let's continue with our football betting app! Keep using the 'game' variable from 
before.
Your tasks:
1. Loop over the game.scored array and print each player name to the console, 
along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already 
studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
Odd of victory Bayern Munich: 1.33
Odd of draw: 3.25
Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them 
(except for "draw"). Hint: Note how the odds and the game objects have the 
same property names �
4. Bonus: Create an object called 'scorers' which contains the names of the 
players who scored as properties, and the number of goals as the value. In this 
game, it will look like this:
{
 Gnarby: 1,
 Hummels: 1,
 Lewandowski: 2
}
GOOD LUCK �


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

// 1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
const entries = Object.entries(game.scored);
console.log(entries);

for (const i of entries) {
  console.log(`Goal ${parseInt(i[0]) + 1}: ${i[1]}`);
}

// Second method;
for (const [i, player] of game.scored.entries()) {
  console.log(`Goal ${i + 1}:${player}`);
}
// 2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
const {
  odds: { team1, x: draw, team2 },
} = game;
// console.log(team1, draw, team2);

const calcOdds = function (t1, d, t2) {
  const avrOdds = (t1 + t2 + d) / 3;
  console.log(avrOdds);
  return avrOdds;
};
calcOdds(team1, team2, draw);

// Second methode 
const odds = Object.values(game.odds); 
let  average = 0; 
for(const odd of odds) 
  average +=odd; 
  average /= odds.length; console.log(average); 

// 3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:Odd of victory Bayern Munich: 1.33
// Odd of draw: 3.25
// Odd of victory Borrussia Dortmund: 6.5
// Get the team names directly from the game object, don't hardcode them (except for "draw"). Hint: Note how the odds and the game objects have the same property names �
for(const [team, odd] of Object.entries(game.odds)){
  const teamStr = team === 'x' ? 'draw' : `Victory ${game[team]}`
  console.log(`Odd of ${teamStr}: ${odd}`)
}

// 4. Bonus: Create an object called 'scorers' which contains the names of the 
// players who scored as properties, and the number of goals as the value. In this 
// game, it will look like this:
// {
//  Gnarby: 1,
//  Hummels: 1,
//  Lewandowski: 2
// }
const scorers = {};

for (const player of game.scored) {
  // If the player is already in the scorers object, increment their count
  if (scorers[player]) {
    scorers[player]++;
  } else {
    // Otherwise, add the player to the scorers object with an initial value of 1
    scorers[player] = 1;
  }
}
// second method
for (const player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}

console.log(scorers);


// SETS in JavaScript
const orderSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);

console.log(orderSet);

console.log(new Set('Jonas'));

console.log(orderSet.size);
console.log(orderSet.has('Pizza'));
console.log(orderSet.has('Bread'));
orderSet.add('Garlic Bread');
orderSet.add('Garlic Bread');
orderSet.delete('Garlic Bread');
console.log(orderSet);


const rest = new Map();
rest.set('name', 'Mayer dua hotel');
rest.set(1, 'UK');
rest.set(2, 'California');
console.log(rest.set(2, 'Lisbon, Portugal'));

rest
  .set('categories', [
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
  ])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :D')
  .set(false, 'We are closed');

console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get('categories'));

const time = 21;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

const arr = [1, 3];
rest.set(arr, 'Test');
rest.set(document.querySelector('h1'), 'Heading');
console.log(rest);
console.log(rest.size);

console.log(rest.get(arr));


const question = new Map([
  ['Question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct 🎉'],
  [false, 'Try again 📌'],
]);

const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

console.log(question);
console.log(Object.entries(openingHours));

const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}

// const answer = Number(prompt('Your Answer'));
const answer = 3; 
console.log(answer);

// If correct === answer; then it will output 3; and that's means a true value and question.get(true) : value === true, so it will pring. Correct otherwise Try again.
console.log(question.get(question.get('correct') === answer));

// Convert Map to an array.
console.log(...question);
*/

// Challenge 3
/*
Coding Challenge #3
Let's continue with our football betting app! This time, we have a map called 
'gameEvents' (see below) with a log of the events that happened during the 
game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).
Your tasks:
1. Create an array 'events' of the different game events that happened (no 
duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 
was unfair. So remove this event from the game events log.
3. Compute and log the following string to the console: "An event happened, on 
average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over 'gameEvents' and log each element to the console, marking 
whether it's in the first half or second half (after 45 min) of the game, like this:
[FIRST HALF] 17: ⚽ GOAL
GOOD LUCK */
/*
const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '� Substitution'],
  [47, '⚽ GOAL'],
  [61, '� Substitution'],
  [64, '� Yellow card'],
  [69, '� Red card'],
  [70, '� Substitution'],
  [72, '� Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '� Yellow card'],
]);

// 1. Create an array 'events' of the different game events that happened (no duplicates)
const events = new Set(gameEvents.values());
console.log(events);

// 2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
gameEvents.delete(64);
console.log(gameEvents);

// 3. Compute and log the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
console.log(
  `An event happened, on average, every ${90 / gameEvents.size} minutes`
);

// 4. Loop over 'gameEvents' and log each element to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
// [FIRST HALF] 17: ⚽ GOAL

for (const [min, event] of gameEvents) {
  const half = min < 45 ? 'FIRST' : 'SECOND';
  console.log(`[${half} HALF] ${min}: ${event}`);
}


// Working With Strings - Part 1
const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B737'[0]);

console.log(airline.length);
console.log('B737'.length);

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('portugal'));

console.log(airline.slice(4));
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  // B and E is middle seat
  const s = seat.slice(-1);
  if (s === 'B' || s === 'C') console.log('You got the middle seat');
  else console.log('You got Lucky');
};

checkMiddleSeat('11B');
checkMiddleSeat('11D');
checkMiddleSeat('11C');

console.log(new String('jonas'));
console.log(typeof new String('jonas'));

console.log(typeof new String('jonas').slice(1));

// We can split the string and carry them on an array with the split method. EX:
console.log('a+very+nice+string'.split('+'));

console.log('Arafat Howlader'.split(' '));

const [firstName, lastName] = 'Arafat Howlader'.split(' ');

// Join method is oposite of split method. EX.

// const [firstName, lastName] = 'Arafat Howlader'.split(' ');
const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');

// console.log(newName);

// --Mr. Arafat Howlader.

////////////////////////////
const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];
  
  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
};

capitalizeName('jessica is my name');
capitalizeName('and me myself arafat');

// Padding
const message = 'Go to gate 23';
console.log(message.padStart(20, '-').padEnd(30, '-'));
console.log('jonas'.padStart(20, '+').padEnd(30, '+'));

const makeMasterCard = function (number) {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};

console.log(makeMasterCard(564524444144414143));
console.log(makeMasterCard('545645153451534153154'));


// Repeat 
const message2 = 'Due to bad weather... All departues delays... '
console.log(message2.repeat(4))
*/

/*
Coding Challenge #4
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.
The input will come from a textarea inserted into the DOM (see code below to 
insert the elements), and conversion will happen when the button is pressed.
Test data (pasted to textarea, including spaces):
underscore_case
first_name
Some_Variable
 calculate_AGE
delayed_departure
Should produce this output (5 separate console.log outputs):
underscoreCase ✅
firstName ✅✅
someVariable ✅✅✅
calculateAge ✅✅✅✅
delayedDeparture ✅✅✅✅✅
Hints:
§ Remember which character defines a new line in the textarea �
§ The solution only needs to work for a variable made out of 2 words, like a_b
§ Start without worrying about the ✅. Tackle that only after you have the variable 
name conversion working �
§ This challenge is difficult on purpose, so start watching the solution in case 
you're stuck. Then pause and continue!
Afterwards, test with your own test data!
GOOD LUCK �


document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const rows = text.split('\n');
  // console.log(rows);

  for (const [i, row] of rows.entries()) {
    const [first, last] = row.toLowerCase().trim().split('_');

    const output = `${first}${last.replace(last[0], last[0].toUpperCase())}`;
    console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
  }
});

// for (const [i, row] of rows.entries()) {
//   const [first, second] = row.toLowerCase().trim().split('_');

//   const output = `${first}${second.replace(
//     second[0],
//     second[0].toUpperCase()
//   )}`;
//   console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
// }
*/

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const getCode = str => str.slice(0, 3).toUpperCase();
// console.log(flights.split('+'))
for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  const output = `${type.startsWith('_Delayed') ? '🔴' : ''}${type.replaceAll(
    '_',
    ' '
  )} From ${getCode(from)} TO ${getCode(to)} (${time.replace(
    ':',
    'h'
  )})`.padStart(35);
  console.log(output);
}
