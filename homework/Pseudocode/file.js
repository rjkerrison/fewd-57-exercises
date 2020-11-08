const apples = 17
const oranges = 5
document.getElementById('orange-apple-sum').innerText = apples + oranges

const winOccurences = 97
const totalAttempts = 300
document.getElementById('leroy-odds').innerText = winOccurences / totalAttempts

const nintendoPrice = 111
const numberOfDsConsoles = 6
document.getElementById('total-price').innerText = nintendoPrice * numberOfDsConsoles

const firstFruit = 'oranges'
const secondFruit = 'lemons'
document.getElementById('st-clements').innerText = firstFruit + secondFruit

const currentClass = 'FEWD 57'
const message = `Hello, ${currentClass}!`
document.getElementById('hello').innerText = message

// ###########################################################
// ######################## Variables ########################
// ###########################################################

// Initialize a variable, it automatically gets typed as a string
let color = "red";

let banana = "red";

// Variables can type switch, but you DONT WANT TO DO THIS
let secondColor = "blue";
secondColor = 17;

// Variables must start with a letter, underscore (_) or dollar sign ($) - any alphanumerics are OK after that.
let vegetable = "lettuce";
let _veggie = "celery";
let $veg = "onion";

// Use camelCaseNotation (first letter of first word is small) or PascalNotation (first letter of every word is big) for variables
// You should use camelCase
let theDarkSideOfTheMoon = "A Very Fine Album"; // camelCase
let StarWars = "A long time ago, ..."; // Pascal

// Don't use snake_case for variables –
// it's just not the JavaScript convention
let director_of_the_film = 'David R Ellis'; // snake_case (don't do this!)

// ##################################################################
// ######################## Number Variables ########################
// ##################################################################

// Five types of variables are always primitive variables - stored in the quick memory stack
let aBand = "The Specials"; // string
let VEDay = 1945; 		// number

console.log(typeof coinToss);

// Null and undefined are basically the same: both just hold a meaningless value in a variable
let feelingPostBreakUp = null; 	// null
let goodIndoorPlant = "Now it's defined"; 			// undefined
console.log(goodIndoorPlant);

// You can call 'typeof' to get the variable type
const WWIIDate = 1939;
console.log(typeof WWIIDate); 		// returns "Number"

// You can also call 'isNaN' to determine if something is a number or not
let numberOfBrainCells = 1.98e16;
console.log (isNaN (numberOfBrainCells));

// Decimals can be stored as well, called "floating point" numbers
let averageGPA = 4.3; 			// floating point just happens when you add in a decimal
let bigNumber = 3.175e8; 	// basically 3.175 x 10^8



// ##################################################################
// ######################## String Variables ########################
// ##################################################################

const greetings = "Hola!"; // string can contain a whole mix of stuff
const architecturalStyle = 'Art Deco'; // use single quotes, they work too! JS won't care!
const goodQuestion = "37";

// You can combine strings together with concatenation or template literals
// concatenation
console.log("My favorite architectural style is " + architecturalStyle);
// template literals - note the use of backticks for the surrounding quote marks!
console.log(`My favorite architectural style is ${architecturalStyle}`);

// If you want to use actual quote marks inside your string, or other symbols that would otherwise have JS meaning to them, you'll have to escape those characters with \
// Escaping stuff is still pretty laborious ( \n = new line, \t = tab, \' = single quote \" = double quote)
const declarationOfIndependence = "\"We hold these truths to be self-evident, that all men are created equal, \n that they are endowed by their Creator with certain unalienable Rights, that among these are Life, Liberty and the pursuit of Happiness.\""

// ###########################################################
// ######################## Functions ########################
// ###########################################################

// Super basic function
// Make the console log happen by calling the function
// Beginner mistake is not calling the function.

const monday = "Apple a day on Mondays people, don\'t forget."

function fruitOfTheDay() {
  console.log(monday);
}
fruitOfTheDay();


// Function that combines or concatenates two strings together
function superBasic() {
  const greeting = "Hola amigos. ";
  const greetingResponse = "Como estas?";
  console.log(greeting + greetingResponse);
}
superBasic();


// Reusable function with conditional
// Define variable, setup function, pass variable in, use conditional for output
// This is more advanced than we are going into during the first lesson but let it wash over you a bit

function kittyHawk(year) {
  if (year >= 1903) {
    console.log("We're airborne");
  }
  else {
    console.log("Let us dream...");
  }
}
kittyHawk(1909);


// #######################################################################
// ######################## Output to the Browser ########################
// #######################################################################

// Basic JS number and string output
// document.write just dumps things into the browser after the rest of the page has been rendered
// very crude way to get something to appear in the browser, good for testing and not much else
document.write("You can make your browser print out text easily..");
document.write(10*10);  // output 100
document.write(1902-567); // output 1335
document.write(49/7); // output 7

// console.log is a slightly more elegant way to output to the browser
// It places output outside of the page itself into the console instead (use DevTools to see this)
console.log((49/7)-4); // output 3