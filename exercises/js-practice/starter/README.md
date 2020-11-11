# JavaScript Practice

Work through the following problems.

You can also find these described in `./script.js`.

Remember: 

- you can always check for more documentation online
- `console.log` any variable whose value you might like to check

## 1: `console.log`

Use `console.log` to check your JS file is loaded correctly.

## 2: Creating variables

- Create a variable called `myVar` and give it the value `"amazing"`.
- Log the value of your variable to the console
- Add a second console log below the first: `console.log(typeof(myVar))` and note the result
- Change the value in your `myVar` variable and note how the `typeof(myVar)` changes

## 3: working with variables and types

- Create four variables and name them with `camelCase` names
- Give each one a different value
- Give each one a _different_ data type (string, number, boolean or array)
- Log each variable to the console

## 4: Working with arrays

- Create an array for a shoppingList
- Add 3-4 items into the array
- Log your array to the console
- Log the number of items in your array to the console
- Use the `.push()` array method to add a new item to your shopping list
- Log the new array to the console

## 5: working with functions

- Create a function that logs a greeting to the console
- Your function should accept one parameter for a persons name
- Your function should log to the console and display a greeting message and the name
- Call your function and pass in a persons name and check the console

## 6: working with the DOM - single elements

- use `getElementById` to find the `<h1>` element on the page
- use JS to add the class `"fancy"` to the element
- use JS to change the `innerText` of the `<h1> to something other than "Javascript Practice"

## 7: working with the DOM - multiple elements

- use querySelectorAll to find the p elements on the page
- use JS to add the class "fancy" to EACH element (you will need a loop!)

## 8: working with the DOM - events

- create a function called `sendHelp`
- add the following line to the body of the function: `window.location.href = 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference';`
- use `getElementById` or `querySelector` to find the help button
- add a 'click' event listener to the button and pass the name of your sendHelp function
- click the button and you should be redirected to another website

## 9: working with the DOM - multipe elements and events

- toggle the "fancy" class on any paragraph when you click on it

- Think of the 3 E's - element, event, execution
- Think about how you will find all the `<p>` tags (which document method can you use?)
- Think about how you will add the event listener to each one of the `<p>` tags
- Think about passing the event object into your handler function
- Use `event.target` inside your handler function for a reference to the element that was clicked
