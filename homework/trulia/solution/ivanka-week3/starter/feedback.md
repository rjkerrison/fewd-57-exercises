# Ivanka Week 4 Homework Feedback

Hi Ivanka! Excellent work here.
The site itself looks great.

I'm just going to go ahead and list everything I liked:

- the `cursor: pointer` over the house which opens the module
- great definitions of `slide-in` and `slide-out` animations
- it's impressive you're using animations since we're yet to cover this!
- your javascript is really easy to follow
- `setTimeout` to delay changing the property `display: none` is inventive
- it's great to see you researching outside what we've covered in class
- it's awesome to see that your solution is responsive and looks good on mobile and desktop

With the praise all done, now it's time for some tips!

## Naming conventions

In JavaScript, we use `camelCase` by convention.

For class names, we use `kebab-case` by convention.

Following these conventions, your declarations in `main.js` would be

```js
const openPopup = document.querySelector(".open-popup");
const closePopup = document.querySelector(".close-popup");
```

There's nothing wrong programmatically with the names you had,
it's just likely to look odd to seasoned developers who use the conventions.

## Don't set styling directly in JavaScript

If you remember just one _don't_ rule about JavaScript from this course,
this may well be the best one.

Instead of setting

```js
  overlay.style.display = "flex";
  overlay.style.cssText =
    "animation:slide-in .5s ease; animation-fill-mode:forwards;";
```

in your JavaScript, you could instead set

```js
  overlay.classList.add('active')
  overlay.classList.remove('hidden')
```

in your `.openPopup` click listener and
in your `.closePopup` click listener, you'd have

```js
  overlay.classList.remove('active')
  setTimeout(() => {
    overlay.classList.add('hidden')
  }, 500);
```

to match.

The CSS to match would be

```css
.overlay {
  display: flex;
  animation: slide-out .5s ease;
  animation-fill-mode: forwards;
}
.overlay.active {
  animation: slide-in .5s ease;
  animation-fill-mode: forwards;
}
.overlay.hidden {
    display: none;
}
```

and you'd want the classes on pageload (i.e. in your HTML)
to be given by `class="overlay hidden"` so that it's hidden by default.

