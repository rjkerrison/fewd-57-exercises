# Homework 4

Well done on getting the modal working.
Your code is clear and easy to understand.

Below are some tips for better practices.

## Use `const`, not `var`

In recent versions of JavaScript,
`var` has been joined by two other
variable declaration keywords: `const` and `let`.

If you're declaring a variable which you don't want to replace later,
you should use `const` both to indicate this to other developers,
and to prevent accidental updates from occuring.

```js
var modal = document.getElementById("myModal");
modal = 'something else' // this is allowed
const anotherModal = document.getElementById("myModal");
anotherModal = 'another something else' // this will error, so preventing accidental updates
```

## Add event listeners

Instead of using inline events like `.onclick`,
it's better to use `addEventListener('click', …)`.

```js
btn.onclick = function() {
  modal.style.display = "block";
}

btn.addEventListener('click', function() {
  modal.style.display = "block";
})
```

One advantage which this has is that it allows for attaching multiple
listeners to the same event,
whereas `btn.onclick = someOtherFunction` would override the previous function you set.

## Add classes instead of modifying `style`

Setting `modal.style.display = "none";` overrides the style attribute directly,
completely ignoring your CSS.

A more versatile approach for style changes led by javascript is to
add or remove classes.

```js
span.onclick = function() {
  modal.classList.add('hidden')
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.classList.remove('hidden')
  }
}
```

This has the advantage of letting you control the styling of `.hidden` elements
in your CSS, so you can choose to add animations or change which property makes them disappear
– for instance, you might move a menu off the side of the screen so that it slides into view.
This is much harder to change quickly in your javascript.

## Don't attach to `window`

I would generally avoid attaching event listeners to `window`.
Instead, I would attach the event listener to the smallest
element I can.

In your case, that might mean looking at `modal.addEventListener('click', …)`.
