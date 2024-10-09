'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

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
*/

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