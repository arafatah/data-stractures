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
  orderPizza: function(mainIngredient, ...otherIngredients){
    console.log(mainIngredient);
    console.log(otherIngredients)
  }
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
*/

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